/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  mdx: async () => {
    const [
      rehypeHighlight,
      rehypeSlug,
      rehypeAutoLink,
      remarkToc,
      remarkGfm,
      remarkGemoji,
    ] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
      import("rehype-slug").then((mod) => mod.default),
      import("rehype-autolink-headings").then((mod) => mod.default),
      import("remark-toc").then((mod) => mod.default),
      import("remark-gfm").then((mod) => mod.default),
      import("remark-gemoji").then((mod) => mod.default),
    ]);

    return {
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutoLink],
      remarkPlugins: [remarkToc, remarkGfm, remarkGemoji],
    };
  },
};
