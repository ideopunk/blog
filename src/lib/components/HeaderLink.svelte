<script>
	import { page } from "$app/stores";
	const re = /\/\w*/;
	$: pathname = $page.url.pathname;
	$: subdomain = (pathname.match(re) || [""])[0];
	// let itsAString = typeof children === "string";
	export let text = "";
	$: lowerCaseText = text.toLowerCase();
	export let href = "";
	$: nextref = text ? `/${lowerCaseText}` : "/";
	$: curr = lowerCaseText ? subdomain.includes(lowerCaseText) : subdomain === "/";
</script>

<div class={`group relative w-min ${text && "top-1"}`}>
	<a
		sveltekit:prefetch
		href={href || nextref}
		class={`ease-out block w-max  outline-inherit  text-2xl lg:text-lg ${
			curr
				? "text-primary hover:text-primary"
				: "text-secondary dark:text-secondaryDark transition-colors group-hover:text-primary dark:group-hover:text-primaryDark focus:text-primary dark:focus:text-primaryDark "
		}`}
	>
		{#if text}
			{text}
		{:else}
			<slot />
		{/if}
	</a>
	{#if text}
		<div
			class={`w-full bg-secondary dark:bg-secondaryDark group-hover:bg-primary dark:group-hover:bg-primaryDark h-0.5  transition-transform origin-left duration-500 group-hover:duration-300 ${
				curr ? "scale-x-100 bg-primary" : "scale-x-0 group-hover:scale-x-100"
			}`}
		/>
	{/if}
</div>
