<script>
	import XLink from "$lib/components/ExternalLink.svelte";
	import BlogLink from "$lib/components/BlogLink.svelte";
</script>

<svelte:head>
	<title>Stories | Conor Barnes</title>
	<meta name="description" content="79/100" />
	<meta property="og:title" content="Stories | Conor Barnes" />
	<meta property="og:description" content="79/100" />
</svelte:head>

<div class="flex justify-center">
	<div class="sm:mx-auto text-xl   mt-8 px-2">
		<h1 class="text-xl font-bold md:text-2xl mb-4 md:mb-6">Stories</h1>

		<article
			class={`prose  mt-2 prose-h4:mt-8  prose-a:text-secondary prose-p:mt-2 prose-p:mb-2 prose-li:mb-1 dark:prose-a:text-secondaryDark pb-12`}
		>
			<hr />

			<p>
				I'm writing 100 stories for fun this year. As of October 8, I'm at 87. They are usually
				quite short. I have put some on this blog, and published some in magazines. If you're a
				chapbook publisher, give me a shout.
			</p>
			<div class="pt-4">
				<h3>Blogposts</h3>
			</div>
			<ul>
				<li><BlogLink href="boycott">The Boycott</BlogLink></li>
				<li><BlogLink href="mrsfields">Mrs. Fields</BlogLink></li>
				<li><BlogLink href="parrhesia">Parrhesia</BlogLink></li>
				<li><BlogLink href="medea">Medea</BlogLink></li>
				<li><BlogLink href="thechristian">The Christian</BlogLink></li>
				<li><BlogLink href="afterthefire">After The Fire</BlogLink></li>
				<li><BlogLink href="theagent">The Agent</BlogLink></li>
				<li><BlogLink href="whitestag">The White Stag</BlogLink></li>
				<li><BlogLink href="kind">Kind</BlogLink></li>
				<li><BlogLink href="like-the-setting-sun">Like The Setting Sun</BlogLink></li>
			</ul>

			<div class="pt-4 pb-1">
				<h3>Publications</h3>
			</div>

			<p>White Wall Review (April 26, 2022)</p>
			<ul class="pb-4">
				<li>
					<XLink href="https://whitewallreview.com/pushing-the-knife/">Pushing the Knife</XLink>
				</li>
				<li><XLink href="https://whitewallreview.com/sunday-night/">Sunday Night</XLink></li>
				<li><XLink href="https://whitewallreview.com/my-dad/">My Dad</XLink></li>
			</ul>

			<p>Potato Soup Journal (June 28, 2022)</p>
			<ul class="pb-4">
				<li>
					<XLink href="http://potatosoupjournal.com/fun-facts-by-conor-barnes/">Fun Facts</XLink>
				</li>
			</ul>

			<p>Literally Stories (July 9, 2022)</p>
			<ul class="pb-4">
				<li>
					<XLink
						href="https://literallystories2014.com/2022/07/09/week-384-born-too-late-five-timely-tales-and-a-saturday-special-not-written-by-tom/"
						>A Great Bird</XLink
					>
				</li>
			</ul>

			<p>The Metaworker (Aug 16, 2022)</p>
			<ul class="pb-4">
				<li>
					<XLink
						href="https://www.themetaworker.com/2022/08/15/three-microfictions-by-conor-barnes/"
						>The Code</XLink
					>
				</li>
				<li>
					<XLink
						href="https://www.themetaworker.com/2022/08/15/three-microfictions-by-conor-barnes/"
						>The Dongle</XLink
					>
				</li>
				<li>
					<XLink
						href="https://www.themetaworker.com/2022/08/15/three-microfictions-by-conor-barnes/"
						>The Apartment</XLink
					>
				</li>
			</ul>

			<p>Shirley Magazine (Aug 29, 2022)</p>
			<ul class="pb-4">
				<li><XLink href="https://www.shirleymag.com/#block-c19a90456738da6b06b0">Sonya</XLink></li>
			</ul>

			<p>Blink Ink (Sept 1, 2022)</p>
			<ul class="pb-4"><li>The Genie (Print)</li></ul>

			<p>The Bookends Review (Sept 23, 2022)</p>
			<ul class="pb-4">
				<li>
					<XLink href="http://thebookendsreview.com/2022/09/23/the-fountain/">The Fountain</XLink>
				</li>
			</ul>

			<p>The Chamber Magazine (Oct 8, 2022)</p>
			<ul class="pb-4">
				<li>
					<XLink
						href="https://thechambermagazine.com/2022/10/07/three-works-of-flash-fiction-by-conor-barnes-the-dream-eater-the-duel-and-void/"
						>The Dream Eater</XLink
					>
				</li>
				<li>
					<XLink
						href="https://thechambermagazine.com/2022/10/07/three-works-of-flash-fiction-by-conor-barnes-the-dream-eater-the-duel-and-void/"
						>The Duel</XLink
					>
				</li>
				<li>
					<XLink
						href="https://thechambermagazine.com/2022/10/07/three-works-of-flash-fiction-by-conor-barnes-the-dream-eater-the-duel-and-void/"
						>Void</XLink
					>
				</li>
			</ul>
		</article>
	</div>
</div>
