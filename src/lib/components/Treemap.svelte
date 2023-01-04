<script lang="ts">
	import treemapify from "$lib/funcs/treemapify";
	import { onMount } from "svelte";

	export let id = "";
	export let title = "";
	export let readOnlyProperties: string[] = [];
	export let notes: string[] = [];

	let property1 = readOnlyProperties.length ? readOnlyProperties[0] : "grammatical_person";
	let property2 = readOnlyProperties.length >= 2 ? readOnlyProperties[1] : "tenses";

	// if we've been supplied what properties to look at, don't supply a form for choosing them.
	let editable = !readOnlyProperties.length;
	let mounted = false;

	let options = [
		{ value: "", label: "" },
		{ value: "grammatical_person", label: "Grammatical person" },
		{ value: "tenses", label: "Tense" },
		{ value: "subject_and_method", label: "Subject and Method" },
		{ value: "genre", label: "Genre" },
		{ value: "chapters", label: "Chaptered" },
		{ value: "favourite", label: "Favourites" },
		{ value: "named", label: "Named" }
	];

	onMount(() => {
		if (
			property1 !== "" &&
			(readOnlyProperties.length === 1 || property2 === "" || property1 === property2)
		) {
			treemapify(id, [property1 as any]);
		} else {
			treemapify(id, [property1 as any, property2 as any]);
		}

		mounted = true;
	});

	$: {
		if (mounted && editable) {
			if (
				property1 !== "" &&
				(readOnlyProperties.length === 1 || property2 === "" || property1 === property2)
			) {
				treemapify(id, [property1 as any]);
			} else {
				treemapify(id, [property1 as any, property2 as any]);
			}
		}
	}
</script>

<div class="not-prose">
	<h3 class="font-sans text-3xl mt-8">{title}</h3>
</div>
{#if editable}
	<form class="flex gap-2">
		<select
			bind:value={property1}
			class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]  focus:border-primary"
		>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
		<select
			bind:value={property2}
			class="outline-none peer border-2 bg-transparent border-secondary text-xl rounded-sm  transition-all px-2 h-[42px]  focus:border-primary"
		>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
	</form>
{/if}
<div class="text-black w-full">
	<div {id} class="w-[95vw] max-w-full" />
	{#each notes as note}
		<small class="text-xs mb-1 w-full text-center block italic">{note}</small>
	{/each}
</div>
