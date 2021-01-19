import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>Hi!! I'm Conor!!!!!!!!!</p>
			</section>

			<section>
				<h2>Blog</h2>
				<Link href="/portfolio">
					<a>Portfolio</a>
				</Link>
				<ul>
					{allPostsData.map(({ id, date, title }) => (
						<li key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
