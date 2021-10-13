import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />

					<link
						href="https://fonts.googleapis.com/css2?family=Merriweather:wght400&family=Work+Sans:wght@600&family=Anton&display=swap"
						rel="stylesheet"
					/>

					<noscript>
						<link
							href="https://fonts.googleapis.com/css2?family=Merriweather:wght400&family=Work+Sans:wght@600&family=Anton&display=swap"
							rel="stylesheet"
						/>
					</noscript>

					<link rel="icon" href="/hammer-outline.svg" />
					<link
						rel="alternate"
						type="application/rss+xml"
						title="RSS feed for blog posts"
						href="https://www.ideopunk.com/rss.xml"
					/>

					<meta
						property="og:image"
						content="http://www.artnet.com/WebServices/images/ll00762lldjkYGFgFaECfDrCWvaHBOc4uYC/nobuyoshi-araki-flowers.jpg"
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@ideopunk" />
					<meta name="twitter:creator" content="@ideopunk" />
					<meta property="og:locale" content="en_CA" />
					<meta property="og:type" content="website" />
					<meta name="theme-color" content="#FFFFFF" />
					<meta property="og:image:width" content="500" />
					<meta property="og:image:height" content="340" />
					<script
						id="check-dark-mode"
						dangerouslySetInnerHTML={{
							__html: `
							if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
								document.documentElement.classList.add("dark")} 
							else {
								document.documentElement.classList.remove("dark")
							}`,
						}}
					></script>
				</Head>
				<body className="dark:bg-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
