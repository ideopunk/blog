<script>
	import SvelteTheme from "svelte-themes/SvelteTheme.svelte";
	import Subscribe from "../components/Subscribe.svelte";

	import "../app.css";
	import Contact from "../components/Contact.svelte";
	import HeaderLink from "../components/HeaderLink.svelte";

	import themeStore, { setTheme } from "svelte-themes";
	import Sun from "../components/svgs/Sun.svelte";
	import Moon from "../components/svgs/Moon.svelte";

	function updateTheme() {
		setTheme($themeStore.theme === "light" ? "dark" : "light");
	}
</script>

<SvelteTheme attribute="class" />

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Anton&family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap"
		rel="stylesheet"
	/>
	<noscript>
		<link
			href="https://fonts.googleapis.com/css2?family=Anton&family=Merriweather&family=Merriweather+Sans:wght@500;800&display=swap"
			rel="stylesheet"
		/>
	</noscript>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<header
		id="top"
		class="flex text-lg static sm:sticky w-full h-10 top-0 left-0 z-20 justify-between font-semibold backdrop-opacity-80 py-8 px-2 md:px-8 items-center bg-white dark:bg-opacity-100 dark:bg-slate-900 bg-opacity-50"
	>
		<div class="flex items-center">
			<HeaderLink />
			<!-- <Home /> -->
			<!-- </HeaderLink> -->
			<button
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
</div>
