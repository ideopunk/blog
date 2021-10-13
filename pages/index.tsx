import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getLatestPostData } from "../lib/posts";
import Date from "../components/Date";
import profkilePic from "../public/images/headshot.jpg";

export async function getStaticProps() {
	const latestPost = getLatestPostData("blogposts");
	return { props: { latestPost } };
}

export default function Home({ latestPost }) {
	return (
		<section className="flex flex-col md:flex-row items-center px-12 md:px-0 md:ml-12 md:mr-24 mb-16 md:mt-8 justify-between relative">
			<Head>
				<title>Conor Barnes</title>
			</Head>
			<div className="top-8 md:-left-12 absolute w-full md:w-[95vw] h-[550px] bg-primary z-0" />
			<Image src="/images/headshot.jpg" alt="headshot" width={500} height={625} priority />

			{/* <Image
				src={profilePic}
				alt="headshot"
				width={500}
				height={625}
				priority
				placeholder="blur"
			/> */}
			<div className="w-full md:w-[800px] z-10 bg-secondary hover:bg-primary">
				<div className="transition ease-out p-4 text-black  flex items-center hover:bg-black hover:text-white">
					<Link href="/work">
						<a>
							<h1 className="pt-4 md:py-0 text-3xl font-bold md:text-4xl mb-2 md:relative">
								Conor Barnes
							</h1>
							<p>Hi there! I'm a web developer and a writer. Get in touch!</p>
						</a>
					</Link>
				</div>
				<div className="transition ease-out text-black  p-4 hover:bg-black hover:text-white">
					<Link href={`/blog/${latestPost.id}`}>
						<a>
							<h3 className="mt-4">Latest Blogpost</h3>

							<h3>{latestPost.title}</h3>
							<p className="mb-4">
								<Date dateString={latestPost.date} />
							</p>
							<p className="mb-4">{latestPost.preview}..</p>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
