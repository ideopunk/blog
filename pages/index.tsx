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
		<section className="flex flex-col-reverse md:flex-row items-center px-12 md:px-0 md:ml-12 md:mr-24 mb-16 md:mt-8 justify-between relative md:max-h-[500px]">
			<NextSeo
				description="Ideopunk"
				openGraph={{ title: "Conor Barnes", description: "Ideopunk" }}
			/>
			<div className="-top-1/3 md:top-1/4 lg:top-8 md:-left-12 absolute  md:w-[95vw] md:h-1/2 lg:h-5/6 bg-primary z-0 " />
			<div className="md:max-h-[500px] overflow-hidden">
				<Image
					src={profilePic}
					placeholder="blur"
					alt="headshot"
					priority
					// className="max-h-[450px]"
				/>
			</div>
			<div className="w-full sm:w-[400px] md:w-[500px] z-10 max-w-prose md:ml-8 mb-10 md:mb-0">
				<div className="transition-colors p-4 text-black bg-secondary  flex items-center hover:bg-tertiary  ">
					<Link href="/work">
						<a>
							<h1 className="pt-4 md:py-0 text-3xl font-bold md:text-4xl mb-2 md:relative">
								Conor Barnes
							</h1>
							<p className="text-xl font-medium">
								Hi there! I'm a web developer and a writer. Get in touch!
							</p>
						</a>
					</Link>
				</div>
				<div className="transition-colors text-black bg-secondary p-4 hover:bg-tertiary ">
					<Link href={`/blog/${latestPost.id}`}>
						<a>
							<h3 className="text-2xl font-bold">{latestPost.title}</h3>
							<p className="mb-4">
								<Date dateString={latestPost.date} />
							</p>
							<p className="mb-4">{latestPost.preview}</p>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
