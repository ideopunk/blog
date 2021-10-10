import Link from "next/link";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Home from "./SVGs/HomeSVG";
import { ReactNode } from "react";

function HeaderLink({ children, href }: { children: ReactNode; href?: string }) {
	return href ? (
		<a className="mr-4 transition ease-out hover:text-black" href={href}>
			{children}
		</a>
	) : (
		<Link href={typeof children === "string" ? `/${children.toLowerCase()}` : "/"}>
			<a className="mr-4 transition ease-out hover:text-black cursor-pointer" href={href}>
				{children}
			</a>
		</Link>
	);
}

export default function Layout({ children }: { children: ReactNode }) {
	function toggleDarkMode() {
		localStorage.theme === "dark"
			? (localStorage.theme = "light")
			: (localStorage.theme = "light");

		// Whenever the user explicitly chooses dark mode
		localStorage.theme = "dark";

		// Whenever the user explicitly chooses to respect the OS preference
		localStorage.removeItem("theme");
	}
	return (
		<div>
			<header
				id="top"
				className="flex text-lg static sm:sticky w-full h-10 top-0 left-0 z-10 justify-between font-semibold backdrop-opacity-80 pl-4 pr-0 sm:pl-0 p-8 items-center"
			>
				<HeaderLink>
					<Home />
				</HeaderLink>
				<div>
					<HeaderLink>Work</HeaderLink>
					<HeaderLink>Blog</HeaderLink>
					<HeaderLink href="#contact">Contact</HeaderLink>
				</div>
			</header>
			<main>{children}</main>

			<footer className="p-4 flex text-lg flex-col sm:flex-row justify-evenly py-8 px-20">
				<Contact />
				<Subscribe />
				<button onClick={toggleDarkMode} className="w-10 h-10 hover:bg-gray-600">
					Toggle dark mode :)
				</button>
			</footer>
		</div>
	);
}
