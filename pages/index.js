import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout, { siteTitle, siteColor } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Subscribe from "../components/Subscribe";

const bigrad = "20px";

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="box ">
					<div className="card tl">
						<h2>Portfolio</h2>
						<p></p>
					</div>
					<div className="card tr">
						<h2>Blog</h2>
						<p></p>
					</div>
					<Subscribe corner />
					<div className="card br">
						<h2>Contact</h2>
						<p></p>
					</div>
				</div>
			</section>

			<style jsx>
				{`
					section {
						padding: 2rem;
					}

					.box {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
					}

					.tl {
						border-top-left-radius: ${bigrad};
					}

					.tr {
						border-top-right-radius: ${bigrad};
					}

					.bl {
						border-bottom-left-radius: ${bigrad};
					}

					.br {
						border-bottom-right-radius: ${bigrad};
					}
				`}
			</style>
		</Layout>
	);
}
