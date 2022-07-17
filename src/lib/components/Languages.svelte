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
		class="flex items-center justify-center  "
		style={"width: " + (size / (mobileRatio / 3) + 20)}
	>
		<div class="mx-1 lg:mx-0">
			<Html size={size / mobileRatio} />
		</div>
		<div class="mx-1 lg:mx-0">
			<Css size={size / mobileRatio} />
		</div>
		<div class="mx-1 lg:mx-0">
			<Js size={size / mobileRatio} />
		</div>
	</div>
	<div
		class="flex flex-wrap items-center justify-center  my-2"
		style={"width: " + (size / (mobileRatio / 3) + 20)}
	>
		<div class="mx-1 lg:mx-0">
			<React size={size / mobileRatio} />
		</div>
		<div class="mx-1 lg:mx-0">
			<Next size={size / mobileRatio} />
		</div>

		<div class="mx-1 lg:mx-0">
			<Ts size={size / mobileRatio} />
		</div>
	</div>
	<div
		class="flex flex-wrap items-center justify-center  "
		style={"width: " + (size / (mobileRatio / 3) + 20)}
	>
		<div class="mx-1 lg:mx-0">
			<Node size={size / mobileRatio} />
		</div>

		<div class="mx-1 lg:mx-0">
			<Go size={size / mobileRatio} />
		</div>

		<div class="mx-1 lg:mx-0">
			<Rust size={size / mobileRatio} />
		</div>
	</div>
{:else}
	<div class="flex items-center justify-between w-full" />
{/if}
