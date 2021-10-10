import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { ParsedUrlQuery } from "querystring";
import commentBox from "commentbox.io";

import styles from "../../public/style/markdown.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";

type ParsedPostData = {
	title: string;
	date: string;
	preview: string;
	status: string;
	id: string;
	lazyHtml: string;
};

type Props = { parsedPostData: ParsedPostData };

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const parsedPostData = await getPostData(params.id, "blogposts");
	return { props: { parsedPostData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds("blogposts");
	return { paths, fallback: false };
};

export default function Post({ parsedPostData }: { parsedPostData: ParsedPostData }) {
	useEffect(() => {
		const removeCommentBox = commentBox("5634391980113920-proj");
		return () => removeCommentBox();
	}, []);

	return (
		<article className="mx-4 sm:mx-auto max-w-4xl text-center p-4">
			<Head>
				<title>{parsedPostData.title} / Conor Barnes </title>
			</Head>
			<h1 className="text-2xl mb-4">{parsedPostData.title}</h1>
			<br />
			<div className="flex justify-between mb-4">
				<Date dateString={parsedPostData.date} />
				<small className="italic">Epistemic status: {parsedPostData.status}</small>
			</div>
			<hr />

			<div
				dangerouslySetInnerHTML={{ __html: parsedPostData.lazyHtml }}
				className={`${styles.markdown} mb-4`}
			/>
			<div className={`commentbox mb-4`} />
		</article>
	);
}
