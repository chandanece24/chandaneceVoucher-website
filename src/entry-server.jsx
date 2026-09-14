import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

export function render(url) {
  const helmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const head = `
    ${helmet?.title?.toString() || ""}
    ${helmet?.meta?.toString() || ""}
    ${helmet?.link?.toString() || ""}
    ${helmet?.script?.toString() || ""}
  `;

  return {
    html: appHtml,
    head,
  };
}