import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
const rootDirectory = path.join(process.cwd(), "markdown/");

export function getSortedPostsData(subfolder) {
	const postsDirectory = rootDirectory + subfolder;
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");

		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data,
		};
	});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getAllPostIds(subfolder) {
	const postsDirectory = rootDirectory + subfolder;

	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

export async function getPostData(id, subfolder) {
	const postsDirectory = rootDirectory + subfolder;

	const fullPath = path.join(postsDirectory, `${id}.md`);

	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();
	const lazyHtml = contentHtml.replace("<img", "<img loading='lazy'");

	return {
		id,
		lazyHtml,
		...matterResult.data,
	};
}

export function getLatestPostData(subfolder) {
	const allPostsData = getSortedPostsData(subfolder);
	return allPostsData[0];
}
