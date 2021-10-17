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
				<Rust size={size / mobileRatio} />
				<Git size={size / mobileRatio} />
			</div>
		</>
	);
}

export default function Work() {
	return (
		<div>
			<Head>
				<title>Work / Conor Barnes</title>
				<meta name="description" content="Projects" />
			</Head>

			<Project
				id={0}
				color="white"
				comp={<Languages />}
				text="I'm a front-end engineer at Melange. When I'm not doing that, I'm teaching myself Rust. If you ever want to talk programming, my contact information is below!"
				flip
			/>
			<Project
				id={1}
				color="#1A2D52"
				dark
				img="/images/squares/melangesquare.png"
				title="Melange"
				text="I'm building the front-end of a social betting app in React Native."
				link="https://www.melange.io/"
				bottom
			/>
		</div>
	);
}
