import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getLatestPostData } from "../lib/posts";
import Layout from "../components/Layout";
import Date from "../components/Date";
import Subscribe from "../components/Subscribe";

export async function getStaticProps() {
	const latestPost = getLatestPostData("blogposts");
	return { props: { latestPost } };
}

export default function Home({ latestPost }) {
	return (
		<Layout>
			<Head>
				<title>Conor Barnes</title>
			</Head>
			<section className="flex flex-col md:flex-row items-center mx-4 my-16 justify-between relative">
				<div className="top-8 -left-8 absolute w-[95vw] h-[550px] bg-primary z-0" />
				<Image src="/headshot.jpeg" alt="headshot" width={500} height={625} priority />
				<div className="w-full md:w-[800px] flex flex-col justify-center items-center">
					<h1 className="static py-4 md:py-0 -left-64 -top-2.5 md:relative">
						Conor Barnes
					</h1>
					<Link href="/work">
						<a>
							<div className="transition ease-out text-black hover:bg-primary flex items-center">
								<p>Hi there! I'm a web developer and a writer. Get in touch!</p>
							</div>
						</a>
					</Link>
					<Link href={`/blog/${latestPost.id}`}>
						<a>
							<div className={`transition ease-out text-black hover:bg-primary`}>
								<h3 className="mb-4">Latest Blogpost</h3>

								<h3>{latestPost.title}</h3>
								<p className="mb-4">
									<Date dateString={latestPost.date} />
								</p>
								<p className="mb-4">{latestPost.preview}..</p>
							</div>
						</a>
					</Link>
				</div>
			</section>
		</Layout>
	);
}
