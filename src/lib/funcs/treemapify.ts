import * as d3 from "d3";
import data from "../../data.json";
import { height, margin, padding, width } from "./storyDataUtils";
import { stringToColor } from "./toPastel";
import toTitleCase from "./toTitleCase";

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;
type datum = ArrElement<typeof data>;

type countData = { title: string; count: number };

function toCount(data: datum[], key: keyof datum): countData[] {
	const obj: { [title: string]: number } = {};

	for (const datum of data) {
		if (Array.isArray(datum[key])) {
			for (const subject of datum[key]) {
				if (!(subject in obj)) {
					obj[subject] = 1;
				} else {
					obj[subject] = obj[subject] + 1;
				}
			}
		} else {
			let k = "";
			const prop = datum[key];
			if (typeof prop === "boolean") {
				k = prop ? toTitleCase(key) : "Not " + key;
			} else {
				k = toTitleCase(String(prop));
			}
			if (!(k in obj)) {
				obj[k] = 1;
			} else {
				obj[k] = obj[k] + 1;
			}
		}
	}

	const arr: countData[] = [];
	for (const [key, val] of Object.entries(obj)) {
		arr.push({ title: toTitleCase(key), count: val });
	}
	return arr;
}

function toCountCombined(data: datum[], key1: keyof datum, key2: keyof datum): countData[] {
	const obj: { [title: string]: number } = {};

	for (const datum of data) {
		const prop1 = datum[key1];
		let tempArr1 = Array.isArray(prop1) ? prop1 : [prop1];
		tempArr1 = tempArr1.map((x) => {
			if (typeof x === "boolean") {
				return x ? toTitleCase(key1) : "Not " + key1;
			} else {
				return toTitleCase(String(x));
			}
		});
		for (const val1 of tempArr1) {
			const prop2 = datum[key2];
			let tempArr2 = Array.isArray(prop2) ? prop2 : [prop2];
			tempArr2 = tempArr2.map((x) => {
				if (typeof x === "boolean") {
					return x ? toTitleCase(key2) : "Not " + key2;
				} else {
					return toTitleCase(x);
				}
			});

			for (const val2 of tempArr2) {
				const subject = val1 + " | " + val2;
				if (!(subject in obj)) {
					obj[subject] = 1;
				} else {
					obj[subject] = obj[subject] + 1;
				}
			}
		}
	}

	const arr: countData[] = [];
	for (const [key, val] of Object.entries(obj)) {
		arr.push({ title: key, count: val });
	}
	return arr;
}

export default function treemapify(id: string, params: (keyof datum)[]) {
	d3.select("#" + id).html("");
	// LAYOUT
	const svg = d3
		.select("#" + id)
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.attr("style", "max-width: 100%;  height: intrinsic;");

	const combined = params.length > 1;
	let subjectData = [];
	if (combined) {
		subjectData = toCountCombined(data, params[0], params[1]);
	} else {
		subjectData = toCount(data, params[0]);
	}

	const root = d3.hierarchy({ children: subjectData }).sum((d) => d.count);

	// Then d3.treemap computes the position of each element of the hierarchy
	// The coordinates are added to the root object above
	d3.treemap<{ children: countData[] }>().size([width, height]).padding(padding)(root);

	// TOOLTIP
	const tooltip = svg
		.append("g")
		.append("text")
		.attr("transform", `translate(${-padding}, ${margin.top * 0.75})`)
		.attr("paint-order", "stroke")
		.attr("text-anchor", "start")
		.attr("stroke", "white")
		.attr("font-family", "Merriweather Sans")
		.attr("font-size", 20)
		.style("opacity", 1)
		.attr("width", 100)
		.attr("height", 100)
		.attr("class", "tooltip")
		.style("background-color", "white")
		.style("border-radius", "5px")
		.style("border-width", 2)
		.style("border-color", "black")
		.style("padding", "10px")
		.style("color", "black");

	const ttTitle = tooltip.append("tspan").attr("x", 5).attr("y", 0);
	const ttCount = tooltip.append("tspan").attr("x", 5).attr("y", 20);

	const showTooltip = function (d: countData) {
		tooltip.transition().duration(200);
		tooltip.style("opacity", 1);

		ttTitle.text(d.title);
		ttCount.text(d.count + " instance" + (d.count > 1 ? "s" : "")).attr("font-size", 16);
	};

	const hideTooltip = function () {
		tooltip.transition().duration(200).style("opacity", 0);
	};

	// RECTANGLES
	const groups = svg
		.append("g")
		.attr("transform", `translate(${-padding}, ${margin.top * 1.5})`)

		.selectAll("rect")
		.data(root.leaves())
		.join("g")
		.attr("width", (d) => d.x1 - d.x0)
		.attr("height", (d) => d.y1 - d.y0)
		.on("mouseover", function (e, d) {
			showTooltip(d.data);
		})
		.on("mouseleave", function (e, d) {
			hideTooltip();
		});

	// RECTANGLES
	groups
		.append("rect")
		.attr("x", (d) => d.x0)
		.attr("y", (d) => d.y0)
		.attr("width", (d) => d.x1 - d.x0)
		.attr("height", (d) => d.y1 - d.y0)
		.style("stroke", "black")
		.style("fill", (d) =>
			stringToColor(
				combined ? d.data.title.substr(0, d.data.title.indexOf("|")) : d.data.count.toString(2)
			)
		);

	// TEXT
	groups
		.append("svg")
		.attr("x", (d) => d.x0 + 5)
		.attr("y", (d) => d.y0)

		.attr("width", (d) => d.x1 - d.x0 - 5)
		.attr("height", (d) => d.y1 - d.y0)
		.append("text")
		.attr("x", 0)
		.attr("y", function (d) {
			if (d.y1 - d.y0 < 24) {
				return 10;
			}
			return 15;
		}) // +20 to adjust position (lower)
		.text((d) => d.data.title)
		.attr("font-size", "9px")
		.attr("font-family", "Merriweather Sans")
		.attr("fill", "black");
}
