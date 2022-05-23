<script>
	import Subscribe from "../components/Subscribe.svelte";

	import "../app.css";
	import Contact from "../components/Contact.svelte";
	import HeaderLink from "../components/HeaderLink.svelte";
</script>

<div class="min-h-screen flex flex-col">
	<header
		id="top"
		class="flex text-lg static sm:sticky w-full h-10 top-0 left-0 z-20 justify-between font-semibold backdrop-opacity-80 py-8 px-2 md:px-8 items-center bg-white dark:bg-opacity-100 dark:bg-slate-900 bg-opacity-50"
	>
		<div class="flex items-center">
			<HeaderLink />
			<!-- <Home /> -->
			<!-- </HeaderLink> -->
			<!-- <button
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				class="w-8 ml-8 group outline-none border-current rounded-full relative"
			>
				{#if mounted && theme === "light"}
					<Sun />
				{/if}

				{#if mounted && theme === "dark"}
					<Moon />
				{/if}

			</button> -->
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
