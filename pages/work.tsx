import Project from "../components/Project";
import Head from "next/head";
import Image from "next/image";
import JS from "../components/SVGs/langs/JS";
import CSS from "../components/SVGs/langs/CSS";
import HTML from "../components/SVGs/langs/HTML";
import ReactIcon from "../components/SVGs/langs/React";
import Node from "../components/SVGs/langs/Node";
import NextIcon from "../components/SVGs/langs/Next";
import Git from "../components/SVGs/langs/Git";
import TS from "../components/SVGs/langs/TS";
import useWindowSize from "../lib/useWindowSize";
import Rust from "../components/SVGs/langs/Rust";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";
import Go from "../components/SVGs/langs/Go";

function Languages() {
	const { width: size } = useWindowSize();
	// const mobileRatio = 12;
	const mobileRatio = size <= 600 ? 6 : 12;

	return (
		<>
			<div
				className="flex items-center justify-between  "
				style={{ width: size / (mobileRatio / 3) + 20 }}
			>
				<HTML size={size / mobileRatio} />
				<CSS size={size / mobileRatio} />
				<JS size={size / mobileRatio} />
			</div>
			<div
				className="flex flex-wrap items-center justify-between  my-2"
				style={{ width: size / (mobileRatio / 3) + 20 }}
			>
				<ReactIcon size={size / mobileRatio} />
				<NextIcon size={size / mobileRatio} />
				<TS size={size / mobileRatio} />
			</div>
			<div
				className="flex flex-wrap items-center justify-between  "
				style={{ width: size / (mobileRatio / 3) + 20 }}
			>
				<Node size={size / mobileRatio} />
				<Go size={size / mobileRatio} />
				<Rust size={size / mobileRatio} />
				{/* <Git size={size / mobileRatio} /> */}
			</div>
		</>
	);
}

export default function Work() {
	const { theme } = useTheme();
	const light = theme === "light";
	return (
		<div>
			<NextSeo
				title="Work"
				description="Projects"
				openGraph={{
					title: "Work",
					description: "Projects",
				}}
			/>
			<Project
				id={0}
				// color={light ? "white" : "hsl(190, 77%, 80%)"}
				comp={<Languages />}
				title="Resume"
				link="/conor_barnes_resume_brief.pdf"
				text="I'm currently job hunting! Click here to download my resume."
				flip
			/>
			<Project
				id={1}
				color={theme === "light" ? "#1A2D52" : "#57534e"}
				dark
				img="/images/squares/melangepic.png"
				title="Melange"
				text="From 2021 to 2022, I worked on the front-end of a betting app in React Native and NextJS."
				link="https://www.melange.io/"
			/>
			<Project
				id={2}
				color={light ? "#6cb6e0" : "#1e3a8a"}
				dark
				img="/images/squares/starrynightglitchedsquare.png"
				title="Pixel Sorter"
				text="Create glitch art through pixel sorting! All processing is done in-browser."
				link="https://pixel-sorter.com/"
			/>
			<Project
				id={3}
				color={light ? "#F5CBF3" : "#bd93f9"}
				img="/images/squares/tdpic.png"
				title="Tonal Distancing"
				text="This web app uses a Rust server to highlight word proximity."
				link="https://tonal-distancing-client.vercel.app/"
				bottom
			/>
		</div>
	);
}
