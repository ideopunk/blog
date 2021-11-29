type Post = { id: string; title: string; preview: string; date: string };

const generateRssItem = (post: Post) => `
  <item>
    <guid>https://ideopunk.com/blog/${post.id}</guid>
    <title>${post.title}</title>
    <link>https://ideopunk.com/blog/${post.id}</link>
    <description>${post.preview}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>`;

const generateRss = (posts: Post[]) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Conor Barnes</title>
      <link>https://ideopunk.com/blog</link>
      <description>Conor Barnes's home page and blog.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://ideopunk.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;

export default generateRss;
