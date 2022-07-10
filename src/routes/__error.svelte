<script context="module" lang="ts">
	export function load({ error, status }: { error: any; status: any }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title = "";
</script>

<svelte:head>
	<title>404 / Conor Barnes</title>
</svelte:head>

<div class="h-[60vh] flex flex-col items-center justify-center">
	<div class="p-4 w-screen text-white">
		<p class="text-center">{title}</p>
	</div>
</div>
