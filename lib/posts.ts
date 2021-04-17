import matter from "gray-matter"
import { compileMarkdown } from "./md.server"
import type { Post, PostTuple } from "./types"
import { queryPost, queryAllPosts } from "./fauna.server"

export async function getPost(id: string): Promise<Post | null> {
  const post = await queryPost(id)
  if (post === null) {
    return null
  }
  const { fileContents, ...meta } = post

  const { data: frontmatter, content } = matter(fileContents || "")

  const code = await compileMarkdown(content)
  return { ...meta, ...frontmatter, code: code as string }
}

export function listPosts(): Promise<PostTuple[]> {
  return queryAllPosts()
}
