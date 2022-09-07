<script>
	import { fly, slide } from "svelte/transition";
	import SvelteTheme from "svelte-themes/SvelteTheme.svelte";

	import Subscribe from "../lib/components/Subscribe.svelte";

	import "../app.css";
	// import "../marquee.css";
	import Contact from "../lib/components/Contact.svelte";
	import HeaderLink from "../lib/components/HeaderLink.svelte";

	// import themeStore, { setTheme } from "svelte-themes";
	// import Sun from "../lib/components/svgs/Sun.svelte";
	// import Moon from "../lib/components/svgs/Moon.svelte";
	// import Home from "../lib/components/svgs/Home.svelte";
	import { onMount } from "svelte";
	import Toast from "$lib/components/Toast.svelte";

	let open = false;
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_CA" />
	<meta property="og:url" content="https://www.conorbarnes.com" />
	<meta property="og:site_name" content="Conor Barnes" />
	<meta property="og:image" content="https://conorbarnes.com/images/the-painter.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:handle" content="@ideopunk" />
	<meta property="twitter:site" content="@ideopunk" />
</svelte:head>

<div class="min-h-screen  dark:bg-slate-900  flex flex-col">
	<header
		id="top"
		class={`flex text-lg static sm:sticky w-full h-16  lg:h-10 top-0 left-0 z-20 justify-between font-semibold lg:bg-opacity-50 lg:p-8 items-center bg-white dark:bg-opacity-100 dark:bg-slate-900 ${!open && "bg-opacity-50"}`}
	>
		<div class="items-center hidden lg:flex">
			<HeaderLink>
				<h1 class="italic text-xl lg:mx-4">Conor Barnes</h1>
			</HeaderLink>
			<!-- <button
				aria-label="Toggle Theme"
				name="Toggle Theme"
				on:click={updateTheme}
				tabindex="0"
				class="w-8 ml-8 group border-current relative  text-secondary dark:text-secondaryDark transition-colors
				hover:text-primary dark:hover:text-primaryDark focus:text-primary dark:focus:text-primaryDark
				 outline-current"
			>
				{#if mounted && $themeStore.theme === "dark"}
					<Moon />
				{:else if mounted}
					<Sun />
				{/if}
			</button> -->
		</div>
		<div class="divide-x-8 items-center md:divide-x-[2rem] divide-transparent hidden lg:flex">
			<HeaderLink text="About" />
			<HeaderLink text="Stories" />
			<HeaderLink text="Work" />
			<HeaderLink text="Blog" />
			<HeaderLink href="/rss.xml" text="RSS" />
		</div>
		<div class="lg:hidden z-10 relative flex items-center self-center  justify-end w-full ">
			<button
				class="rounded-full hover:bg-secondary-grey p-2 mr-4"
				on:click={() => {
					open = !open;
				}}
			>
				{#if open}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
						/>
					</svg>
				{/if}
			</button>
		</div>
		{#if open}
			<div
				transition:slide
				class="lg:hidden absolute bg-white top-16 left-0 w-full p-8 pt-4  shadow-secondary-grey shadow-lg z-0"
			>
				<div class="w-1/2 flex flex-col gap-4">
					<HeaderLink text="About" />
					<HeaderLink text="Stories" />
					<HeaderLink text="Work" />
					<HeaderLink text="Blog" />
					<HeaderLink href="/rss.xml" text="RSS" />
				</div>
			</div>
		{/if}
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
