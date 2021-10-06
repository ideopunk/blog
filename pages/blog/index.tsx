import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

import { siteTitle, siteColor } from "../../consts/consts";

import { getSortedPostsData, getPostData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import generateRss from "../../lib/rss";
import fs from "fs";
import SubscriptionBox from "../../components/Subscribe";
import utils from "../../styles/utils.module.css";
import styles from "../../styles/markdown.module.css";
import { GetStaticProps } from "next";

// generating rss here as side-effect
export const getStaticProps: GetStaticProps = async () => {
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
};

type PostPre = { id: string; date: string; title: string; status: string; preview: string };

function PostPreview({ id, date, title, status, preview }: PostPre) {
	return (
		<li className="container" key={id}>
			<Link href={`/blog/${id}`}>
				<a>
					<h3 className={styles.title}>{title}</h3>
				</a>
			</Link>
			<br />
			<div className={`${utils.spread} ${utils.mrgBot} bgr`}>
				<Date dateString={date} />
				<small className={styles.status}>Epistemic status: {status}</small>
			</div>

			<div style={utils.mrgTop}>{preview}</div>
			<hr className="backup" />
			<style jsx>{`
				h1 {
					color: black;
				}

				hr {
					margin-bottom: 2rem;
				}

				.backup {
					margin-top: 2rem;
					margin-bottom: 4rem;
				}

				.bgr {
					display: flex;
					flex-direction: column;
				}

				@media (max-width: 600px) {
					h3 {
						font-size: 1.25rem;
					}

					.backup {
						margin-bottom: 1rem;
					}
				}
			`}</style>
		</li>
	);
}

export default function blog({ allPostsData, allPostsText }) {
	return (
		<Layout>
			<Head>
				<title>Ideopunk</title>
			</Head>
			<section>
				<div className="test">
					<ul className="col-main">
						{allPostsData.map(({ id, date, title, status, preview }) => (
							<PostPreview
								id={id}
								date={date}
								title={title}
								status={status}
								preview={preview}
							/>
						))}
					</ul>
					<div className="col-side">
						<SubscriptionBox />
					</div>
				</div>
				<style jsx>{`
					h3 {
						margin-left: 0.5rem;
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
						padding-left: 4rem;
						padding-right: 4rem;
						display: flex;
						flex-direction: column;
					}

					.col-side {
						margin: 1rem;
						flex: 1;
						padding: 1rem;
						display: flex;
						flex-direction: column;
					}

					@media (max-width: 600px) {
						.col-main {
							padding: 0;
							margin-top: 0;
							padding-left: 0.5rem;
							padding-right: 0.5rem;
						}

						.col-side {
							display: none;
						}
					}
				`}</style>
			</section>
		</Layout>
	);
}
