import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { ParsedUrlQuery } from "querystring";

import { NextSeo } from "next-seo";
import Link from "next/link";

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
		<div className="sm:mx-auto text-xl max-w-prose px-2">
			<NextSeo
				title={"Conor Barnes"}
				description={"About me"}
				openGraph={{ title: "Conor Barnes", description: "About me" }}
			/>
			<div className="border-b-2 border-b-stone-500">
				<h1 className="text-xl font-bold md:text-2xl mb-4 md:mb-6">About me</h1>
			</div>

			<article
				className={`max-w-none prose md:prose-xl mt-4 dark:prose-p:text-white prose-a:text-secondary dark:prose-a:text-secondaryDark `}
			>
				<p>Hi! I'm Conor Barnes, a developer and writer living in Halifax.</p>
				<p>
					I like writing stories. This year I'm writing a hundred and I started with{" "}
					<Link href="/blog/boycott">
						<a className="text-secondary">The Boycott</a>
					</Link>
					. Sometimes they're 'speculative fiction' or 'magical realism' and mostly
					they're short.
				</p>
				<p>
					I like programming things for friends, like{" "}
					<Link href="/work#2">
						<a>Pixel Sorter</a>
					</Link>
					. You do not have to be a friend to make a request. The easiest way to get a
					'yes' is to ask me for something that will delight people (including myself).
				</p>
				<p>
					I occassionally like writing non-fiction, like{" "}
					<Link href="/blog/tipsforabetterlife">
						<a>100 Tips For a Better Life</a>
					</Link>
					. If you've tried them all and are still unhappy please let me know and I will
					find more tips for you.
				</p>
			</article>
		</div>
	);
}
