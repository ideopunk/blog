import { useState, useEffect } from "react";
import Copy from "./SVGs/CopySVG";

function Linky({ text, href }: { text: string; href: string }) {
	return (
		<a
			href={href}
			className="mb-3 transition ease-out hover:pl-4 hover:text-black w-1/2 text-left"
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	);
}

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

		let timeout;
		toast ? (timeout = setTimeout(byebye, 1000)) : null;

		return () => clearTimeout(timeout);
	}, [toast]);

	return (
		<div
			className="flex sm:flex-col flex-wrap sm:flex-nowrap justify-start h-24 sm:h-44 w-full sm:w-1/2"
			id="contact"
		>
			<div className="flex items-start sm:items-center relative w-1/2 text-left">
				<div className="absolute -left-8" onClick={handleClick}>
					<Copy />
				</div>

				<Linky text="Email" href="mailto:conorbarnes93@gmail.com" />
			</div>
			<Linky text="Twitter" href="https://www.twitter.com/ideopunk" />
			<Linky text="GitHub" href="https://github.com/ideopunk" />
			<Linky text="LinkedIn" href="https://www.linkedin.com/in/conor-barnes-b49833206/" />

			{toast && (
				<p className="toast mb-3 transition ease-out hover:pl-4 hover:text-black w-1/2 text-left text-primary">
					Copied
				</p>
			)}
		</div>
	);
}
