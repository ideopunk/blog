<script>

	import ContactLink from "./ContactLink.svelte";
	import Copy from "./svgs/Copy.svelte";
	import { notifications } from "../funcs/notification";

	async function handleClick() {
		await navigator.clipboard.writeText("conorbarnes93@gmail.com");
		notifications.send("Email address copied!");
	}
</script>

<!-- class=" border-black transition-colors flex lg:flex-col justify-center mr-6 lg:mr-8  w-52  " -->

<div
	class=" border-black transition-colors flex  justify-center mr-6  w-52  "
	id="contact"
>
	<div class="flex   w-1/2 lg:w-full">
		<div class="flex justify-end items-start   lg:w-1/2 px-2">
			<button class="" on:click={handleClick}>
				<Copy />
			</button>
		</div>
		<div class="  lg:w-1/2 px-2">
			<ContactLink text="Email" href="mailto:conorbarnes93@gmail.com" />
			<ContactLink text="Twitter            " href="https://www.twitter.com/ideopunk" />
		</div>
	</div>

	<div class="flex   w-1/2 lg:w-full">
		<div class="order-last   lg:w-1/2 px-2">
			<ContactLink text="GitHub" href="https://github.com/ideopunk" />
			<ContactLink text="LinkedIn" href="https://www.linkedin.com/in/conor-barnes-b49833206/" />
		</div>
		<div class="order-1   lg:w-1/2 px-2" />
	</div>
</div>
