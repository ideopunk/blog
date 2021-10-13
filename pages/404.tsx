import Head from "next/head";

export default function Custom404() {
	return (
		<div className="h-[60vh] flex flex-col items-center justify-center">
			<Head>
				<title>404 / Conor Barnes</title>
			</Head>
			<div className="bg-primary p-4 w-screen text-white">
				<p className="text-center">404 - Page Not Found!</p>
			</div>
		</div>
	);
}
