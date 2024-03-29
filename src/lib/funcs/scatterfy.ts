import * as d3 from "d3";
import data from "../../data.json";
import { height, margin, width, type d3Datum, type datum } from "./storyDataUtils";
import { sortByDateAscending } from "./storyDataUtils";

function toWordcountLine(data: d3Datum[]) {
	// const arr = Array.from({ length: 12 }).map(() => ({ entries: 0, total: 0 }));
	const obj: { [key: string]: { entries: number; total: number } } = {};
	for (const datum of data) {
		const m = datum.date.getMonth();
		const y = datum.date.getFullYear();

		const oldD = datum.date.getDate();
		const d = oldD >= 15 ? 28 : 14;

		const accessor = `${y}-${m + 1}-${d}`;
		if (!(accessor in obj)) {
			obj[accessor] = { entries: 0, total: 0 };
		}
		obj[accessor].entries += 1;
		obj[accessor].total += datum.wordcount;
	}

	const a = [];
	for (const [key, val] of Object.entries(obj)) {
		a.push({ value: val.total / val.entries, date: new Date(key) });
	}
	a.sort(sortByDateAscending);

	return a;
}

export default function chartify(id: string, trend?: boolean) {
	// DATA MANIPULATION
	const d3Data = data.map((d) => {
		const parsedDate = d3.timeParse("%e %b %g")(d.date);
		if (!parsedDate) {
			throw new Error("could not parse date: " + d.date);
		}
		return { ...d, date: parsedDate };
	});

	d3Data.sort(sortByDateAscending);

	const maxWordCount = Math.ceil(Math.max(...d3Data.map((d) => d.wordcount)) / 500) * 500;

	// LAYOUT
	const svg = d3
		.select("#" + id)
		.append("svg")
		.attr("xmlns", "http://www.w3.org/2000/svg")
		.attr("viewBox", [0, 0, width - margin.right / 2, height + margin.top + margin.bottom])
		.attr("width", `100%`)
		.attr("style", `max-width: 100%;`);

	// AXES

	// x
	const justDates = d3Data.map((d) => d.date);
	const x = d3
		.scaleTime()
		.domain([d3.min(justDates) as Date, d3.max(justDates) as Date])
		.range([0, width - margin.left - margin.right]);

	svg
		.append("g")
		.attr("transform", `translate(${margin.left}, ${height + margin.bottom})`)
		.call(d3.axisBottom(x));

	// y
	const y = d3.scaleLinear().domain([0, maxWordCount]).range([height, 0]);
	svg
		.append("g")
		.attr("transform", `translate(${margin.left}, ${margin.bottom})`)
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

	const showTooltip = function (d: d3Datum) {
		tooltip.transition().duration(200);
		tooltip.style("opacity", 1);

		ttTitle.text(d.title);
		ttDate.text(d.date.toLocaleDateString()).attr("font-size", 16);

		ttWordcount.text(d.wordcount + " words").attr("font-size", 16);
	};

	const hideTooltip = function () {
		tooltip.transition().duration(200).style("opacity", 0);
	};

	// // LINE
	if (trend) {
		const line = toWordcountLine(d3Data);
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
			.attr("transform", `translate(${margin.left}, ${margin.bottom})`)

			.attr("stroke-width", 1.5)
			.attr("d", lineStretched);
	}

	// DOTS
	const dotContainers = svg
		.append("g")

		.attr("transform", `translate(${margin.left}, ${margin.bottom})`)
		.selectAll("dot")
		.data(d3Data)
		.join("circle")
		.attr("r", 4.5)

		.attr("stroke", "white")
		.attr("stroke-width", 1)
		.attr("fill", (d) => {
			// if (!condition) {
			return "#df5c61";
			// }

			// if (condition(d, conditionSpecification)) {
			// 	return "#df5c61";
			// } else {
			// 	return "#aaaaaa";
			// }
		})
		.attr("title", (d) => d.title)
		.attr("cx", (d) => x(d.date))
		.attr("cy", (d) => y(d.wordcount))
		.on("mouseover", function (e, d) {
			showTooltip(d);
		})
		.on("mouseleave", function (e, d) {
			hideTooltip();
		});

	return svg.node();
}
