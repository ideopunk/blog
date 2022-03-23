import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getLatestPostData } from "../lib/posts";
import Date from "../components/Date";
import profilePic from "../public/images/headshot.jpg";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
	const latestPost = getLatestPostData("blogposts");
	return { props: { latestPost } };
}

export default function Home({ latestPost }) {
	return (
		<section className="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryLight dark:bg-transparent  px-6 lg:pl-12 py-12">
			<NextSeo
				description="Ideopunk"
				openGraph={{ title: "Conor Barnes", description: "Ideopunk" }}
			/>

			<div className="w-full  justify-around  z-10  md:ml-8 mb-10 md:mb-0">
				<div className="group  flex items-center shadow-md shadow-fuchsia-800 rounded-md bg-slate-800 p-6 w-[400px] hover:scale-105 active:scale-95 hover:-translate-y-0.5 active:translate-y-0 transition-all">
					<Link href="/work">
						<a className="cursor-pointer">
							<h1 className="pt-4 md:py-0 text-3xl text-secondary dark:text-secondaryDark group-hover:text-white transition-colors font-bold md:text-4xl mb-2 md:relative">
								Conor Barnes
							</h1>
							<p className="text-xl font-medium text-secondary dark:text-secondaryDark group-hover:text-white transition-colors">
								Hi there! I'm a web developer and a writer. Get in touch!
							</p>
						</a>
					</Link>
				</div>

				<div className="transition-all mt-8  group relative shadow-md hover:scale-105 active:scale-95 hover:-translate-y-0.5 active:translate-y-0 shadow-fuchsia-800 rounded-md bg-slate-800 p-6 w-[400px]">
					<Link href={`/blog/${latestPost.id}`}>
						<a className="cursor-pointer">
							<h3 className="text-xl  text-black dark:text-primaryDark">Latest Post</h3>

							<h3 className="text-2xl font-bold text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
								{latestPost.title}
							</h3>
							<p className="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
								<Date dateString={latestPost.date} />
							</p>
							<p className="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
								{latestPost.preview}
							</p>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
