import Link from "next/link";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Home from "./SVGs/HomeSVG";
import { ReactNode } from "react";

function HeaderLink({ children, href }: { children: ReactNode; href?: string }) {
	return href ? (
		<a className="transition ease-out text-secondary hover:text-black" href={href}>
			{children}
		</a>
	) : (
		<Link href={typeof children === "string" ? `/${children.toLowerCase()}` : "/"}>
			<a
				className="transition ease-out text-secondary hover:text-black cursor-pointer"
				href={href}
			>
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
				className="flex text-lg static sm:sticky w-full  
						h-10 top-0 left-0 z-20 justify-between font-semibold 
						backdrop-opacity-80 py-8 px-2 md:px-8 items-center bg-opacity-50 bg-white"
			>
				<HeaderLink>
					<Home />
				</HeaderLink>
				<div className="divide-x-8 md:divide-x-[2rem] divide-transparent">
					<HeaderLink>Work</HeaderLink>
					<HeaderLink>Blog</HeaderLink>
					<HeaderLink href="#contact">Contact</HeaderLink>
				</div>
			</header>
			<main>{children}</main>

			<footer className=" flex text-lg flex-col sm:flex-row justify-evenly py-6 px-20 items-center">
				<Contact />
				<Subscribe />
				{/* <button onClick={toggleDarkMode} className="w-10 h-10 hover:bg-gray-600">
					Toggle dark mode :)
				</button> */}
			</footer>
		</div>
	);
}
