import Layout, { siteTitle } from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import generateRss from "../../lib/rss";
import fs from "fs";
import SubscriptionBox from "../../components/Subscribe";
import utils from "../../styles/utils.module.css";

// generating rss here as side-effect
export async function getStaticProps() {
	const allPostsData = getSortedPostsData("blogposts");
	const allArticlesData = getSortedPostsData("published-writing");

	// side effect!!
	const rss = generateRss(allPostsData);
	fs.writeFileSync("./public/rss.xml", rss);

	return {
		props: {
			allPostsData,
			allArticlesData,
		},
	};
}

export default function blog({ allPostsData, allArticlesData }) {
	return (
		<Layout>
			<section>
				<div className="test">
					<ul>
						<li>
							<h3>Blog</h3>
						</li>
						{allPostsData.map(({ id, date, title, preview, status }) => (
							<li key={id} className="blogpost">
								<Link href={`/blog/${id}`}>
									<a className="title">{title}</a>
								</Link>
								<p>
									<Date dateString={date} />
								</p>
								<p className={utils.mrgTop}>{preview}</p>
								<p className={`${utils.txtmed} ${utils.mrgTop}`}>
									Status: {status}
								</p>
							</li>
						))}
					</ul>
					<div>
						<SubscriptionBox />
						<ul className={utils.mrgTop}>
							<li>
								<h3>Articles</h3>
							</li>
							{allArticlesData.map(
								({ id, url, date, title, preview, coauthor, status }) => (
									<li key={id} className="blogpost">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={url}
											className="title"
										>
											{title}
										</a>
										<p>
											<Date dateString={date} />
										</p>
										{coauthor && (
											<p className={utils.txtmed}>With {coauthor}</p>
										)}
										<p className={utils.mrgTop}>{preview}</p>
										<p className={`${utils.txtmed} ${utils.mrgTop}`}>
											Status: {status}
										</p>
									</li>
								)
							)}
						</ul>
					</div>
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
