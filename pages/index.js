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
	return {
		props: {
			latestPost,
		},
	};
}

export default function Home({ latestPost }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="background" />
				<Image src="/headshot.jpeg" alt="headshot" width={500} height={625} />
				<div className="box ">
					<h1>Conor Barnes</h1>
					<Link href="/portfolio">
						<a>
							<div className="card front tl">
								<p>Hi there! I'm a web developer.</p>
							</div>
						</a>
					</Link>
					<Link href={`/blog/${latestPost.id}`}>
						<a>
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
				</div>
			</section>

			<style jsx>
				{`
					section {
						margin: 1rem 4rem;
						display: flex;
						justify-content: space-between;
						position: relative;
					}

					h1 {
						position: relative;
						left: -250px;
						top: -60px;
					}

					.background {
						top: 2rem;
						left: -2rem;
						position: absolute;
						width: 95vw;
						height: 550px;
						background-color: ${siteColor};
						z-index: -1;
					}

					.front {
						transition: all 0.2s ease-out;
						color: black;
					}

					h2 {
						color: black;
					}

					.front:hover {
						background-color: ${siteColor};
					}

					.box {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 800px;
					}
					 {
						/* 
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

					@media (max-width: 1000px) {
						.tl {
							border-top-right-radius: ${bigrad};
						}

						.tr {
							border-radius: 0;
						}

						.bl {
							border-radius: 0;
						}

						.br {
							border-bottom-left-radius: ${bigrad};
						}
					} */
					}
				`}
			</style>
		</Layout>
	);
}
