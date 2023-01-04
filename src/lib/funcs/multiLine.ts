import * as d3 from "d3";
import data from "../../data.json";
import { height, margin, width, type d3Datum, type datum } from "./storyDataUtils";
import { sortByDateAscending, getLastDayOfMonth } from "./storyDataUtils";

const domain = [0, 15];
function toLine(data: d3Datum[], condition?: (data: d3Datum, cS?: string) => boolean, cs?: string) {
	// const arr = Array.from({ length: 12 }).map(() => ({ entries: 0, total: 0 }));
	const obj: { [key: string]: { entries: number; total: number } } = {};
	for (const datum of data) {
		const m = datum.date.getMonth();
		const y = datum.date.getFullYear();

		const lastDay = getLastDayOfMonth(y, m);
		const halfwayThroughMonth = lastDay / 2;

		const oldD = datum.date.getDate();

		const d = oldD >= halfwayThroughMonth ? lastDay : Math.floor(halfwayThroughMonth);

		const accessor = `${y}-${m + 1}-${d}`;
		if (!(accessor in obj)) {
			obj[accessor] = { entries: 0, total: 0 };
		}

		if (!condition) {
			obj[accessor].entries += 1;
			continue;
		}

		if (condition(datum, cs)) {
			obj[accessor].entries += 1;
		}
	}

	const a = [];
	for (const [key, val] of Object.entries(obj)) {
		a.push({ value: val.entries, date: new Date(key) });
	}
	a.sort(sortByDateAscending);

	return a;
}

export default function multiLine(
	id: string,
	condition: (data: d3Datum, cS?: string) => boolean,
	conditionSpecification?: string
) {
	d3.select("#" + id).html("");

	// DATA MANIPULATION
	const d3Data = data.map((d) => {
		const parsedDate = d3.timeParse("%e %b %g")(d.date);
		if (!parsedDate) {
			throw new Error("could not parse date: " + d.date);
		}
		return { ...d, date: parsedDate };
	});

	d3Data.sort(sortByDateAscending);

	// LAYOUT
	const svg = d3
		.select("#" + id)
		.append("svg")
		.attr("xmlns", "http://www.w3.org/2000/svg")
		.attr("viewBox", [0, 0, width - margin.right, height + margin.top + margin.bottom])
		.attr("width", `100%`)
		.attr("style", `max-width: 100%;`);

	// x

	// y
	const y = d3.scaleLinear().domain(domain).range([height, 0]);
	const justDates = d3Data.map((d) => d.date);
	const x = d3
		.scaleTime()
		.domain([d3.min(justDates) as Date, d3.max(justDates) as Date])
		.range([0, width - margin.left - margin.right]);

	// // LINE
	const line = toLine(d3Data, condition, conditionSpecification);
	const lineGenerator = d3
		.line()
		.curve(d3.curveBumpX)
		.x(function (d) {
			return x(d.date);
		})
		.y(function (d) {
			return y(d.value);
		});

	const lineStretched = lineGenerator(line);

	svg
		.append("path")
		.datum(line)
		.attr("fill", "none")
		.attr("stroke", "#137f94")
		.attr("opacity", 0.8)
		.attr("transform", `translate(${margin.left / 2}, ${margin.top})`)
		.attr("stroke-width", 1.5)
		.attr("d", lineStretched);

	const totalLine = toLine(d3Data);
	const totalLineStretched = lineGenerator(totalLine);

	svg
		.append("path")
		.datum(line)
		.attr("fill", "none")
		.attr("stroke", "#df5c61")
		.attr("opacity", 0.8)
		.attr("transform", `translate(${margin.left / 2}, ${margin.top})`)
		.attr("stroke-width", 1.5)
		.attr("d", totalLineStretched);

	// AXES

	svg
		.append("g")
		.attr("transform", `translate(${margin.left / 2}, ${height + margin.bottom})`)
		.call(d3.axisBottom(x));

	svg
		.append("g")
		.attr("transform", `translate(${margin.left / 2}, ${margin.bottom})`)
		.call(d3.axisLeft(y));

	// tooltip
	const tooltip = svg
		.append("text")
		.attr("transform", `translate(${margin.left + 16}, ${margin.top + 20})`)
		.attr("paint-order", "stroke")
		.attr("text-anchor", "start")
		.attr("stroke", "white")
		.attr("font-family", "Merriweather Sans")
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
	const ttDate = tooltip.append("tspan").attr("x", 5).attr("y", 30);
	const ttWordcount = tooltip.append("tspan").attr("x", 5).attr("y", 54);

	return svg.node();
}
