import Layout from "../components/Layout";

export default function Custom404() {
	return (
		<Layout>
			<div>
				<p>404 - Page Not Found</p>
			</div>
			<style jsx>
				{`
					div {
						padding: 5rem;
						height: 60vh;
					}
					p {
						text-align: center;
					}
				`}
			</style>
		</Layout>
	);
}
