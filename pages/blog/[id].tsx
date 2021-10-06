import Layout from "../../components/Layout";
import styles from "../../styles/markdown.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import commentBox from "commentbox.io";
import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id, "blogposts");
	return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds("blogposts");
	return { paths, fallback: false };
};

export default function Post({ postData }) {
	useEffect(() => {
		const removeCommentBox = commentBox("5634391980113920-proj");
		return () => removeCommentBox();
	}, []);

	return (
		<Layout>
			<Head>
				<title>{postData.title} / Ideopunk </title>
			</Head>
			<article className="mx-4 sm:mx-auto max-w-4xl text-center p-4">
				<h1 className="text-2xl mb-4">{postData.title}</h1>
				<br />
				<div className="flex justify-between mb-4">
					<Date dateString={postData.date} />
					<small className="italic">Epistemic status: {postData.status}</small>
				</div>
				<hr />

				<div
					dangerouslySetInnerHTML={{ __html: postData.lazyHtml }}
					className={`${styles.markdown} mb-4`}
				/>
				<div className={`commentbox mb-4`} />
			</article>
		</Layout>
	);
}
