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
			<section>
				<div className="test">
					<ul>
						<li>
							<h3>Blog</h3>
						</li>
						{allPostsData.map(({ id, date, title, preview }) => (
							<li key={id} className="blogpost">
								<Link href={`/blog/${id}`}>
									<a className="title">{title}</a>
								</Link>
								<p>
									<Date dateString={date} />
								</p>
								<p>{preview}</p>
							</li>
						))}
					</ul>
					<SubscriptionBox />
				</div>
				<style jsx>{`
					h3 {
						padding-left: 1rem;
					}

					section {
						margin-top: 2rem;
					}

					.test {
						display: flex;
						justify-content: space-evenly;
					}

					.title {
						font-size: 1.5rem;
						font-weight: 600;
					}

					.blogpost {
						max-width: 500px;
						margin: 1rem;
						padding: 1rem;
						border-radius: 3px;
						border: 1px solid rgba(0, 0, 0, 0.2);
						box-shadow: 2px 2px 2px grey;
						transition: all 0.2s ease-out;
					}

					.blogpost:hover {
						background-color: grey;
					}

					li {
						margin-top: 0.5rem;
					}

					li:first-child {
						margin: 0;
					}
				`}</style>
			</section>
		</Layout>
	);
}
