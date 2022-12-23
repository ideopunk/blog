<script lang="ts">
	import chartify from "$lib/funcs/chartify";
	import { onMount } from "svelte";
	import data from "../../data.json";

	// const totalLength = data.reduce((prev, curr) => prev + curr.wordcount, 0);
	// const avgLength = Math.round(totalLength / data.length);

	export let id = "";
	export let trend = false;

	onMount(() => {
		chartify(id, trend);
	});
</script>

<div class="text-black">
	<div {id} />
</div>
