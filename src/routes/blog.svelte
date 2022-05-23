<script>
	import PostPreview from "../components/PostPreview.svelte";
	import Subscribe from "../components/Subscribe.svelte";
</script>

<section class="mt-8">
	<!-- <NextSeo
        title="Blog"
        description="Fire Diamonds"
        openGraph={{ title: "Blog", description: "Fire Diamonds" }}
    /> -->
	<div class="flex justify-center">
		<ul class="flex-[5] m-4 mt-0 sm:mt-4 py-0 px-2 sm:py-4 sm:px-16 flex flex-col">
			<!-- {each allPostsData as post}
                <PostPreview
                    id={post.id}
                    key={post.id}
                    date={post.date}
                    title={post.title}
                    status={post.status}
                    preview={post.preview}
                />
            {/each} -->
		</ul>
		<div class="hidden sm:flex flex-col p-4 m-4 flex-1">
			<Subscribe />
		</div>
	</div>
</section>
