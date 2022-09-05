<script lang="ts">
	import Date from "./Date.svelte";

	export let title = "";
	export let date = "";
	export let path = "";
	export let preview = "";
</script>

<li style="box-shadow: 0 3px 0;" class="group  pt-6 bg-secondary-grey p-6  text-secondary text-opacity-60">
	<a href={path} sveltekit:prefetch class="text-black dark:text-white h-full w-full ">
		<h3
			class="text-lg group-hover:text-secondary dark:group-hover:text-secondaryDark transition-colors sm:text-xl font-bold"
		>
			{title}
		</h3>

		<div
			class={`flex justify-between mb-4 text-stone-500 group-hover:text-secondary dark:group-hover:text-secondaryDark transition-colors flex-col`}
		>
			<Date dateString={date} />
		</div>
		<p
			class="mt-4 mb-2 group-hover:text-secondary dark:group-hover:text-secondaryDark transition-colors"
		>
			{preview}
		</p>
	</a>
</li>
