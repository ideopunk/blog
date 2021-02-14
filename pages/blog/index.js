import Layout, { siteColor, siteSecondaryColor } from "../../components/Layout";
import { getSortedPostsData, getPostData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import generateRss from "../../lib/rss";
import fs from "fs";
import SubscriptionBox from "../../components/Subscribe";
import utils from "../../styles/utils.module.css";
import styles from "../../styles/markdown.module.css";

// generating rss here as side-effect
export async function getStaticProps() {
	const allPostsData = getSortedPostsData("blogposts");
	const allArticlesData = getSortedPostsData("published-writing");

	const allPostsText = await Promise.all(
		allPostsData.map(async (post) => getPostData(post.id, "blogposts"))
	);

	console.log("allPosts", allPostsText);
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

export default function blog({ allPostsData, allArticlesData, allPostsText }) {
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
					<ul className="col-main">
						{allPostsText.map(({ id, date, title, status, contentHtml }) => (
							<article className="container" key={id}>
								<h1 className={title}>{title}</h1>
								<br />
								<div className={utils.spread}>
									<Date dateString={date} />
									<small className={styles.status}>
										Epistemic status: {status}
									</small>
								</div>
								<hr />

								<div
									dangerouslySetInnerHTML={{ __html: contentHtml }}
									className={`${styles.markdown}`}
								/>
							</article>
						))}
					</ul>
					<div className="col-side">
						<SubscriptionBox />
						<div className={utils.mrgTop}>
							<h3>Articles</h3>
							<div className="blogpost">
								{allArticlesData.map(
									({ id, url, date, title, preview, coauthor, status }) => (
										<div key={id} className={utils.mrgBot}>
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
										//								{/* <p className={utils.mrgTop}>{preview}</p> */}
										// 									{/* <p className={`${utils.txtmed} ${utils.mrgTop}`}>
										// 											Status: {status}
										// </p> */}
									)
								)}
							</div>
						</div>
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
						justify-content: center;
					}

					.test > * {
					}

					.title {
						font-size: 1.5rem;
						font-weight: 600;
					}

					.blogpost {
						max-width: 500px;
						width: 100%;
						margin: 1rem;
						padding: 1rem;
						border-radius: 3px;
						border: 1px solid rgba(0, 0, 0, 0.2);
						box-shadow: 2px 2px 2px grey;
						transition: all 0.2s ease-out;
						background-color: ${siteSecondaryColor};
						color: white;
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
