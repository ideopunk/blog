<script>
	import { flip } from "svelte/animate";
	import { fly } from "svelte/transition";
	import { notifications } from "../funcs/notification";

</script>

<div
	class="fixed bottom-2 left-0 right-0 mx-0 my-auto p-0 z-20 flex flex-col justify-center items-center pointer-events-none"
>
	{#each $notifications as notification (notification.id)}
		<div
			animate:flip
			class={`flex-auto mb-2 ${notification.type === "default" ? "bg-primary shadow-teal-800 shadow-md" : "bg-red-500"}`}
			transition:fly={{ y: 40 }}
		>
			<div class="p-4 block text-lg text-white">{notification.message}</div>
		</div>
	{/each}
</div>
