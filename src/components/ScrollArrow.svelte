<script lang="ts">
	import Arrow from "./svgs/Arrow.svelte";

	export let to: number;
	export let bottom = false;
</script>

<a
	class={`w-9 h-9 absolute left-0 right-0 ml-auto mr-auto bottom-6 flex justify-center items-center rounded-full backdrop-opacity-50 transition ease-out hover:text-gray-300 hover:bg-gray-600 ${
		bottom && "rotate-180"
	}`}
	href={bottom ? "#" : `#${to}`}
>
	<Arrow />
</a>
