import Project from "../components/Project";
import Head from "next/head";
import Layout from "../components/Layout";
import { siteTitle } from "../consts/consts";
import Image from "next/image";
import JS from "../components/SVGs/langs/JS";
import CSS from "../components/SVGs/langs/CSS";
import HTML from "../components/SVGs/langs/HTML";
import ReactIcon from "../components/SVGs/langs/React";
import Node from "../components/SVGs/langs/Node";
import NextIcon from "../components/SVGs/langs/NextIcon";
import Express from "../components/SVGs/langs/Express";
import Git from "../components/SVGs/langs/Git";
import Mongo from "../components/SVGs/langs/Mongo";
import { useState } from "react";
import useWindowSize from "../lib/useWindowSize";

function Languages() {
	const { width: size } = useWindowSize();

	const mobileRatio = size <= 600 ? 6 : 12;

	return (
		<>
			<div className="lang" style={{ width: size / (mobileRatio / 3) }}>
				<HTML size={size / mobileRatio} />
				<CSS size={size / mobileRatio} />
				<JS size={size / mobileRatio} />
				<ReactIcon size={size / mobileRatio} />
				<NextIcon size={size / mobileRatio} />
				<Git size={size / mobileRatio} />
				<Node size={size / mobileRatio} />
				<Express size={size / mobileRatio} />
				<Mongo size={size / mobileRatio} />
			</div>
			<style jsx>
				{`
					.lang {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	);
}

export default function Work() {
	return (
		<Layout>
			<div>
				<Head>
					<title>Work / {siteTitle}</title>
				</Head>

				<Project
					id={0}
					color="white"
					comp={<Languages />}
					text="I'm a front-end engineer at Melange. When I'm not doing that, I'm building personal websites for people. If that's something you're interested in, my contact information is below!"
					links={[]}
					flip
				/>
				<Project
					id={1}
					color="#1A2D52"
					dark
					img="/images/squares/melangesquare.png"
					title="Melange"
					text="I'm building the front-end of a social betting app in React Native."
					links={[{ url: "https://www.melange.io/", domain: "Landing Page" }]}
					bottom
				/>
			</div>
		</Layout>
	);
}
