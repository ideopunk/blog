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

	<div class="relative overflow-hidden">
		<input
			id={`email-input-${side ? "side" : ""}`}
			name="email"
			bind:value={email}
			placeholder="Email address"
			required
			class="outline-none peer border-b-2 pl-2 bg-transparent border-secondary text-xl appearance-none rounded-sm w-full  transition-all pb-1 pt-2 h-[42px]"
			type="email"
		/>

		<!-- right -->
		<div
			class={`w-0.5 scale-y-0 peer-focus:scale-y-100 peer-hover:scale-y-100 
			origin-bottom
			peer-focus:delay-[0ms] peer-hover:delay-[0ms]
			delay-1000 
			 bg-secondary dark:bg-secondaryDark    transition-transform  duration-500 h-[42px] absolute top-0 right-0 self-end`}
		/>

		<!-- top -->
		<div
			class={`w-full scale-x-0 peer-focus:scale-x-100 peer-hover:scale-x-100 bg-secondary dark:bg-secondaryDark  h-0.5  transition-transform 
			origin-right
			duration-500 delay-500 absolute top-0`}
		/>

		<!-- left -->
		<div
			class={`w-0.5 scale-y-0 peer-focus:scale-y-100 peer-hover:scale-y-100 bg-secondary dark:bg-secondaryDark    transition-transform 
			origin-top delay-[0ms]
			peer-focus:delay-1000 peer-hover:delay-1000
			duration-500 h-[42px]   absolute top-0`}
		/>
	</div>

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

<!-- hover:border-secondary dark:hover:border-secondaryDark focus:border-secondary dark:focus:border-secondaryDark border-b-secondary dark:border-b-secondaryDark placeholder:opacity-50 placeholder:text-primary dark:placeholder:text-white -->
