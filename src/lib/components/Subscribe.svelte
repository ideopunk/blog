<script lang="ts">
	import { notifications } from "../funcs/notification";

	export let side = false;
	let email = "";

	async function subscribe(e: SubmitEvent) {
		e.preventDefault();
		const res = await fetch("https://subscribe.ideopunk.workers.dev", {
			body: JSON.stringify({ email }),
			headers: { "Content-Type": "application/json" },
			method: "POST"
		});

		const bod = await res.text();
		if (res.status >= 400) {
			notifications.send(bod, "error");
		} else {
			email = "";
			notifications.send("Success! 🎉 You are now subscribed to the newsletter.");
		}
	}
</script>

<form
	on:submit|preventDefault={subscribe}
	class="flex flex-col max-w-lg bg-primaryXLight border-primary dark:border-primaryDark px-6 pb-4"
>
	<label class="invisible" for="email-input"> Email address </label>
	<input
		id={`email-input-${side ? "side" : ""}`}
		name="email"
		bind:value={email}
		placeholder="Email address"
		required
		class="outline-none border-2 bg-transparent border-transparent hover:border-secondary dark:hover:border-secondaryDark focus:border-secondary dark:focus:border-secondaryDark border-b-secondary dark:border-b-secondaryDark placeholder:opacity-50 placeholder:text-primary dark:placeholder:text-white text-xl h-7 appearance-none rounded-sm w-full  transition-all py-4"
		type="email"
	/>
	<p class="mt-4 text-primary dark:text-secondaryDark">
		Receive notifications about new blog posts.
	</p>
	<button
		class="mt-4  text-xl transition-all ease-out font-semibold tracking-wide p-2 rounded-lg 
				bg-secondary dark:bg-secondaryDark hover:bg-secondaryDark dark:hover:bg-black  text-white dark:text-stone-300 
				 hover:-translate-y-0.5 active:translate-y-0.5 focus:-translate-y-0.5 focus:bg-secondaryDark dark:focus:bg-black
				 
				 outline-none"
		type="submit"
	>
		Subscribe
	</button>
</form>
