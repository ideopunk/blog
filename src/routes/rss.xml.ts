const siteURL = "https://conorbarnes.com";
const siteTitle = "Conor Barnes";
const siteDescription = "Stories and Portfolio";

export const get = async () => {
	const posts: (Post["meta"] & { slug: string })[] = await Promise.all(
		Object.entries(import.meta.glob("./blog/*.md")).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.slice(2, -3);
			return { ...metadata, slug };
		})
	).then((posts) => {
		return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	});

	const body = render(posts);
	const headers = {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml"
	};

	return {
		body,
		headers
	};
};

const render = (
	posts: (Post["meta"] & {
		slug: string;
	})[]
) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<language>en</language>
<lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>

<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteURL}/${post.slug}</guid>
<title>${post.title}</title>
<link>${siteURL}/${post.slug}</link>
<description>${post.preview}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
	)
	.join("")}
</channel>
</rss>
`;
