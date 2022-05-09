import { redirect } from "@remix-run/node";

export let loader = () => {
  return redirect("/");
};
