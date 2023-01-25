import { defineConfig } from "astro/config";
import slug from "rehype-slug";
import toc from "remark-toc";
import gfm from "remark-gfm";
import gemoji from "remark-gemoji";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [toc, gfm, gemoji],
    rehypePlugins: [slug],
    shikiConfig: {
      theme: "light-plus",
    },
  },
});
