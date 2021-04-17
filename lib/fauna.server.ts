import faunadb, { query as q } from "faunadb"
import type { Post, PostTuple } from "./types"

export async function queryPost(id: string): Promise<Post | null> {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_ADMIN_KEY as string,
  })
  try {
    const { data } = (await client.query(
      q.Get(q.Match(q.Index("posts_by_identifier"), id))
    )) as { data: Post }
    return data
  } catch {
    return null
  }
}

export async function queryAllPosts(): Promise<PostTuple[]> {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_ADMIN_KEY as string,
  })
  const { data } = (await client.query(
    q.Paginate(q.Match(q.Index("all_posts_reversed")))
  )) as { data: [...PostTuple, unknown][] }

  return data.map((d) => {
    const [date, id, title] = d
    return [date, id, title]
  })
}
