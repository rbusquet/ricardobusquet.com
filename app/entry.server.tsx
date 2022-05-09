import etag from "etag";
import { renderToString } from "react-dom/server";
import type { EntryContext, HandleDataRequestFunction } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

export default function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  headers.set("Content-Type", "text/html");
  headers.set("ETag", etag(markup));

  // check if the `If-None-Match` header matches the ETag
  if (request.headers.get("If-None-Match") === headers.get("ETag")) {
    // and send an empty Response with status 304 and the headers.
    return new Response("", { status: 304, headers });
  }

  return new Response("<!DOCTYPE html>" + markup, { status, headers });
}

export let handleDataRequest: HandleDataRequestFunction = async (
  response: Response,
  { request }
) => {
  let body = await response.text();

  if (request.method.toLowerCase() === "get") {
    response.headers.set("etag", etag(body));
    // As with document requests, check the `If-None-Match` header
    // and compare it with the Etag, if they match, send the empty 304 Response
    if (request.headers.get("If-None-Match") === response.headers.get("ETag")) {
      return new Response("", { status: 304, headers: response.headers });
    }
  }

  return response;
};
