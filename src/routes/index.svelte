<script context="module" lang="ts">
	export const load = async ({ fetch }: { fetch: any }) => {
		const posts = await fetch("/api/posts.json");
		const allPosts: Post[] = await posts.json();
		return { props: { latestPost: allPosts[0] } };
	};
</script>

<script lang="ts">
	import Date from "../lib/components/Date.svelte";

	export let latestPost: Post;
</script>

<svelte:head>
	<title>Conor Barnes</title>
	<meta name="description" content="Ideopunk" />
	<meta property="og:title" content="Conor Barnes" />
	<meta property="og:description" content="Ideopunk" />
</svelte:head>

<section
	class="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryXLight dark:bg-gray-800 px-6 lg:pl-12 py-12"
>
	<div class="w-full  justify-around  z-10  md:ml-8 mb-10 md:mb-0">
		<!-- <Link > -->
		<a sveltekit:prefetch href="/work" class="group">
			<div class="py-4   ">
				<h1
					class="pt-4 md:py-0 text-3xl text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors font-bold md:text-4xl mb-2 md:relative"
				>
					Conor Barnes
				</h1>
				<p
					class="text-xl font-medium text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
				>
					Hi there! I'm a web developer and a writer. Get in touch!
				</p>
			</div>
		</a>
		<!-- </Link> -->

		<a href={latestPost.path} class="group">
			<div>
				<h3 class="text-xl mt-8 font-bold text-black dark:text-primaryDark transition-colors">
					Latest Writing
				</h3>
				<h3
					class="text-2xl font-bold text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
				>
					{latestPost.meta.title}
				</h3>
				<p
					class="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
				>
					<Date dateString={latestPost.meta.date} />
				</p>
				<p
					class="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
				>
					{latestPost.meta.preview}
				</p>
			</div>
		</a>
	</div>
</section>
