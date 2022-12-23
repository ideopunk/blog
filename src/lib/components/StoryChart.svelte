<script lang="ts">
	import chartify from "$lib/funcs/chartify";
	import treemapify from "$lib/funcs/treemapify";
	import { onMount } from "svelte";
	import data from "../../data.json";

	// const totalLength = data.reduce((prev, curr) => prev + curr.wordcount, 0);
	// const avgLength = Math.round(totalLength / data.length);

	export let id = "";
	export let trend = false;
	export let param: "wordcount" | "subject" = "wordcount";

	onMount(() => {
		if (param === "wordcount") {
			chartify(id, trend);
		} else {
			treemapify(id);
		}
	});
</script>

<div class="text-black">
	<div {id} />
</div>
