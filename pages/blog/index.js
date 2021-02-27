import { useState } from "react";
import Layout, { siteColor, siteSecondaryColor } from "../../components/Layout";
import { getSortedPostsData, getPostData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import generateRss from "../../lib/rss";
import fs from "fs";
import SubscriptionBox from "../../components/Subscribe";
import utils from "../../styles/utils.module.css";
import styles from "../../styles/markdown.module.css";
import { useEffect } from "react";

// generating rss here as side-effect
export async function getStaticProps() {
	const allPostsData = getSortedPostsData("blogposts");
	const allArticlesData = getSortedPostsData("published-writing");

	const allPostsText = await Promise.all(
		allPostsData.map(async (post) => getPostData(post.id, "blogposts"))
	);

	// side effect!!
	const rss = generateRss(allPostsData);
	fs.writeFileSync("./public/rss.xml", rss);

	return {
		props: {
			allPostsData,
			allArticlesData,
			allPostsText,
		},
	};
}

function Post({ id, date, title, status, lazyHtml }) {
	return (
		<li className="container" key={id}>
			<h1 className={title}>{title}</h1>
			<br />
			<div className={utils.spread}>
				<Date dateString={date} />
				<small className={styles.status}>Epistemic status: {status}</small>
			</div>
			<hr />

			<div
				dangerouslySetInnerHTML={{ __html: lazyHtml }}
				className={`${styles.markdown}`}
			/>
			<hr className="backup" />
			<style jsx>{`
				hr {
					margin-bottom: 2rem;
				}

				.backup {
					margin-top: 2rem;
					margin-bottom: 4rem;
				}
			`}</style>
		</li>
	);
}
export default function blog({ allPostsData, allArticlesData, allPostsText }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Layout>
			<section>
				<div className="test">
					<ul className="col-side">
						<li>
							<h3>Blog</h3>
						</li>
						{allPostsData.map(({ id, date, title, preview, status }) => (
							<li key={id} className="blogpost">
								<Link href={`/blog/${id}`}>
									<a className="title">{title}</a>
								</Link>
							</li>
						))}
					</ul>
					<ul className="col-main">
						{allPostsText
							.slice(0, 1)
							.map(({ id, date, title, status, lazyHtml }) => (
								<Post
									id={id}
									date={date}
									title={title}
									status={status}
									lazyHtml={lazyHtml}
								/>
							))}

						{loaded &&
							allPostsText
								.slice(1)
								.map(({ id, date, title, status, lazyHtml }) => (
									<Post
										id={id}
										date={date}
										title={title}
										status={status}
										lazyHtml={lazyHtml}
									/>
								))}
					</ul>
					<div className="col-side">
						<div className={utils.mrgTop}>
							<h3>Articles</h3>
							{allArticlesData.map(
								({ id, url, date, title, preview, coauthor, status }) => (
									<div className="blogpost">
										<div key={id}>
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
										</div>
									</div>
								)
							)}
						</div>
						<SubscriptionBox />
					</div>
				</div>
				<style jsx>{`
					h3 {
						padding-left: 1rem;
					}

					.backup {
						margin-top: 2rem;
						margin-bottom: 4rem;
					}

					section {
						margin-top: 2rem;
					}

					.test a {
						font-size: 1rem;
					}

					.test {
						display: flex;
						justify-content: center;
					}

					.title {
						font-size: 1.5rem;
						font-weight: 600;
					}

					.blogpost {
						max-width: 500px;
						width: 100%;
						border-radius: 3px;
						padding: 0.5rem;
						border-bottom: 1px solid rgba(0, 0, 0, 0.2);
						transition: all 0.2s ease-out;
					}

					.blogpost a {
						color: ${siteColor};
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

					.col-main {
						flex: 5;
						margin: 1rem;
						padding: 1rem;
						display: flex;
						flex-direction: column;
						align-items: center;
					}

					.col-side {
						margin: 1rem;
						flex: 1;
						padding: 1rem;
						display: flex;
						flex-direction: column;
						align-items: center;
					}
				`}</style>
			</section>
		</Layout>
	);
}
