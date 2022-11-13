import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import etag from "etag";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("ETag", etag(markup));

  // check if the `If-None-Match` header matches the ETag
  if (request.headers.get("If-None-Match") === responseHeaders.get("ETag")) {
    // and send an empty Response with status 304 and the headers.
    return new Response("", { status: 304, headers: responseHeaders });
  }

  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
