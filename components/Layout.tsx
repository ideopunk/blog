import Link from "next/link";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Home from "./SVGs/HomeSVG";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Sun from "./SVGs/Sun";
import Moon from "./SVGs/Moon";

function HeaderLink({ children, href }: { children: ReactNode; href?: string }) {
	const { pathname } = useRouter();
	const itsAString = typeof children === "string";
	return (
		<div className={`group relative ${itsAString && "top-1"}`}>
			{href ? (
				<a
					className="transition-colors ease-out text-secondary dark:text-secondaryDark group-hover:text-primary dark:group-hover:text-primaryDark outline-none focus:text-primary"
					href={href}
				>
					{children}
				</a>
			) : (
				<Link href={itsAString ? `/${children.toLowerCase()}` : "/"}>
					<a className="ease-out block text-secondary dark:text-secondaryDark transition-colors group-hover:text-primary dark:group-hover:text-primaryDark cursor-pointer outline-none focus:text-primary">
						{children}
					</a>
				</Link>
			)}
			{itsAString && (
				<div className="w-full bg-primary dark:bg-primaryDark h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 group-hover:duration-300" />
			)}
		</div>
	);
}

export default function Layout({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// When mounted on client, now we can show the icon
	useEffect(() => setMounted(true), []);
	console.log({ resolvedTheme });

	const router = useRouter();
	if (router.pathname.includes("coriolis")) {
		return <div>{children}</div>;
	}

	return (
		<div className="min-h-screen flex flex-col">
			<header
				id="top"
				className="flex text-lg static sm:sticky w-full h-10 top-0 left-0 z-20 justify-between font-semibold backdrop-opacity-80 py-8 px-2 md:px-8 items-center bg-white dark:bg-opacity-100 dark:bg-slate-900 bg-opacity-50"
			>
				<div className="flex items-center">
					<HeaderLink>
						<Home />

						{/* <div className="w-10 h-10 group"> */}

						{/* <img
								src="/dark_house_filled.PNG"
								className={`object-contain opacity-0 group-hover:opacity-100 ${
									router.pathname === "/" && "opacity-100"
								} absolute transition-opacity`}
							/>
							<img src="/dark_house_outline.PNG" className="object-contain" /> */}
						{/* </div> */}
					</HeaderLink>
					<button
						onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
						className="w-8 ml-8 group outline-none border-current rounded-full relative"
					>
						{/* <div className="w-8 h-8 group"> */}
						{!mounted || !resolvedTheme ? null : resolvedTheme === "light" ? (
							// <>
							// 	<img
							// 		src="/sun_filled.PNG"
							// 		className="object-contain opacity-0 group-hover:opacity-100 absolute transition-opacity"
							// 	/>
							// 	<img src="/sun_outline.PNG" className="object-contain" />
							// </>
							<Sun />
						) : (
							<Moon />
						)}
						{/* </div> */}
					</button>
				</div>
				<div className="divide-x-8 flex items-center md:divide-x-[2rem] divide-transparent">
					<HeaderLink>About</HeaderLink>
					<HeaderLink>Work</HeaderLink>
					<HeaderLink>Blog</HeaderLink>
					<HeaderLink href="#contact">Contact</HeaderLink>
				</div>
			</header>
			<main className="flex-1">{children}</main>

			<footer className="mt-auto flex text-lg flex-col sm:flex-row justify-evenly py-6 px-20 items-center">
				<Contact />
				<Subscribe />
			</footer>
		</div>
	);
}
