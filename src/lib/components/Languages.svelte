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
	$: mobileRatio = size <= 600 ? 6 : size < 900 ? 9 : 12;
</script>

<svelte:window bind:innerWidth={size} />
{#if size}
	<div class="h-full w-full flex items-center justify-center">
		<div
			class="flex  gap-2 justify-between flex-wrap w-3/4 h-3/4 self-center md:w-3/4 xl:w-full xl:h-full"
		>
			<!-- <div
			class="flex items-center border h-1/3 justify-center  gap-2"
			style={"width: " + (size / (mobileRatio / 3) + 20)}
		> -->

			<div class="w-1/4">
				<Html size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Css size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Js size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<React size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Next size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Ts size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Node size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Go size={size / mobileRatio} />
			</div>
			<div class="w-1/4">
				<Rust size={size / mobileRatio} />
			</div>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-between w-full" />
{/if}
