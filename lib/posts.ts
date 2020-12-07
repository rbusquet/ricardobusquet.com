import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"

export interface Post {
  id: string
  date: string
  title: string
  contentHtml?: string
  category: string
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
    return sorted.filter((a) => a.category === category)
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

export async function getPostData(id?: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(require("remark-gfm"))
    .use(require("remark-toc"))
    .use(require("remark-slug"))
    .use(require("remark-prism"), {
      transformInlineCode: true,
      plugins: ["diff-highlight"],
    })
    .use(require("remark-html"))
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as Post
}
