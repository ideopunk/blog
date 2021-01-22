import Layout, { siteTitle } from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import generateRss from "../../lib/rss";
import fs from "fs";
import SubscriptionBox from "../../components/Subscribe";

// generating rss here as side-effect
export async function getStaticProps() {
	const allPostsData = getSortedPostsData("blogposts");

	// side effect!!
	const rss = generateRss(allPostsData);
	fs.writeFileSync("./public/rss.xml", rss);

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
				<SubscriptionBox />
				<ul>
					{allPostsData.map(({ id, date, title, preview }) => (
						<li key={id} className="blogpost">
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<p>
								<Date dateString={date} />
							</p>
							<p>{preview}</p>
						</li>
					))}
				</ul>
				<style jsx>{`
					.blogpost {
						max-width: 500px;
						margin: 1rem;
						padding: 1rem;
						border-radius: 3px;
						border: 1px solid grey;
						box-shadow: 2px 2px 2px grey;
						transition: all 0.2s ease-out;
					}

					.blogpost:hover {
						background-color: grey;
					}

					* {
						margin-top: 0.5rem;
					}
				`}</style>
			</section>
		</Layout>
	);
}
