import adapter from "@sveltejs/adapter-cloudflare";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: [".svelte", ".md", ".svx"],

	preprocess: [
		mdsvex({
			extensions: [".md"],
			layout: { blog: "src/routes/blog/_post.svelte" },
			smartypants: { quotes: false }
		}),
		preprocess({ postcss: true })
	],

	kit: {
		adapter: adapter(),
		prerender: { default: true }
	}
};

export default config;
