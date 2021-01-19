import Image from "next/image";
import Copy from "./SVGs/CopySVG"
export default function ContactForm() {
	const handleClick = async () => {
		await navigator.clipboard.writeText("conorbarnes93@gmail.com");
	};

	return (
		<div className="contact" id="contact">
			<div className="email">
				<Copy
					width={20}
					height={20}
				/>
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
			<a className="linky" href="">
				LinkedIn
			</a>

			<style jsx>
				{`
					.contact {
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						height: 100%;
					}

					.linky {
						transition: all 0.15s ease-out;
					}

					.linky:hover {
						padding-left: 1rem;
						color: black;
					}

					.email {
						display: flex;
						align-items: center;
					}
				`}
			</style>
		</div>
	);
}
