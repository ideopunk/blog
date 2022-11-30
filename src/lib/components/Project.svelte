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
	class={`flex flex-col px-4 md:mx-0 md:flex-row justify-around w-full md:h-[600px] items-center relative ${
		flip ? "flex-row" : "flex-row-reverse"
	}`}
	id={stringId}
>
	<span class="m-4 mb-0 w-[404px] h-[404px] max-w-full  flex items-center">
		{#if img}
			<img class="rounded-lg object-contain " src={img} alt={title} />
		{/if}
		<slot />
	</span>
	<a
		href={link}
		disabled={!link}
		rel={link ? "external" : ""}
		download={!link ? undefined : !link.includes("http") ? link : false}
		class="w-96 sm:mb-20 max-w-full md:mb-0 group"
	>
		<div class="md:mt-8 pt-0 md:px-4  pb-16 sm:p-4 sm:rounded md:w-full ">
			<h2
				class={`mb-4 font-bold md:text-5xl transition-colors ${
					link ? "group-hover:text-secondary " : ""
				} ${dark ? "text-white" : "text-black"}`}
			>
				{title}
			</h2>
			<p
				class={`mb-4 md:text-2xl ${link ? "group-hover:text-secondary" : ""} transition-colors ${
					dark ? "text-white " : "text-black"
				}`}
			>
				{text}
			</p>
		</div>
	</a>
	{#if size > 600}
		<ScrollArrow dark={!dark} to={id + 1} {bottom} />
	{/if}
</div>
