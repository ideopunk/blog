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
