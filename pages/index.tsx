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
		<section className="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryLight dark:bg-gray-800 bg-opacity-30 px-6 lg:pl-12 py-12">
			<NextSeo
				description="Ideopunk"
				openGraph={{ title: "Conor Barnes", description: "Ideopunk" }}
			/>
			{/* <div className="-top-1/3 md:top-1/4 lg:top-8 md:-left-12 absolute  md:w-[95vw] h-full bg-primary z-0 " /> */}
			{/* <div className="md:max-h-[500px] overflow-hidden">
				<Image
					src={profilePic}
					placeholder="blur"
					alt="headshot"
					priority
					// className="max-h-[450px]"
				/>
			</div> */}
			<div className="w-full  justify-around  z-10  md:ml-8 mb-10 md:mb-0">
				<Link href="/work">
					<a className="group">
						<div className="py-4   ">
							<h1 className="pt-4 md:py-0 text-3xl text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors font-bold md:text-4xl mb-2 md:relative">
								Conor Barnes
							</h1>
							<p className="text-xl font-medium text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
								Hi there! I'm a web developer and a writer. Get in touch!
							</p>
						</div>
					</a>
				</Link>

				<div>
					<Link href={`/blog/${latestPost.id}`}>
						<a className="group">
							<h3 className="text-xl mt-8 font-bold text-black dark:text-primaryDark transition-colors">
								Latest Work
							</h3>
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

// function Card({ children }: { children: ReactNode }) {
// 	return (
// 		<div className="group h-[250px] items-center shadow-md shadow-blue-400 dark:shadow-fuchsia-800 rounded-md bg-white dark:bg-slate-800 p-6 w-[400px] hover:scale-105 active:scale-95 hover:-translate-y-0.5 active:translate-y-0 transition-all">
// 			{children}
// 		</div>
// 	);
// }
// export default function Home({ latestPost }) {
// 	return (
// 		<section className="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryLight dark:bg-transparent  px-6 lg:pl-12 py-12">
// 			<NextSeo
// 				description="Ideopunk"
// 				openGraph={{ title: "Conor Barnes", description: "Ideopunk" }}
// 			/>

// 			<div className="w-full flex flex-col lg:flex-row items-center justify-around  z-10  md:ml-8 mb-10 md:mb-0">
// 				<Link href="/work">
// 					<a className="cursor-pointer mb-4 lg:mb-0">
// 						<Card>
// 							<h1 className="pt-4 md:py-0 text-3xl text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors font-bold md:text-4xl mb-2 md:relative">
// 								Conor Barnes
// 							</h1>
// 							<p className="text-xl font-medium text-secondary dark:text-secondaryDark group-hover:text-blackch dark:group-hover:text-white transition-colors">
// 								Hi there! I'm a web developer and a writer. Get in touch!
// 							</p>
// 						</Card>
// 					</a>
// 				</Link>
// 				<Link href={`/blog/${latestPost.id}`}>
// 					<a className="cursor-pointer">
// 						<Card>
// 							<h3 className="text-xl mb-4 text-black dark:text-primaryDark">
// 								Latest Post
// 							</h3>

// 							<h3 className="text-2xl font-bold text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
// 								{latestPost.title}
// 							</h3>
// 							<p className="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
// 								<Date dateString={latestPost.date} />
// 							</p>
// 							<p className="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors">
// 								{latestPost.preview}
// 							</p>
// 						</Card>
// 					</a>
// 				</Link>
// 			</div>
// 		</section>
// 	);
// }
