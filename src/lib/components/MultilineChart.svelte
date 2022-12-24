<script lang="ts">
	import chartify from "$lib/funcs/scatterfy";
	import {
		hasSubject,
		hasTense,
		isChapters,
		isFavourite,
		isNamed,
		isPerson
	} from "$lib/funcs/conditions";
	import { grammaticalPersons, subjects, tenses } from "$lib/funcs/storyDataUtils";
	import multiLine from "$lib/funcs/multiLine";
	import treemapify from "$lib/funcs/treemapify";
	import { onMount } from "svelte";
	import data from "../../data.json";

	// const totalLength = data.reduce((prev, curr) => prev + curr.wordcount, 0);
	// const avgLength = Math.round(totalLength / data.length);

	export let id = "";
	export let title = "";
	export let readOnlyProperties: string[] = [];

	let property = readOnlyProperties.length ? readOnlyProperties[0] : "grammatical_person";
	let innerProperty = readOnlyProperties.length >= 2 ? readOnlyProperties[1] : "tenses";

	// if we've been supplied what properties to look at, don't supply a form for choosing them.
	let editable = !readOnlyProperties.length;

	let mounted = false;

	let options = [
		{ value: "", label: "", innerOptions: [] },
		{
			value: "grammatical_person",
			condition: isPerson,
			label: "Grammatical person",
			innerOptions: grammaticalPersons
		},
		{ value: "tenses", condition: hasTense, label: "Tense", innerOptions: tenses },
		{ value: "subject_tags", condition: hasSubject, label: "Subject tags", innerOptions: [] },
		{ value: "form_and_genre", label: "Form and genre tags", innerOptions: [] },
		{ value: "chapters", condition: isChapters, label: "Chaptered", innerOptions: [] },
		{ value: "favourite", condition: isFavourite, label: "Favourites", innerOptions: [] },
		{ value: "named", condition: isNamed, label: "Named", innerOptions: [] }
	];

	$: selected = options.find((o) => o.value === property);

	onMount(() => {
		multiLine(id, selected?.condition, innerProperty);
		mounted = true;
	});

	$: {
		if (mounted && editable && selected?.value) {
			console.log(selected);
			multiLine(id, selected?.condition, innerProperty);
		}
	}
</script>

<div class="not-prose">
	<h3 class="font-sans text-3xl mt-8">{title}</h3>
</div>
{#if editable}
	<form>
		<select
			bind:value={property}
			class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]"
		>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
		<select
			bind:value={innerProperty}
			class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]"
		>
			{#each selected.innerOptions as option}
				<option value={option}>
					{option}
				</option>
			{/each}
		</select>
	</form>
{/if}
<div class="text-black">
	<div {id} />
</div>
