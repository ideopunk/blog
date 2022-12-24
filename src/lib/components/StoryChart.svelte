<script lang="ts">
	import chartify from "$lib/funcs/chartify";
	import treemapify from "$lib/funcs/treemapify";
	import { onMount } from "svelte";
	import data from "../../data.json";

	// const totalLength = data.reduce((prev, curr) => prev + curr.wordcount, 0);
	// const avgLength = Math.round(totalLength / data.length);

	export let id = "";
	export let trend = false;
	export let type: "scatter" | "treemap" = "scatter";
	export let readOnlyProperties: string[] = [];

	let property1 = readOnlyProperties.length ? readOnlyProperties[0] : "grammatical_person";
	let property2 = readOnlyProperties.length >= 2 ? readOnlyProperties[1] : "tenses";

	// if we've been supplied what properties to look at, don't supply a form for choosing them.
	let editable = !readOnlyProperties.length && type === "treemap";
	let mounted = false;

	let options = [
		{ value: "", label: "" },
		{ value: "grammatical_person", label: "Grammatical person" },
		{ value: "tenses", label: "Tense" },
		{ value: "subject_tags", label: "Subject tags" },
		{ value: "form_and_genre", label: "Form and genre tags" }
	];

	onMount(() => {
		if (type === "scatter") {
			chartify(id, trend);
		} else {
			if (readOnlyProperties.length === 1 || property2 === "") {
				treemapify(id, [property1]);
			} else {
				treemapify(id, [property1, property2]);
			}
		}

		mounted = true;
	});

	$: console.log(property1);
	$: {
		if (mounted && type !== "scatter" && editable) {
			console.log("REACT");
			console.log(property1);
			console.log(property2);
			if (readOnlyProperties.length === 1 || property2 === "") {
				treemapify(id, [property1]);
			} else {
				treemapify(id, [property1, property2]);
			}
		}
	}
</script>

{#if editable}
	<form>
		<select
			bind:value={property1}
			class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]"
		>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
		<select
			bind:value={property2}
			class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]"
		>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
	</form>
{/if}
<div class="text-black">
	<div {id} />
</div>
