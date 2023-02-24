// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const usesCollection = defineCollection({
  schema: z.object({
    description: z.string(),
    title: z.string(),
  }),
});

const postsCollection = defineCollection({
  schema: z.object({
    meta: z.object({
      title: z.string(),
      date: z.string().regex(/\d{4}-\d{2}-\d{2}/g),
      categories: z.array(z.string()).optional(),
      description: z.string(),
    }),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  uses: usesCollection,
  posts: postsCollection,
};
