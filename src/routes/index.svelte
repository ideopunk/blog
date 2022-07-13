<svelte:head>
	<title>Conor Barnes</title>
	<meta name="description" content="Ideopunk" />
	<meta property="og:title" content="Conor Barnes" />
	<meta property="og:description" content="Ideopunk" />
</svelte:head>

<section
	class="flex flex-col-reverse md:flex-row items-center justify-between relative bg-primaryLight dark:bg-gray-800 bg-opacity-30 px-6 lg:pl-12 py-12"
>
	<!-- <NextSeo description="Ideopunk" openGraph={{ title: "Conor Barnes", description: "Ideopunk" }} /> -->
	<!-- {/* <div class="-top-1/3 md:top-1/4 lg:top-8 md:-left-12 absolute  md:w-[95vw] h-full bg-primary z-0 " /> */}
    {/* <div class="md:max-h-[500px] overflow-hidden">
        <Image
            src={profilePic}
            placeholder="blur"
            alt="headshot"
            priority
            // class="max-h-[450px]"
        />
    </div> */} -->
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

		<div>
			<!-- <a href={`/blog/${latestPost.id}`} class="group"> -->
			<h3 class="text-xl mt-8 font-bold text-black dark:text-primaryDark transition-colors">
				Latest Writing
			</h3>
			<h3
				class="text-2xl font-bold text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
			>
				<!-- {latestPost.title} -->
			</h3>
			<p
				class="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
			>
				<!-- <Date dateString={latestPost.date} /> -->
			</p>
			<p
				class="mb-4 text-secondary dark:text-secondaryDark group-hover:text-black dark:group-hover:text-white transition-colors"
			>
				<!-- {latestPost.preview} -->
			</p>
			<!-- </a> -->
		</div>
	</div>
</section>
