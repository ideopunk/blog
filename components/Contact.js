import { useState, useEffect } from "react";
import Copy from "./SVGs/CopySVG";
import { siteColor } from "../consts/consts";

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
					Email
				</a>
			</div>
			<a
				className="linky"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.twitter.com/ideopunk"
			>
				Twitter
			</a>
			<a
				className="linky"
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/ideopunk"
			>
				GitHub
			</a>
			<a
				className="linky"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/conor-barnes-b49833206/"
			>
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

					@media (max-width: 600px) {
						.contact {
							flex-direction: row;
							flex-wrap: wrap;
							width: 100%;
						}

						.contact > * {
							width: 50%;
							text-align: center;
						}

						.email {
							display: flex;
							justify-content: center;
							align-items: flex-start;
						}

						.move {
							left: 2rem;
						}
					}
				`}
			</style>
		</div>
	);
}
