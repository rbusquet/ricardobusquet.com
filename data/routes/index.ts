import type { DataLoader } from "@remix-run/core"
import { getSortedPostsData } from "../lib/posts"

export let loader: DataLoader = async () => {
  return getSortedPostsData()
}
