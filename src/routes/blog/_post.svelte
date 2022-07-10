<script>
	import Date from "../../components/Date.svelte";

	export let title = "";
	export let preview = "";
	export let status = "";
	export let date = "";

	import themeStore, { setTheme } from "svelte-themes";
</script>

<svelte:head>
	<title>{title} | Conor Barnes</title>
	<meta name="description" content={preview} />
	<meta property="og:title" content={`${title} | Conor Barnes`} />
	<meta property="og:description" content={preview} />
</svelte:head>

<div class="sm:mx-auto text-xl max-w-prose px-2 min-h-screen">
	<h1 class="text-xl font-bold md:text-2xl mb-4 md:mb-6">{title}</h1>
	<div class="flex flex-col md:flex-row justify-between mb-4">
		<Date dateString={date} />
		<span class="text-sm md:text-base font-light">
			{status ? `Epistemic status: ${status}` : ""}
		</span>
	</div>
	<hr />

	<!-- for some reason we need both prose-invert and the themeStore stuff for dark mode to work ¯\_(ツ)_/¯ -->
	<article
		class={`prose-lg max-w-none md:prose-xl dark:prose-invert my-4 prose-a:text-secondary  dark:prose-a:text-secondaryDark group  prose-li:list-disc prose ${
			!$themeStore.theme ? "invisible" : $themeStore.theme === "dark" ? "text-white" : ""
		}`}
	>
		<slot />
	</article>
</div>
