<script lang="ts">
	import {
		hasGenre,
		hasSubject,
		hasTense,
		isChapters,
		isFavourite,
		isNamed,
		isPerson
	} from "$lib/funcs/conditions";
	import { genres, grammaticalPersons, subjects, tenses } from "$lib/funcs/storyDataUtils";
	import multiLine from "$lib/funcs/multiLine";
	import { onMount } from "svelte";
	import data from "../../data.json";
	import toTitleCase from "$lib/funcs/toTitleCase";

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
		{
			value: "subject_and_method",
			condition: hasSubject,
			label: "Subject and Method",
			innerOptions: subjects
		},
		{ value: "genre", condition: hasGenre, label: "Genre", innerOptions: genres },
		{ value: "chapters", condition: isChapters, label: "Chaptered" },
		{ value: "favourite", condition: isFavourite, label: "Favourites" },
		{ value: "named", condition: isNamed, label: "Named" }
	];

	$: selected = options.find((o) => o.value === property);

	onMount(() => {
		multiLine(id, selected?.condition, innerProperty);
		mounted = true;
	});

	$: {
		if (mounted && editable && selected?.value) {
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
		{#if selected?.innerOptions}
			<select
				bind:value={innerProperty}
				class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]"
			>
				{#each selected.innerOptions as option}
					<option value={option}>
						{toTitleCase(option)}
					</option>
				{/each}
			</select>
		{/if}
	</form>
{/if}
<div class="text-black">
	<div {id} />
</div>
