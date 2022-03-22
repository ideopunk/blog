import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { ParsedUrlQuery } from "querystring";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";

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
	const {theme} = useTheme()
	return (
		<div className="sm:mx-auto text-xl max-w-prose px-2 min-h-screen">
			<NextSeo
				title={parsedPostData.title}
				description={parsedPostData.preview}
				openGraph={{ title: parsedPostData.title, description: parsedPostData.preview }}
			/>
			<h1 className="text-xl font-bold md:text-2xl mb-4 md:mb-6">{parsedPostData.title}</h1>
			<div className="flex flex-col md:flex-row justify-between mb-4">
				<Date dateString={parsedPostData.date} />
				<span className="text-sm md:text-base font-light">
					{parsedPostData.status ? `Epistemic status: ${parsedPostData.status}` : ""}
				</span>
			</div>
			<hr />

			<article
				dangerouslySetInnerHTML={{ __html: parsedPostData.lazyHtml }}
				// for some reason including prose prevents prose-invert from working in dark mode ¯\_(ツ)_/¯ 
				className={`  prose-lg max-w-none md:prose-xl my-4 ${theme === "light" ? "prose" : "prose-invert"} transition-all`}
			/>
		</div>
	);
}
