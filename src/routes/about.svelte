<svelte:head>
	<title>About | Conor Barnes</title>
	<meta name="description" content="About me" />
	<meta property="og:title" content="About | Conor Barnes" />
	<meta property="og:description" content="About me" />
</svelte:head>

<div class="sm:mx-auto text-xl  max-w-[60ch] mt-8 px-2">
	<!-- <NextSeo
        title={"Conor Barnes"}
        description={"About me"}
        openGraph={{ title: "Conor Barnes", description: "About me" }}
    /> -->
	<div >
		<h1 class="text-xl font-bold md:text-2xl mb-4 md:mb-6">About Me</h1>
	</div>
	<hr />

	<article
		class={`max-w-[60ch] prose md:prose-xl mt-4  dark:prose-p:text-white prose-a:text-secondary  dark:prose-a:text-secondaryDark pb-12`}
	>
		<p>Hi! I'm Conor Barnes, a developer and writer living in Halifax.</p>
		<p>
			I like writing stories. This year I'm writing a hundred and I started with{" "}
			<a
				href="/blog/boycott"
				sveltekit:prefetch
				class="hover:text-secondaryDark transition-colors dark:hover:text-secondary"
			>
				The Boycott</a
			>. Sometimes they're 'speculative fiction' or 'magical realism' and mostly they're short.
		</p>
		<p>
			I like programming things for friends, like{" "}
			<a
				href="/work#2"
				sveltekit:prefetch
				class="hover:text-secondaryDark transition-colors dark:hover:text-secondary"
			>
				Pixel Sorter</a
			>. You do not have to be a friend to make a request. The easiest way to get a 'yes' is to ask
			me for something that will delight people (including myself).
		</p>
		<p>
			I occassionally like writing non-fiction, like{" "}
			<!-- <Link > -->
			<a
				href="/blog/tipsforabetterlife"
				class="hover:text-secondaryDark transition-colors dark:hover:text-secondary"
				sveltekit:prefetch
			>
				100 Tips For a Better Life</a
			>. If you've tried them all and are still unhappy please let me know and I will find more tips
			for you.
		</p>
	</article>
</div>
