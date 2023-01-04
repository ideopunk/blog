<script lang="ts">
	import chartify from "$lib/funcs/scatterfy";
	import { onMount } from "svelte";

	// const totalLength = data.reduce((prev, curr) => prev + curr.wordcount, 0);
	// const avgLength = Math.round(totalLength / data.length);

	export let id = "";
	export let title = "";
	export let trend = false;
	export let notes: string[] = [];

	onMount(() => {
		chartify(id, trend);
	});
</script>

<div class="not-prose">
	<h3 class="font-sans text-3xl mt-8">{title}</h3>
</div>

<div class="text-black w-full">
	<div {id} class="max-w-full w-[95vw]" />
	{#each notes as note}
		<small class="text-xs mb-1 w-full text-center block italic">{note}</small>
	{/each}
</div>
