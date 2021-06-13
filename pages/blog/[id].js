import Layout from "../../components/Layout";
import styles from "../../styles/markdown.module.css";
import utils from "../../styles/utils.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import commentBox from "commentbox.io";
import { useEffect } from "react";

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id, "blogposts");
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds("blogposts");
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	// console.log(postData)
	useEffect(() => {
		const removeCommentBox = commentBox("5634391980113920-proj");

		return () => removeCommentBox();
	}, []);

	return (
		<Layout>
			<Head>
				<title>{postData.title} / Ideopunk </title>
			</Head>
			<article className="container">
				<h1 className={styles.title}>{postData.title}</h1>
				<br />
				<div className={utils.spread}>
					<Date dateString={postData.date} />
					<small className={styles.status}>Epistemic status: {postData.status}</small>
				</div>
				<hr />

				<div
					dangerouslySetInnerHTML={{ __html: postData.lazyHtml }}
					className={`${styles.markdown}`}
				/>
				<div className={`commentbox ${utils.mrgBot}`} />
			</article>
			<style jsx>
				{`
					.container {
						padding: 1rem;
						max-width: 900px;
						text-align: center;
						margin-left: auto;
						margin-right: auto;
					}

					@media (max-width: 600px) {
						.container {
							margin-left: 1rem;
							margin-right: 1rem;
						}
					}
					
					.container > * {
						margin-bottom: 1rem;
					}
				`}
			</style>
		</Layout>
	);
}
