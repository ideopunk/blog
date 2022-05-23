<script>
	export let href = "";
	export let text = "";
</script>

<a
	{href}
	class={`mb-3 group font-semibold  w-28`}
	target="_blank"
	rel="external noopener noreferrer"
>
	<p
		class="transition-all  ease-out group-hover:translate-x-4 text-primary group-hover:text-secondary dark:text-primaryDark dark:group-hover:text-secondaryDark"
	>
		{text}
	</p>
</a>
