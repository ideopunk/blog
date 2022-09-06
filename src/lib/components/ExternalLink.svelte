<script lang="ts">
	export let href: string;
</script>

<a
	class="text-secondary hover:text-secondaryDark transition-colors"
	{href}
	rel="external"
	target="_blank"
>
	<slot />
</a>
