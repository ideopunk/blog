import { useState } from "react";
import Head from "next/head";

import { getSortedPostsData, getPostData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import generateRss from "../../lib/rss";
import fs from "fs";
import SubscriptionBox from "../../components/Subscribe";
import { GetStaticProps } from "next";

interface PostWithID extends PostData {
	id: string;
}

type Props = { allPostsData: PostWithID[] };

// generating rss here as side-effect
export const getStaticProps: GetStaticProps<Props, {}> = async () => {
	const allPostsData = getSortedPostsData("blogposts");
	// const allArticlesData = getSortedPostsData("published-writing");

	// const allPostsText = await Promise.all(
	// 	allPostsData.map(async (post) => getPostData(post.id, "blogposts"))
	// );

	// SIDE EFFECT!!
	const rss = generateRss(allPostsData);
	fs.writeFileSync("./public/rss.xml", rss);

	return { props: { allPostsData } };
};

function PostPreview({ id, date, title, status, preview }: PostWithID) {
	return (
		<li>
			<Link href={`/blog/${id}`}>
				<a>
					<h3 className="text-lg sm:text-3xl">{title}</h3>
				</a>
			</Link>
			<br />
			<div className={`flex justify-between mb-4 flex-col`}>
				<Date dateString={date} />
				<small className="italic">Epistemic status: {status}</small>
			</div>
			<div className="mt-4">{preview}</div>
			<hr className="mb-8" />
		</li>
	);
}

export default function blog({ allPostsData }: { allPostsData: PostWithID[] }) {
	return (
		<section className="mt-8">
			<Head>
				<title>Conor Barnes / Blog</title>
			</Head>
			<div className="flex justify-center">
				<ul className="flex-[5] m-4 mt-0 sm:mt-4 py-0 px-2 sm:py-4 sm:px-16 flex flex-col">
					{allPostsData.map(({ id, date, title, status, preview }) => (
						<PostPreview
							id={id}
							key={id}
							date={date}
							title={title}
							status={status}
							preview={preview}
						/>
					))}
				</ul>
				<div className="hidden sm:flex flex-col p-4 m-4 flex-1">
					<SubscriptionBox />
				</div>
			</div>
		</section>
	);
}
