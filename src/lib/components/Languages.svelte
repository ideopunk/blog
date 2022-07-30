<script lang="ts">
	import Css from "./svgs/CSS.svelte";
	import Go from "./svgs/Go.svelte";

	import Html from "./svgs/HTML.svelte";
	import Js from "./svgs/JS.svelte";
	import Next from "./svgs/Next.svelte";
	import Node from "./svgs/Node.svelte";
	import React from "./svgs/React.svelte";
	import Rust from "./svgs/Rust.svelte";
	import Ts from "./svgs/TS.svelte";

	let size: any = undefined;
	// const mobileRatio = 12;
	$: mobileRatio = size <= 600 ? 6 : 12;
</script>

<svelte:window bind:innerWidth={size} />
{#if size}
	<div
		class="flex items-center justify-center  gap-2"
		style={"width: " + (size / (mobileRatio / 3) + 20)}
	>
		<div class=" ">
			<Html size={size / mobileRatio} />
		</div>
		<div class=" ">
			<Css size={size / mobileRatio} />
		</div>
		<div class=" ">
			<Js size={size / mobileRatio} />
		</div>
	</div>
	<div
		class="flex flex-wrap items-center justify-center  my-2 gap-2"
		style={"width: " + (size / (mobileRatio / 3) + 20)}
	>
		<div class=" ">
			<React size={size / mobileRatio} />
		</div>
		<div class=" ">
			<Next size={size / mobileRatio} />
		</div>

		<div class=" ">
			<Ts size={size / mobileRatio} />
		</div>
	</div>
	<div
		class="flex flex-wrap items-center justify-center  gap-2"
		style={"width: " + (size / (mobileRatio / 3) + 20)}
	>
		<div class=" ">
			<Node size={size / mobileRatio} />
		</div>

		<div class=" ">
			<Go size={size / mobileRatio} />
		</div>

		<div class=" ">
			<Rust size={size / mobileRatio} />
		</div>
	</div>
{:else}
	<div class="flex items-center justify-between w-full" />
{/if}
