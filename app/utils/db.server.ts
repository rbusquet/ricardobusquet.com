import { PrismaClient, UnwrapPromise } from ".prisma/client";

declare global {
  // This prevents us from making multiple connections to the db when the
  // require cache is cleared.
  // eslint-disable-next-line
  var prismaRead: ReturnType<typeof getClient> | undefined;
  // eslint-disable-next-line
  var prismaWrite: ReturnType<typeof getClient> | undefined;
}

const prismaRead = global.prismaRead ?? (global.prismaRead = getClient("read"));
const prismaWrite =
  global.prismaWrite ?? (global.prismaWrite = getClient("write"));

function getClient(type: "write" | "read"): PrismaClient {
  console.log(`Setting up prisma client for ${type}`);
  // NOTE: during development if you change anything in this function, remember
  // that this only runs once per server restart and won't automatically be
  // re-run per request like everything else is.
  const client = new PrismaClient({
    log: [
      { level: "query", emit: "event" },
      { level: "error", emit: "stdout" },
      { level: "info", emit: "stdout" },
      { level: "warn", emit: "stdout" },
    ],
  });

  // make the connection eagerly so the first request doesn't have to wait
  void client.$connect();
  return client;
}

export async function getPosts() {
  const allPosts = await prismaRead.post.findMany();

  return allPosts;
}

export async function getPost(slug: string) {
  const post = await prismaRead.post.findUnique({ where: { slug } });

  return post;
}

type NewUser = {
  name: string;
  email: string;
  title: string;
  bio: string;
};

export type Post = UnwrapPromise<ReturnType<typeof getPost>>;
