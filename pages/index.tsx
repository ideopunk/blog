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
		<section className="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryLight dark:bg-primaryDark  px-6 lg:pl-12 py-12">
			<NextSeo
				description="Ideopunk"
				openGraph={{ title: "Conor Barnes", description: "Ideopunk" }}
			/>

			<div className="w-full  justify-around  z-10  md:ml-8 mb-10 md:mb-0">
				<div className="py-4  group  flex items-center   ">
					<Link href="/work">
						<a className="cursor-pointer">
							<h1 className="pt-4 md:py-0 text-3xl text-secondary dark:text-secondaryDark group-hover:text-black transition-colors font-bold md:text-4xl mb-2 md:relative">
								Conor Barnes
							</h1>
							<p className="text-xl font-medium text-secondary dark:text-secondaryDark group-hover:text-black transition-colors">
								Hi there! I'm a web developer and a writer. Get in touch!
							</p>
						</a>
					</Link>
				</div>
				<h3 className="text-xl mt-8 text-black">Latest Work</h3>

				<div className="transition-colors text-secondary group relative py-4 hover:text-black ">
					<Link href={`/blog/${latestPost.id}`}>
						<a className="cursor-pointer">
							<h3 className="text-2xl font-bold text-secondary dark:text-secondaryDark group-hover:text-black transition-colors">
								{latestPost.title}
							</h3>
							<p className="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black transition-colors">
								<Date dateString={latestPost.date} />
							</p>
							<p className="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black transition-colors">
								{latestPost.preview}
							</p>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
