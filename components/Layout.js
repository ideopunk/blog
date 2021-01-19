import Head from "next/head";
import utils from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Contact from "./Contact";
const name = "Conor Barnes";
export const siteTitle = "Conor Barnes!!!";
export const siteColor = "#fceff9";
export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/hammer-outline.svg" />
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
					<a className={utils.mrgR}>{name}</a>
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
			</footer>
			<style jsx>{`
				header {
					position: sticky;
					width: 100%;
					top: 0;
					left: 0;
					z-index: 1;
					justify-content: space-between;
				}

				header,
				footer {
					background-color: ${siteColor};
					height: 30px;
					display: flex;
					align-items: center;
				}

				footer {
					height: 200px;
				}
			`}</style>
		</div>
	);
}
