import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import math from "remark-math"
import gfm from "remark-gfm"

import slug from "rehype-slug"
// @ts-expect-error missing type def
import highlight from "rehype-highlight"
import katex from "rehype-katex"

export interface Post {
  id: string
  date: string
  title: string
  code: string
  categories?: string[]
  coverImage: string
  credits: string
}

export interface PathParams {
  params: { id: string }
}

const postsDirectory = path.join(process.cwd(), "posts")

export function getSortedPostsData(category?: string): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: Post[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as Post
  })

  // Sort posts by date
  const sorted = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  if (category) {
    return sorted.filter((a) => a.categories?.includes(category))
  }
  return sorted
}

export function getAllPostIds(): PathParams[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

const REMARK_PLUGINS = [math, gfm]
const REHYPE_PLUGINS = [slug, highlight, katex]

export async function getPostData(id?: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { code, frontmatter } = await bundleMDX(fileContents, {
    xdmOptions(input, options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...REMARK_PLUGINS,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...REHYPE_PLUGINS,
      ]

      return options
    },
  })
  return {
    code,
    ...frontmatter,
  } as Post
}
