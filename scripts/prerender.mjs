import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const root = process.cwd();

const templatePath = path.join(
  root,
  "dist",
  "index.html"
);

const serverPath = path.join(
  root,
  "dist-server",
  "entry-server.js"
);

const template = fs.readFileSync(
  templatePath,
  "utf-8"
);

const server = await import(
  pathToFileURL(serverPath).href
);

/*
  Static routes that should be pre-rendered.
*/
const routes = [
  "/",
  "/about",
  "/how-it-works",
  "/vouchers",
  "/reviews",
  "/services",
  "/contact",
  "/blog",

  "/blog/microsoft-azure-exam-vouchers",
  "/blog/aws-exam-vouchers",
  "/blog/databricks-exam-vouchers",
  "/blog/salesforce-exam-vouchers",
  "/blog/comptia-exam-vouchers",
  "/blog/fortinet-exam-vouchers",
  "/blog/google-cloud-exam-vouchers",
  "/blog/hashicorp-exam-vouchers",
  "/blog/ClaudeCertification-vouchers",
];

for (const route of routes) {
  console.log(`Pre-rendering: ${route}`);

  const { html, head } = server.render(route);

  let finalHtml = template;

  /*
    Replace React root with rendered HTML
  */
  finalHtml = finalHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  /*
    Add Helmet-generated SEO tags
  */
  finalHtml = finalHtml.replace(
    "</head>",
    `${head}\n</head>`
  );

  /*
    Create output directory
  */
  const outputDir =
    route === "/"
      ? path.join(root, "dist")
      : path.join(
          root,
          "dist",
          route.replace(/^\/|\/$/g, "")
        );

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  const outputFile =
    path.join(outputDir, "index.html");

  fs.writeFileSync(
    outputFile,
    finalHtml,
    "utf-8"
  );

  console.log(`Created: ${outputFile}`);
}

console.log("\n✅ Pre-rendering completed successfully.");