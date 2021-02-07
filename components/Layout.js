import Head from "next/head";
import utils from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Home from "./SVGs/HomeSVG";

const name = "Conor Barnes";
export const siteTitle = "Conor Barnes!!!";
// export const siteColor = "#fceff9";
export const siteColor = "#547a84";

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/hammer-outline.svg" />
				<link
					rel="alternate"
					type="application/rss+xml"
					title="RSS feed for blog posts"
					href="https://www.conorbarnes.com/rss.xml"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap"
					rel="stylesheet"
				/>
				<meta name="description" content="Conor Barnes's site" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={utils.pad} id="top">
				<Link href="/">
					<a className={utils.mrgR}>
						<Home />
					</a>
				</Link>
				<div>
					<Link href="/portfolio">
						<a className={utils.mrgR}>Works</a>
					</Link>
					<Link href="/blog">
						<a className={utils.mrgR}>Blog</a>
					</Link>
					<a className={utils.mrgR} href="#contact">
						Contact
					</a>
				</div>
			</header>
			<main>{children}</main>

			<footer className={utils.pad}>
				<Contact />
				<Subscribe />
			</footer>
			<style jsx>{`
				header {
					position: sticky;
					width: 100%;
					height: 40px;
					margin-top: 2rem;
					top: 0;
					left: 0;
					z-index: 1;
					justify-content: space-between;
					font-weight: 600;
					background-color: rgba(255, 255, 255, 0.8);
				}

				footer {
					justify-content: space-evenly;
					padding: 2rem;
					height: fit-content;
				}

				header,
				footer {
					display: flex;
					align-items: center;
					padding-left: 5rem;
					padding-right: 5rem;
					font-size: 1.45rem;
				}

				header a {
					transition: all 0.4s ease-out;
				}

				header a:hover {
					color: black;
				}
			`}</style>
		</div>
	);
}
