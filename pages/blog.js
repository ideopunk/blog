import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData("blogposts");
	return {
		props: {
			allPostsData,
		},
	};
}

export default function blog({ allPostsData }) {
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
