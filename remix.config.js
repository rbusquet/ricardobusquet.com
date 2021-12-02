const fsp = require("fs").promises;
const path = require("path");

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/build",

  routes: async defineRoutes => {
    let pages = await fsp.readdir(path.join(__dirname, "app", "routes", "posts"));

    return defineRoutes(route => {
      // create some custom routes from the pages/ dir
      for (let page of pages) {
        // skip MDX pages for now...
        if (page.endsWith(".mdx")) continue;

        let slug = page.replace(/\.[a-z]+$/, "");
        route(`/post/${slug}`, `routes/posts/${page}`);
      }
    });
  },
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
