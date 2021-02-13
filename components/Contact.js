import { useState, useEffect } from "react";
import Image from "next/image";
import Copy from "./SVGs/CopySVG";
import { siteColor } from "./Layout";

const test = "red";

export default function ContactForm() {
	const [toast, setToast] = useState(false);

	const handleClick = async () => {
		await navigator.clipboard.writeText("conorbarnes93@gmail.com");
		setToast(true);
	};

	useEffect(() => {
		function byebye() {
			setToast(false);
		}
		toast && setTimeout(byebye, 1000);

		return () => clearTimeout(byebye);
	}, [toast]);

	return (
		<div className="contact" id="contact">
			<div className="email">
				<div className="move" onClick={handleClick}>
					<Copy width={20} height={20} />
				</div>

				<a
					className="linky"
					href="mailto:conorbarnes93@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					conorbarnes93@gmail.com
				</a>
			</div>
			<a className="linky" href="https://www.twitter.com/ideopunk">
				Twitter
			</a>
			<a className="linky" href="https://github.com/ideopunk">
				GitHub
			</a>
			<a className="linky" href="https://www.linkedin.com/in/conor-barnes-b49833206/">
				LinkedIn
			</a>

			{toast && <p className="toast linky">Copied</p>}

			<style jsx>
				{`
					.contact {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						height: 180px;
						width: 50%;
					}

					.linky {
						transition: all 0.15s ease-out;
						margin-bottom: 0.75rem;
					}

					.linky:hover {
						padding-left: 1rem;
						color: black;
					}

					.email {
						display: flex;
						align-items: center;
						position: relative;
					}

					.move {
						position: absolute;
						left: -2rem;
					}

					.toast {
						color: ${siteColor};
					}
				`}
			</style>
		</div>
	);
}
