import { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "remix";
import { getPost, Post } from "~/utils/db.server";

export let loader: LoaderFunction = async ({ params }) => {
  let post = await getPost(params.slug as string);
  return post;
};

export default function Post() {
  let post = useLoaderData<Post>();

  return post && <pre>{post.content}</pre>;
}
