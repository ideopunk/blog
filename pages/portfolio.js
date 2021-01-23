import Project from "../components/Project";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Resume from "../components/Resume";

export default function portfolio() {
	return (
		<Layout>
			<div>
				<Head>
					<title>Projects</title>
				</Head>
				{/* <Resume /> */}
				<Project
					id={0}
					color="white"
					img="/images/squares/twitterSquare.jpg"
					title="Testimony"
					text="Conor is dope. He can use React and Next and Node and Sass and Express and, of course, HTML and CSS."
					links={[]}
					flip
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
					colorFlip
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
				/>
			</div>
		</Layout>
	);
}
