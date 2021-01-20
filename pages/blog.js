import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData("blogposts");
	return {
		props: {
			allPostsData,
		},
	};
}

export default function blog({ allPostsData }) {
	console.log("all post data");
	console.log(allPostsData);
	return (
		<Layout>
			<div>blog</div>

			<section>
				<h2>Blog</h2>
				<ul>
					{allPostsData.map(({ id, date, title }) => (
						<li key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
