<script>
	import SvelteTheme from "svelte-themes/SvelteTheme.svelte";

	import Subscribe from "../lib/components/Subscribe.svelte";

	import "../app.css";
	import Contact from "../lib/components/Contact.svelte";
	import HeaderLink from "../lib/components/HeaderLink.svelte";

	import themeStore, { setTheme } from "svelte-themes";
	import Sun from "../lib/components/svgs/Sun.svelte";
	import Moon from "../lib/components/svgs/Moon.svelte";
	import Home from "../lib/components/svgs/Home.svelte";
	import { onMount } from "svelte";
	import Toast from "$lib/components/Toast.svelte";

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	function updateTheme() {
		setTheme($themeStore.theme === "light" ? "dark" : "light");
	}
</script>

<SvelteTheme attribute="class" />

<svelte:head>
	<!-- <link
		href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-%3D%21%40%23%24%25%5E%26*%28%29_%2B%5B%5D%5C%7B%7D%7C%3B%27%3A%22%3C%3E%3F%2C.%2F"
		rel="stylesheet"
	/>
	<noscript>
		<link
			href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-%3D%21%40%23%24%25%5E%26*%28%29_%2B%5B%5D%5C%7B%7D%7C%3B%27%3A%22%3C%3E%3F%2C.%2F"
			rel="stylesheet"
		/>
	</noscript> -->

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
				tabindex="0"
				class="w-8 ml-8 group border-current relative  text-secondary dark:text-secondaryDark transition-colors
				hover:text-primary dark:hover:text-primaryDark focus:text-primary dark:focus:text-primaryDark
				 outline-current"
			>
				{#if mounted && $themeStore.resolvedTheme === "dark"}
					<Moon />
				{:else if mounted}
					<Sun />
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

	<footer class="mt-auto flex text-lg flex-col lg:flex-row justify-evenly py-6 px-20 items-center">
		<Contact />
		<Subscribe />
	</footer>

	<Toast />
</div>
