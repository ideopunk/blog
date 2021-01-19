import Project from "../components/Project";
import Head from "next/head";

export default function portfolio() {
	return (
		<div>
			<Head>
				<title>Projects</title>
			</Head>
			portfolio
			<Project
				color="#aefadd"
				img="/images/squares/twitterSquare.jpg"
				title="Fake Twitter"
				text="fake ol text-o"
				links={[
					{ url: "https://github.com/Ideopunk/twitter-clone", domain: "GitHub" },
					{ url: "https://twitter-clone-12cf9.web.app/", domain: "Live" },
				]}
			/>
			<Project
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
	);
}
