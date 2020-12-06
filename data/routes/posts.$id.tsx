import type { DataLoader } from "@remix-run/core"
import { getPostData } from "../lib/posts"

export let loader: DataLoader = async ({ params }) => {
  return getPostData(params.id)
}
