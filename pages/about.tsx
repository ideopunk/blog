import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { ParsedUrlQuery } from "querystring";

import { NextSeo } from "next-seo";

type ParsedPostData = {
	title: string;
	date: string;
	preview: string;
	status: string;
	id: string;
	lazyHtml: string;
};

type Props = { parsedPostData: ParsedPostData };

export default function Post() {
	return (
		<div className="sm:mx-auto text-xl max-w-prose px-2 min-h-screen">
			<NextSeo
				title={"Conor Barnes"}
				description={"About me"}
				openGraph={{ title: "Conor Barnes", description: "About me" }}
			/>
			<div className="border-b-2 border-b-stone-500">
				<h1 className="text-xl font-bold md:text-2xl mb-4 md:mb-6">About me</h1>
			</div>

			<article className={`prose prose-lg max-w-none md:prose-xl my-4 `}>
				<p></p>
			</article>
		</div>
	);
}
