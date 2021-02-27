import Project from "../components/Project";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Resume from "../components/Resume";
import JS from "../components/SVGs/langs/JS";
import CSS from "../components/SVGs/langs/CSS";
import HTML from "../components/SVGs/langs/HTML";
import ReactIcon from "../components/SVGs/langs/React";
import Node from "../components/SVGs/langs/Node";
import Express from "../components/SVGs/langs/Express";
import Git from "../components/SVGs/langs/Git";
import Mongo from "../components/SVGs/langs/Mongo";

function Languages() {
	return (
		<>
			<div className="lang">
				<HTML />
				<CSS />
				<JS />
				<ReactIcon />
				<img src="/images/next.png" width="33%" height="33%" />
				<Node />
				<Express />
				<Git />
				<Mongo />
			</div>
			<style jsx>
				{`
					.lang {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center;
						width: 400px;
						height: 400px;
					}
				`}
			</style>
		</>
	);
}

export default function portfolio() {
	return (
		<Layout>
			<div>
				<Head>
					<title>Projects</title>
				</Head>

				<Project
					id={0}
					color="white"
					comp={<Languages />}
					title="Work"
					text="I'm a front-end engineer at WeFlop. When I'm not doing that, I'm building personal websites for people. If that's something you're interested in, my contact information is below!"
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
				/>
			</div>
		</Layout>
	);
}
