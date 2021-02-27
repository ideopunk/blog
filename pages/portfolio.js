import Project from "../components/Project";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Resume from "../components/Resume";
import JS from "../components/SVGs/langs/JS";
import CSS from "../components/SVGs/langs/CSS";
import HTML from "../components/SVGs/langs/HTML";
import ReactIcon from "../components/SVGs/langs/React";
import NextIcon from "../components/SVGs/langs/Next";
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
				<img src="/images/next.png" width="33%" height="33%"/>
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
					// img="/images/squares/twitterSquare.jpg"
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
				<Project
					id={1}
					color="#aefadd"
					img="/images/squares/twitterSquare.jpg"
					title="Fake Twitter"
					text="I rebuilt Twitter lmao"
					links={[
						{ url: "https://github.com/Ideopunk/twitter-clone", domain: "GitHub" },
						{ url: "https://twitter-clone-12cf9.web.app/", domain: "Live" },
					]}
				/>
				<Project
					id={2}
					color="#dfeefc"
					img="/images/squares/BSSquare.jpg"
					title="Battleship"
					text="Battleship game"
					links={[
						{ url: "https://github.com/Ideopunk/Battleship", domain: "GitHub" },
						{ url: "https://ideopunk.github.io/Battleship/", domain: "Live" },
					]}
				/>
				<Project
					bottom
					id={3}
					color="#eecaa6"
					img="/images/squares/WriterSquare.jpg"
					title="Node Blog"
					text="Blog practice"
					links={[
						{ url: "https://github.com/Ideopunk/node-blog", domain: "GitHub" },
						{ url: "https://reverent-northcutt-d65fb8.netlify.app/", domain: "Writer" },
						{ url: "https://reverent-franklin-b97805.netlify.app/", domain: "Reader" },
					]}
					colorFlip
				/>
			</div>
		</Layout>
	);
}
