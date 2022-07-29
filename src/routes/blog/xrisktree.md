---
title: "Building the X-Risk Tree"
date: "2022-07-29"
preview: "Technical details"
---

I just published a [site](https://x-risk-tree.com/) to promote an EA alternative to the Doomsday Clock! 

For an explanation of the reasoning behind the project, see [my post on the EA forum](https://forum.effectivealtruism.org/posts/8ZT5kkA8jufKpRFKA/announcing-the-x-risk-tree). Code is [here](https://github.com/ideopunk/x-risk-tree/). For the technical details:

#### Tasks

I thought through what the site would technically entail: 
- Pulling data from an external API (Metaculus) on a regular interval.
- Visualizing this data. 
- Static text to accompany the data.

It's not that complicated! With this in mind, I set about deciding what the right tools would be for these. 

#### Framework 

For a while NextJS has been my go-to for static sites, using its static-site generation (SSG). However, I've never been happy with the size of the initial resulting bundle, especially for websites that require little interactivity (ex. blogs). `react-dom` itself is 130KB. That's kind of overkill for a site whose state is just simple forms! 

Lately I've been entranced by Svelte as an alternative. I've slowly been transitioning this blog over to it. I really appreciate its speed and the developer experience. There are some rough edges still (its metaframework, SvelteKit, isn't quite 1.0, so breaking changes have to be watched for), but it's pretty breezy. I'm especially a fan of the built-in animation library (whereas with React, that'd be another sizeable library added to the bundle). At this point, I basically subscribe to the ["Svelte for sites, React for apps"](https://www.swyx.io/svelte-sites-react-apps) philosophy.

Looking at my list, this was pretty clearly a Svelte situation. Until Sveltekit reaches 1.0, I've pinned the version so that I don't wake up to it breaking.

#### Data

Metaculus's public API is easy to use. After grabbing the data from the 11 questions in the [Ragnarok Series](https://www.metaculus.com/questions/2568/ragnar%25C3%25B6k-seriesresults-so-far/), it's worked to make the right numbers relative to each other and sum to a hundred. The data is then transformed to be in the hierarchy that our visualization library will like.

The question here was how to store the data. The client can't be making 11 API requests to Metaculus every time a user checks out the page. But if the pages were only generated at build time, the data would be stale, when the point is for it to track the present risk assessment from Metaculus. 

My solution is to rebuild the site daily. At first this was done through a Vercel Deploy Hook, though now it's through Cloudflare. It's triggered by this [Github Action cron](https://github.com/ideopunk/x-risk-tree/blob/master/.github/workflows/nightly-build.yaml). The site takes seconds to rebuild (even with Cloudflare lacking build caching), and users get a static site! 

#### Visualization

I went with D3. I honestly didn't explore alternatives that much, I'd seen the [Radial Cluster Tree structure](https://observablehq.com/@d3/radial-cluster) before and thought it was the perfect fit for the data. The structure worked swimmingly and I was able to quickly move to animating it. Unfortunately, one can't assign Svelte's animation directives as D3 attributes (though if there's a hack to do so, I'd love to know!). I started with D3's animations, but as they're JS-based, it required a lot of work to animate so many elements (100, 200) simultaneously. Moving them over to CSS animations solved this. Much later I found that on the Collection page there was still a choppy performance (300, 600 simultaneous elements). In the interest of time, I just disabled animations on the Collection page via the `.instant` class you can see in `app.css` and in use in `collection.css`. 

This had the helpful side-effect of providing a means to disable animations for users with the `prefers-reduced-motion` media feature enabled. To my understanding, that feature is particularly important for animations like scaling, but I suspect the tree's animation can feel pretty 'motion-y'.

#### Build-time All The Things

But wait. D3 is a big boy, and it takes time to run. I began scheming. I've always disliked it when sites are only fast for people who can afford up-to-date devices -- and most people can't! Could I improve performance by moving D3 to the prerender phase as well? I gave a more detailed explanation of this on [Twitter](https://twitter.com/Ideopunk/status/1547224333327769603), but suffice to say, yes! Using JSDOM, an SVG is rendered and returned for the client to use. I was able to remove D3 from the client entirely, and the stats are pretty nice! 10KB were cut from the (gzipped) transfer. Chrome's `domcontentloaded` and `load` events were both cut by 45%! The overall bundle sent to the client actually increased significantly in size (175kb -> 320kb), because the site now returns a big SVG chunk. However, that SVG compresses well, giving us the lower transfer size.

It's important to note that there's a downside to this solution -- it's complicated! Hahahaha. D3 is not intended as a server-side library. Some things weren't possible to do in that environment, like dynamically accessing total path lengths. This is why, in `index.svelte`, you'll see some imperative assignments inside the `onMount` function. It is not an elegant solution. If I want to tweak animations in the future, I'll probably have to work with `treeify.ts`, `app.css`, and the two Svelte files, as compared to just one or two of these files. This is the optimization trade-off: brittleness. I've promised myself that if need be, I can move D3 back to the client, I shouldn't feel beholden to the performance boost if it's impacting other aspects of the project.

#### Fonts

Were there other ways to shave off some KB? Fonts were my remaining largest resources. I'm using `Heebo` as a font and the medium and the bold weights were both 33kb pre-gzip. It felt like a lot for a relatively (IMO) minor stylistic aspect of the site. 

Then I found [Glyphr](https://www.glyphrstudio.com/) and was able to remove glyph sets I was sure I wasn't going to use. This cut each font down to 25KB for a total saving of 16KB pre-gzip! Not too shabby, though now I don't have access to multiocular O, which is always a shame.

#### Deployment

As mentioned earlier, I was using Vercel for deployment initially. However, last week page navigations started failing, accompanied by a server-side rendering (SSR) error. As I'm using SvelteKit's static adapter, SSR shouldn't even be in the conversation! I had a feeling debugging it would be a goose-chase, so I decided to finally try out Cloudflare. It has been very smooth, and now I get analytics to boot. The site you're reading right now just went through the same jump, so shout if you notice any issues!

#### Shameless Plug

Before this project, I was job-hunting. Now I'm promoting the site, helping my girlfriend out with a project, and returning to job-hunting. If you're hiring and enjoyed this blogpost, give me a shout! 