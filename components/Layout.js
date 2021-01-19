import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

const name = "Conor";
export const siteTitle = "Conor Barnes!!!";

export default function Layout({ children, home }) {
	// return <div>{children}</div>;
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
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
			<header>
				{home ? (
					<>
						<Image
							src="/images/profile.jpg"
							alt={name}
							width={300}
							height={300}
						/>
						<h1>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									src="/images/profile.jpg"
									alt={name}
									width={300}
									height={300}
								/>
							</a>
						</Link>
						<h2>
							<Link href="/">
								<a>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
