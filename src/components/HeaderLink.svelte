<script>
	import { page } from "$app/stores";
	let pathname = $page.url.pathname;
	// let itsAString = typeof children === "string";
	export let text = "";
	export let href = "";
	let nextref = text ? `/${text.toLowerCase()}` : "/";
</script>

<div class={`group relative ${text && "top-1"}`}>
	{#if href}
		<a
			class="transition-colors ease-out text-secondary dark:text-secondaryDark group-hover:text-primary dark:group-hover:text-primaryDark outline-none focus:text-primary"
			{href}
		>
			{#if text}
				{text}
			{:else}
				<slot />
			{/if}
		</a>
	{:else}
		<a
			href={nextref}
			class="ease-out block text-secondary dark:text-secondaryDark transition-colors
			group-hover:text-primary dark:group-hover:text-primaryDark cursor-pointer outline-none
			focus:text-primary"
		>
			{#if text}
				{text}
			{:else}
				<slot />
			{/if}
		</a>
	{/if}
	{#if text}
		<div
			class="w-full bg-primary dark:bg-primaryDark h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 group-hover:duration-300"
		/>
	{/if}
</div>
