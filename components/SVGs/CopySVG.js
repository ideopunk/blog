import useState from "react";
import { siteColor } from "../Layout";

export default function Copy() {
	return (
		<svg viewBox="0 0 512 512" width="25px" height="auto">
			<title>Copy</title>
			<rect
				x="128"
				y="128"
				width="336"
				height="336"
				rx="57"
				ry="57"
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-width="32"
			/>
			<path
				d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="32"
			/>
			<style jsx>{`
				rect {
					fill: #df9c61;
					transition: all 0.1s linear;
				}

				rect:hover {
					fill: ${siteColor};
				}
			`}</style>
		</svg>
	);
}
