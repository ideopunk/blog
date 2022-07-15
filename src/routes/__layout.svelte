<script>
	import SvelteTheme from "svelte-themes/SvelteTheme.svelte";
	import Subscribe from "../components/Subscribe.svelte";

	import "../app.css";
	import Contact from "../components/Contact.svelte";
	import HeaderLink from "../components/HeaderLink.svelte";

	import themeStore, { setTheme } from "svelte-themes";
	import Sun from "../components/svgs/Sun.svelte";
	import Moon from "../components/svgs/Moon.svelte";
	import Home from "../components/svgs/Home.svelte";

	import { SvelteToast } from "@zerodevx/svelte-toast";

	function updateTheme() {
		setTheme($themeStore.theme === "light" ? "dark" : "light");
	}
</script>

<SvelteTheme attribute="class" />

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap"
		rel="stylesheet"
	/>
	<noscript>
		<link
			href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap"
			rel="stylesheet"
		/>
	</noscript>

	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_CA" />
	<meta property="og:url" content="https://www.conorbarnes.com" />
	<meta property="og:site_name" content="Conor Barnes" />
	<meta
		property="og:image"
		content="http://www.artnet.com/WebServices/images/ll00762lldjkYGFgFaECfDrCWvaHBOc4uYC/nobuyoshi-araki-flowers.jpg"
	/>

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:handle" content="@ideopunk" />
	<meta property="twitter:site" content="@ideopunk" />
</svelte:head>

<div class="min-h-screen  dark:bg-slate-900  flex flex-col">
	<header
		id="top"
		class="flex text-lg static sm:sticky w-full h-10 top-0 left-0 z-20 justify-between font-semibold backdrop-opacity-80 py-8 px-2 md:px-8 items-center bg-white dark:bg-opacity-100 dark:bg-slate-900 bg-opacity-50"
	>
		<div class="flex items-center">
			<HeaderLink>
				<Home />
			</HeaderLink>
			<button
				aria-label="Toggle Theme"
				name="Toggle Theme"
				on:click={updateTheme}
				class="w-8 ml-8 group outline-none border-current rounded-full relative"
			>
				{#if $themeStore.theme === "light"}
					<!-- {#if mounted && $themeStore.theme === "light"} -->
					<Sun />
				{:else if $themeStore.theme === "dark"}
					<!-- {#if mounted && $themeStore.theme === "dark"} -->
					<Moon />
				{/if}
			</button>
		</div>
		<div class="divide-x-8 flex items-center md:divide-x-[2rem] divide-transparent">
			<HeaderLink text="About" />
			<HeaderLink text="Work" />
			<HeaderLink text="Blog" />
			<HeaderLink href="#contact" text="Contact" />
		</div>
	</header>
	<main class="flex-1">
		<slot />
	</main>

	<footer class="mt-auto flex text-lg flex-col sm:flex-row justify-evenly py-6 px-20 items-center">
		<Contact />
		<Subscribe />
	</footer>

	<div class="absolute bottom-0 right-0 border-4 border-red-500 w-40 h-40">
		<SvelteToast />
	</div>
</div>
