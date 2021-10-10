import "../public/style/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
