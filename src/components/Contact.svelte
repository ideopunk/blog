<script>
	import ContactLink from "./ContactLink.svelte";
	import Copy from "./svgs/Copy.svelte";

	const handleClick = async () => {
		await navigator.clipboard.writeText("conorbarnes93@gmail.com");
		alert("Copied email address!");
		// toast("Copied email address!");
	};
</script>

<div
	class="border-black transition-colors flex sm:flex-col flex-wrap sm:flex-nowrap justify-center  lg:w-min p-4 lg:pl-12 sm:w-1/2  relative"
	id="contact"
>
	<div
		class="flex items-start sm:items-center absolute lg:relative left-8 lg:left-0 flex-1 text-left"
	>
		<div class="absolute -left-8 top-0" onClick={handleClick}>
			<Copy />
		</div>
	</div>
	<ContactLink text="Email" href="mailto:conorbarnes93@gmail.com" />

	<ContactLink text="Twitter            " href="https://www.twitter.com/ideopunk" />
	<ContactLink text="GitHub" href="https://github.com/ideopunk" />
	<ContactLink text="LinkedIn" href="https://www.linkedin.com/in/conor-barnes-b49833206/" />
</div>
