/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/build",
  mdx: async (filename) => {
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
