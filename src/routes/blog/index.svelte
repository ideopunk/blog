<script context="module" lang="ts">
	export const load = async ({ fetch }: { fetch: any }) => {
		const posts = await fetch("/api/posts.json");
		const allPosts: Post[] = await posts.json();
		return {
			props: { posts: allPosts }
		};
	};
</script>

<script lang="ts">
	import PostPreview from "../../lib/components/PostPreview.svelte";
	import Subscribe from "../../lib/components/Subscribe.svelte";

	export let posts: Post[];
</script>

<svelte:head>
	<title>Blog | Conor Barnes</title>
	<meta name="description" content="Fire Diamonds" />
	<meta property="og:title" content="Blog | Conor Barnes" />
	<meta property="og:description" content="Fire Diamonds" />
</svelte:head>

<section class="mt-8">
	<div class="flex justify-center">
		<ul class="flex-[5] m-4 mt-0 sm:mt-4 py-0 px-2 sm:py-4 sm:px-16 flex flex-col">
			{#each posts as post}
				<PostPreview
					path={post.path}
					date={post.meta.date}
					title={post.meta.title}
					preview={post.meta.preview}
				/>
			{/each}
		</ul>
		<div class="hidden sm:flex flex-col p-4 m-4 flex-1">
			<a
				href="/rss.xml"
				sveltekit:prefetch
				class="ease-out block text-secondary dark:text-secondaryDark transition-colors
	group-hover:text-primary dark:group-hover:text-primaryDark
	focus:text-primary dark:focus:text-primaryDark outline-inherit text-lg sm:text-3xl"
				><span class="text-black dark:text-white">{"| "}</span>RSS</a
			>
			<!-- <Subscribe side /> -->
		</div>
	</div>
</section>
