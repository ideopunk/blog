import { MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { landscape, skyIndices } from "../lib/landscape";

export default function Coriolis() {
	const [chars, setChars] = useState(landscape);

	useEffect(() => {
		let interval = setInterval(() => {
			const indexOfIndex = Math.floor(Math.random() * skyIndices.length);
			const trueIndex = skyIndices[indexOfIndex];
			setChars((chrs) => {
				let chrsArray = Array.from(chrs);
				return [
					...chrsArray.slice(0, trueIndex),
					[" "],
					...chrsArray.slice(trueIndex + 1),
				].join("");
			});
		}, 17);

		return () => clearInterval(interval);
	}, []);

	// // Just kinda stops
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const charsArray = Array.from(chars);

	// 		const indexOfIndex = Math.floor(Math.random() * skyIndices.length);
	// 		const trueIndex = skyIndices[indexOfIndex];
	// 		console.log(trueIndex);
	// 		setChars(
	// 			[...charsArray.slice(0, trueIndex), [" "], ...charsArray.slice(trueIndex + 1)].join(
	// 				""
	// 			)
	// 		);
	// 	}, 100);
	// }, [chars]);

	return (
		<>
			<NextSeo
				title="Coriolis"
				description="Hi Glenn"
				canonical="https://www.melange.io"
				openGraph={{
					url: "https://www.melange.io",
					title: "Coriolis / Melange",
					description: "Hi Glenn",
				}}
			/>
			<div className="w-full  h-screen flex justify-center items-center">
				<pre className="transition-colors dark:text-white text-xs   glitch apercu-mono  w-[200ch] ">
					{chars}
				</pre>
			</div>
		</>
	);
}
