import "../public/style/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />
			</Head>
			<DefaultSeo
				titleTemplate="%s | Conor Barnes"
				defaultTitle="Conor Barnes"
				openGraph={{
					type: "website",
					locale: "en_CA",
					url: "https://www.conorbarnes.com",
					site_name: "Conor Barnes",
					images: [
						{
							url: "http://www.artnet.com/WebServices/images/ll00762lldjkYGFgFaECfDrCWvaHBOc4uYC/nobuyoshi-araki-flowers.jpg",
							width: 500,
							height: 340,
						},
					],
				}}
				twitter={{
					cardType: "summary_large_image",
					handle: "@ideopunk",
					site: "@ideopunk",
				}}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
