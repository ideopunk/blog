<script lang="ts">
	import ScrollArrow from "./ScrollArrow.svelte";

	export let text = "";
	export let color = "";
	export let img = "";
	export let id: number;
	let stringId = String(id);
	export let title = "";
	export let link = "";
	export let bottom = false;
	export let flip = false;
	export let dark = false;
	let size: number = 0;
</script>

<svelte:window bind:innerWidth={size} />

<div
	style={!!color ? "background-color: " + color : undefined}
	class={`flex flex-col md:flex-row justify-around w-full md:h-[600px] items-center relative ${
		flip ? "flex-row" : "flex-row-reverse"
	}`}
	id={stringId}
>
	<span class="m-4 w-[404px] pt-8 sm:m-0">
		{#if img}
			<img class="rounded-lg w-[400px] h-[400px]" src={img} width={400} height={400} alt={title} />
		{/if}
		<slot />
	</span>
	<a
		href={link}
		rel="external"
		download={!link.includes("http") ? link : false}
		class="w-96 sm:mb-20 md:mb-0 group"
	>
		<div class="m-4 mt-8 pt-0 px-4 pb-16 sm:p-4 sm:rounded  w-full  sm:m-0">
			<h2
				class={`mb-4 text-5xl transition-colors ${link ? "group-hover:text-secondary " : ""} ${
					dark ? "text-white" : "text-black"
				}`}
			>
				{title}
			</h2>
			<p
				class={`mb-4 text-2xl ${link ? "group-hover:text-secondary" : ""} transition-colors ${
					dark ? "text-white " : "text-black"
				}`}
			>
				{text}
			</p>
		</div>
	</a>
	{#if size > 600}
		<ScrollArrow to={id + 1} {bottom} />
	{/if}
</div>
