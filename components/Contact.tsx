import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Copy from "./SVGs/CopySVG";

function Linky({ text, href, right }: { text: string; href: string; right?: boolean }) {
	return (
		<a
			href={href}
			className={`mb-3 group font-semibold  w-28`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<p className="transition-all  ease-out group-hover:translate-x-4 text-primary hover:text-secondary dark:text-primaryDark dark:hover:text-secondaryDark">
				{text}
			</p>
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
			className="border-black transition-colors flex sm:flex-col flex-wrap sm:flex-nowrap justify-center  lg:w-min p-4 lg:pl-12 sm:w-1/2  relative"
			id="contact"
		>
			<div className="flex items-start sm:items-center absolute lg:relative left-8 lg:left-0 flex-1 text-left">
				<div className="absolute -left-8 top-0" onClick={handleClick}>
					<Copy />
				</div>
			</div>
			<Linky text="Email" href="mailto:conorbarnes93@gmail.com" />

			<Linky text="Twitter            " right href="https://www.twitter.com/ideopunk" />
			<Linky text="GitHub" href="https://github.com/ideopunk" />
			<Linky
				text="LinkedIn"
				right
				href="https://www.linkedin.com/in/conor-barnes-b49833206/"
			/>
		</div>
	);
}
