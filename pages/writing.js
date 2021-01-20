import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

import WritingPiece from "../components/WritingPiece";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData("published-writing");
	console.log(allPostsData);
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Writing({ allPostsData }) {
	console.log(allPostsData);
	return (
		<Layout>
			<section>
				<h2>Writing</h2>
				{allPostsData.map(({ id, title, url, coauthor, date, blurb, status }) => (
					<WritingPiece
						id={id}
						title={title}
						url={url}
						coauthor={coauthor}
						date={date}
						blurb={blurb}
						status={status}
					/>
				))}
			</section>
		</Layout>
	);
}
