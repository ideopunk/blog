import { post } from "./subscribe";

export const get = async () => {
	const allPostFiles = import.meta.glob("../blog/*.md");
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts: Post[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);

			return { meta: metadata, path: postPath };
		})
	);

	console.log(allPosts[0]);
	const posts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return {
		body: posts.map((post) => {
			// gotta do this after sorting or it gets confused.

			const parsedDate = new Date(post.meta.date);
			parsedDate.setDate(parsedDate.getDate() + 1);
			post.meta.date = parsedDate.toDateString();
			return post;
		})
	};
};
