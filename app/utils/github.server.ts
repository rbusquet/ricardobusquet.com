import { Octokit as createOctokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";

const Octokit = createOctokit.plugin(throttling);

type ThrottleOptions = {
  method: string;
  url: string;
  request: { retryCount: number };
};
const octokit = new Octokit({
  auth: process.env.BOT_GITHUB_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.warn(
        `Request quota exhausted for request ${options.method} ${options.url}. Retrying after ${retryAfter} seconds.`
      );

      return true;
    },
    onAbuseLimit: (retryAfter: number, options: ThrottleOptions) => {
      // does not retry, only logs a warning
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  },
});

export async function getMyRepos() {
  return octokit.rest.repos
    .listForUser({
      username: "rbusquet",
      type: "owner",
    })
    .then(({ data }) => data.filter((e) => !e.fork));
}
