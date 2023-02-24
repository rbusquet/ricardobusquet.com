import { defineConfig } from "astro/config";
import slug from "rehype-slug";
import toc from "remark-toc";
import gfm from "remark-gfm";
import emoji from "remark-emoji";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [[emoji, { accessible: true }], toc, gfm],
    rehypePlugins: [slug],
    shikiConfig: {
      theme: "light-plus",
    },
  },
});
