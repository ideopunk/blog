<script>
	import { page } from "$app/stores";
	let pathname = $page.url.pathname;
	// let itsAString = typeof children === "string";
	export let text = "";
	export let href = "";
	let nextref = text ? `/${text.toLowerCase()}` : "/";
</script>

<div class={`group relative ${text && "top-1"}`}>
	<a
		sveltekit:prefetch
		href={href || nextref}
		class="ease-out block text-secondary dark:text-secondaryDark transition-colors
			group-hover:text-primary dark:group-hover:text-primaryDark
			focus:text-primary dark:focus:text-primaryDark outline-inherit"
	>
		{#if text}
			{text}
		{:else}
			<slot />
		{/if}
	</a>
	{#if text}
		<div
			class="w-full bg-secondary dark:bg-secondaryDark group-hover:bg-primary dark:group-hover:bg-primaryDark h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 group-hover:duration-300"
		/>
	{/if}
</div>
