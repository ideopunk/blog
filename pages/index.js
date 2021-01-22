import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getLatestPostData } from "../lib/posts";
import Layout, { siteTitle, siteColor } from "../components/Layout";
import Date from "../components/Date";
import utils from "../styles/utils.module.css";
import Subscribe from "../components/Subscribe";

const bigrad = "20px";

export async function getStaticProps() {
	const latestPost = getLatestPostData("blogposts");
	console.log(latestPost);
	return {
		props: {
			latestPost,
		},
	};
}

export default function Home({ latestPost }) {
	console.log(latestPost);
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="box ">
					<Link href="/portfolio">
						<a>
							<div className="card front tl">
								<h2>Portfolio</h2>
							</div>
						</a>
					</Link>
					<Link href={`/blog/${latestPost.id}`}>
						<a className={`${utils.mrgBot}`}>
							<div className={`card front tr`}>
								<h2 className={`${utils.mrgBot}`}>Latest Blogpost</h2>

								<h3>{latestPost.title}</h3>
								<p className={`${utils.mrgBot}`}>
									<Date dateString={latestPost.date} />
								</p>
								<p className={`${utils.mrgBot}`}>{latestPost.preview}</p>
							</div>
						</a>
					</Link>
					<div className="card front bl">
						<h2>Contact</h2>
						<p></p>
					</div>
					<Subscribe front />
				</div>
			</section>

			<style jsx>
				{`
					section {
						padding: 2rem;
					}

					.front {
						transition: all 0.2s ease-out;
					}

					.front:hover {
						background-color: ${siteColor};
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
