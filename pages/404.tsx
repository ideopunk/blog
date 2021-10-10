import Head from "next/head";

export default function Custom404() {
	return (
		<div className="p-20 h-[60vh]">
			<Head>
				<title>404 / Conor Barnes</title>
			</Head>
			<p className="text-center">404 - Page Not Found</p>
		</div>
	);
}
