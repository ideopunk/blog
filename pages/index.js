import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout, { siteTitle, siteColor } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>Hi!! I'm Conor!!!!!!!!!</p>
			</section>

			<style jsx>
				{`
					section {
						background-color: ${siteColor};
						padding: 2rem;
					}
				`}
			</style>
		</Layout>
	);
}
