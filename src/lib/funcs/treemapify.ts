import * as d3 from "d3";
import data from "../../data.json";
import { stringToColor } from "./toPastel";
const width = 800;
const height = 600;
const margin = { left: 40, right: 40, top: 40, bottom: 40 };

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;
type datum = ArrElement<typeof data>;

type subjectData = { title: string; count: number };
function toSubjectCount(data: datum[]): subjectData[] {
	const obj: { [title: string]: number } = {};

	for (const datum of data) {
		for (const subject of datum.subject_tags) {
			if (!(subject in obj)) {
				obj[subject] = 1;
			} else {
				obj[subject] = obj[subject] + 1;
			}
		}
	}

	const arr: subjectData[] = [];
	for (const [key, val] of Object.entries(obj)) {
		arr.push({ title: key.charAt(0).toUpperCase() + key.slice(1), count: val });
	}
	return arr;
}

export default function treemapify(id: string) {
	// LAYOUT
	const svg = d3
		.select("#" + id)
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);

	const subjectData = toSubjectCount(data);
	const root = d3.hierarchy({ children: subjectData }).sum((d) => d.count);

	console.log(root);

	// Then d3.treemap computes the position of each element of the hierarchy
	// The coordinates are added to the root object above
	d3.treemap<{ children: subjectData[] }>().size([width, height]).padding(4)(root);

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

	const showTooltip = function (d: subjectData) {
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
		.style("fill", (d) => stringToColor(d.data.count.toString(2)));

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
