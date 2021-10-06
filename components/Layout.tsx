import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Home from "./SVGs/HomeSVG";
import { siteTitle } from "../consts/consts";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/hammer-outline.svg" />
				<link
					rel="alternate"
					type="application/rss+xml"
					title="RSS feed for blog posts"
					href="https://www.ideopunk.com/rss.xml"
				/>

				<meta name="description" content="ball hard fall hard" />
				<meta
					property="og:image"
					content="http://www.artnet.com/WebServices/images/ll00762lldjkYGFgFaECfDrCWvaHBOc4uYC/nobuyoshi-araki-flowers.jpg"
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header
				id="top"
				className="flex text-lg static sm:sticky w-full h-10 top-0 left-0 z-10 justify-between font-semibold backdrop-opacity-80 pl-4 pr-0 sm:pl-0 p-8 items-center"
			>
				<Link href="/">
					<a className="mr-4 transition ease-out hover:text-black">
						<Home />
					</a>
				</Link>
				<div>
					<Link href="/work">
						<a className="mr-4 transition ease-out hover:text-black">Work</a>
					</Link>
					<Link href="/blog">
						<a className="mr-4 transition ease-out hover:text-black">Blog</a>
					</Link>
					<a className="mr-4 transition ease-out hover:text-black" href="#contact">
						Contact
					</a>
				</div>
			</header>
			<main>{children}</main>

			<footer className="p-4 flex text-lg flex-col sm:flex-row justify-evenly py-8 px-20">
				<Contact />
				<Subscribe />
			</footer>
		</div>
	);
}
