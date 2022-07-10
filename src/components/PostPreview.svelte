<script lang="ts">
	import Date from "./Date.svelte";

	export let title = "";
	export let date = "";
	export let path = "";
	export let preview = "";
</script>

<a href={path} class="h-full w-full ">
	<li class="group  pt-6 border-b-2 p-2">
		<h3
			class="text-lg group-hover:text-secondary dark:group-hover:text-secondaryDark transition-colors sm:text-3xl"
		>
			{title}
		</h3>

		<div
			class={`flex justify-between mb-4 group-hover:text-secondary dark:group-hover:text-secondaryDark transition-colors flex-col`}
		>
			<Date dateString={date} />
		</div>
		<p
			class="mt-4 mb-2 group-hover:text-secondary dark:group-hover:text-secondaryDark transition-colors"
		>
			{preview}
		</p>
	</li>
</a>
