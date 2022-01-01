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
					{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> */}

					{/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}

					<link
						href="https://fonts.googleapis.com/css2?family=Anton&family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap"
						rel="stylesheet"
					/>
					<noscript>
						<link
							href="https://fonts.googleapis.com/css2?family=Anton&family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap"
							rel="stylesheet"
						/>
					</noscript>

					<link rel="icon" href="/hammer.svg" />
					<link
						rel="alternate"
						type="application/rss+xml"
						title="RSS feed for blog posts"
						href="https://www.conorbarnes.com/rss.xml"
					/>

					<meta name="theme-color" content="#FFFFFF" />
					{/* <script
						id="check-dark-mode"
						dangerouslySetInnerHTML={{
							__html: `
							if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
								document.documentElement.classList.add("dark")} 
							else {
								document.documentElement.classList.remove("dark")
							}`,
						}}
					></script> */}
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
