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
	class="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryXLight dark:bg-gray-800 px-6 lg:pl-12 py-12 overflow-hidden"
>
	<div class="w-full  justify-around  z-10  md:ml-8 mb-10 md:mb-0">
		<!-- <Link > -->
		<a
			sveltekit:prefetch
			href="/work"
			class="group flex text-secondary hover:text-secondary outline-none "
		>
			<div class="py-4 flex">
				<div
					class="group-hover:scale-y-100 group-focus:scale-y-100 scale-y-0 transition-transform origin-top h-full w-0.5 bg-secondary mr-4"
				/>
				<div>
					<h1 class="pt-4 md:py-0 text-3xl font-bold md:text-4xl mb-2 md:relative">Hi there!</h1>
					<p class="text-xl font-medium max-w-lg">
						I'm a web developer and a writer. Sometimes I freelance and sometimes I write
						non-fiction.
					</p>
				</div>
			</div>
		</a>
		<!-- </Link> -->

		<a href={latestPost.path} class="group text-secondaryDark flex outline-none">
			<div class="flex mt-8 mb-4">
				<div
					class="scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 origin-top transition-transform h-full w-0.5 mr-4 bg-secondaryDark"
				/>

				<div>
					<h3 class="text-xl font-bold">Latest Writing</h3>
					<h3 class="text-2xl font-bold">
						{latestPost.meta.title}
					</h3>
					<p class="mb-4 ">
						<Date dateString={latestPost.meta.date} />
					</p>
					<p>
						{latestPost.meta?.preview || ""}
					</p>
				</div>
			</div>
		</a>
	</div>
</section>
