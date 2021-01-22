// confirm these properties are correct

const generateRssItem = (post) => `
  <item>
    <guid>https://conorbarnes.com/blog/${post.id}</guid>
    <title>${post.title}</title>
    <link>https://conorbarnes.com/blog/${post.id}</link>
    <description>${post.preview}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>`;

const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Conor Barnes</title>
      <link>https://conorbarnes.com/blog</link>
      <description>Conor Barnes's home page and blog.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://conorbarnes.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;

export default generateRss;
