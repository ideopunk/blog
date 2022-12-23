import * as d3 from "d3";
import data from "../../data.json";
import { stringToColor } from "./toPastel";
import toTitleCase from "./toTitleCase";
const width = 800;
const height = 600;
const margin = { left: 40, right: 40, top: 40, bottom: 40 };

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
			const k = datum[key];
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
		let tempArr1 = Array.isArray(datum[key1]) ? datum[key1] : [datum[key1]];
		tempArr1 = tempArr1.map((x) => toTitleCase(x));
		for (const val1 of tempArr1) {
			let tempArr2 = Array.isArray(datum[key2]) ? datum[key2] : [datum[key2]];
			tempArr2 = tempArr2.map((x) => toTitleCase(x));

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
	// LAYOUT
	const svg = d3
		.select("#" + id)
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);

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
	d3.treemap<{ children: countData[] }>().size([width, height]).padding(4)(root);

	// TOOLTIP
	const tooltip = svg
		.append("g")
		.append("text")
		.attr("transform", `translate(${margin.left}, 20)`)
		// .attr("transform", `translate(${margin.left + 16}, -${margin.top + 20})`)
		.attr("paint-order", "stroke")
		.attr("text-anchor", "start")
		.attr("stroke", "white")
		.attr("font-family", "sans-serif")
		.attr("font-size", 24)
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
		.attr("transform", `translate(${margin.left}, ${margin.top})`)

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
				combined ? d.data.title.substr(0, d.data.title.indexOf("-")) : d.data.count.toString(2)
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
		.attr("fill", "black");
}
