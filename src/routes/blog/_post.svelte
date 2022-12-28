<script>
	import DateText from "../../lib/components/Date.svelte";

	export let title = "";
	export let preview = "";
	export let status = "";
	export let date = "";
	let trueDate = "";
	$: {
		let parsedDate = new Date(date);
		parsedDate.setDate(parsedDate.getDate() + 1);

		trueDate = parsedDate.toDateString();
	}
	import themeStore, { setTheme } from "svelte-themes";
</script>

<svelte:head>
	<title>{title} | Conor Barnes</title>
	<meta name="description" content={preview} />
	<meta property="og:title" content={`${title} | Conor Barnes`} />
	<meta property="og:description" content={preview} />
</svelte:head>

<div class="flex justify-center">
	<div class="mx-2 sm:mx-8 text-xl max-w-[60ch] mt-8 px-2 min-h-screen">
		<h1 class="text-xl font-bold md:text-2xl mb-4 md:mb-6">{title}</h1>
		<div class="flex flex-col md:flex-row justify-between mb-4 ">
			<DateText dateString={trueDate} />
			<span class="text-sm md:text-base font-light">
				{status ? `Epistemic status: ${status}` : ""}
			</span>
		</div>
		<hr />

		<!-- for some reason we need both prose-invert and the themeStore stuff for dark mode to work ¯\_(ツ)_/¯ -->
		<!-- ${	!$themeStore.theme ? "invisible" : $themeStore.theme === "dark" ? "text-white" : ""} -->
		<article
			class={`prose-lg dark:prose-invert mt-4 mb-8 group  prose-li:list-disc prose
		
		`}
		>
			<slot />
		</article>
	</div>
</div>
