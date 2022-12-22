<script lang="ts">
	import chartify from "$lib/funcs/chartify";
	import { onMount } from "svelte";
	import data from "../../data.json";

	const totalLength = data.reduce((prev, curr) => prev + curr.wordcount, 0);
	const avgLength = Math.round(totalLength / data.length);

	export let id = "";

	onMount(() => {
		chartify(id);
	});
</script>

<div class="text-black">
	<p>TOTAL LENGTH: {totalLength}</p>
	<p>AVG LENGTH: {avgLength} words</p>

	<div {id} />
</div>
