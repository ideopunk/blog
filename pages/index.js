import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getLatestPostData } from "../lib/posts";
import Layout from "../components/Layout";
import { siteTitle, siteColor } from "../consts/consts";
import Date from "../components/Date";
import utils from "../styles/utils.module.css";
import Subscribe from "../components/Subscribe";

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
				<Image src="/headshot.jpeg" alt="headshot" width={500} height={625} priority />
				<div className="box ">
					<h1>Conor Barnes</h1>
					<Link href="/work">
						<a>
							<div className="card front prev">
								<p>Hi there! I'm a web developer and a writer. Get in touch!</p>
							</div>
						</a>
					</Link>
					<Link href={`/blog/${latestPost.id}`}>
						<a>
							<div className={`card front`}>
								<h3 className={`${utils.mrgBot}`}>Latest Blogpost</h3>

								<h3>{latestPost.title}</h3>
								<p className={`${utils.mrgBot}`}>
									<Date dateString={latestPost.date} />
								</p>
								<p className={`${utils.mrgBot}`}>{latestPost.preview}..</p>
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
						top: -10px;
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

					.prev {
						display: flex;
						align-items: center;
					}

					@media (max-width: 900px) {
						section {
							flex-direction: column;
							align-items: center;
						}

						.box {
							width: 100%;
						}

						h1 {
							position: static;
							padding-top: 1rem;
							padding-bottom: 1rem;
						}
					}
				`}
			</style>
		</Layout>
	);
}
