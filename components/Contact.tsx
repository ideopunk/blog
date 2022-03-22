import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Copy from "./SVGs/CopySVG";

function Linky({ text, href }: { text: string; href: string }) {
	return (
		<a
			href={href}
			className="mb-3 transition-all ease-out hover:pl-4 font-semibold text-primary hover:text-secondary w-1/2 text-left"
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	);
}

export default function ContactForm() {
	const handleClick = async () => {
		await navigator.clipboard.writeText("conorbarnes93@gmail.com");
		toast("Copied email address!");
	};

	return (
		<div
			className="border-transparent transition-colors border-2 flex sm:flex-col flex-wrap sm:flex-nowrap justify-start  lg:w-min p-4 lg:pl-12 sm:w-1/2 "
			id="contact"
		>
			<div className="flex items-start sm:items-center relative w-1/2 text-left">
				<div className="absolute -left-8 top-0" onClick={handleClick}>
					<Copy />
				</div>

				<Linky text="Email" href="mailto:conorbarnes93@gmail.com" />
			</div>
			<Linky text="Twitter" href="https://www.twitter.com/ideopunk" />
			<Linky text="GitHub" href="https://github.com/ideopunk" />
			<Linky text="LinkedIn" href="https://www.linkedin.com/in/conor-barnes-b49833206/" />
		</div>
	);
}
