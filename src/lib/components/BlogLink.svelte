<script lang="ts">
	export let href: string;
</script>

<a class="text-secondary hover:text-secondaryDark transition-colors" href={`/blog/${href}`}>
	<slot />
</a>
