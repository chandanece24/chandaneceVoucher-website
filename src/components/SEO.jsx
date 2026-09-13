import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  imageUrl,
  type = "website",
}) => {
  const siteName = "TECHCYFY";

  const siteUrl = "https://techcyfy.com";

  const defaultTitle =
    "IT Certification Exam Vouchers | AWS, Azure, CompTIA & More";

  const defaultDescription =
    "Get genuine and discounted IT certification exam vouchers for AWS, Microsoft Azure, Google Cloud, CompTIA, Cisco, Fortinet, Red Hat, Databricks, Salesforce and more.";

  const defaultKeywords =
    "IT certification exam vouchers, discounted exam vouchers, AWS exam voucher, Azure exam voucher, Microsoft certification voucher, Google Cloud voucher, CompTIA voucher, Cisco voucher, Fortinet voucher";

  const defaultImage =
    "https://techcyfy.com/og-image.jpg";

  // Remove trailing slash from site URL
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");

  // Make sure canonical URL is absolute
  const canonical =
    canonicalUrl ||
    cleanSiteUrl + "/";

  const fullTitle =
    title
      ? `${title} | ${siteName}`
      : defaultTitle;

  const metaDescription =
    description || defaultDescription;

  const metaKeywords =
    keywords || defaultKeywords;

  const socialImage =
    imageUrl || defaultImage;

  return (
    <Helmet>

      {/* =========================
          BASIC SEO
      ========================== */}

      <html lang="en" />

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={metaDescription}
      />

      <meta
        name="keywords"
        content={metaKeywords}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="googlebot"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonical}
      />


      {/* =========================
          OPEN GRAPH / FACEBOOK
      ========================== */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={metaDescription}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      <meta
        property="og:image"
        content={socialImage}
      />

      <meta
        property="og:image:alt"
        content={fullTitle}
      />


      {/* =========================
          TWITTER / X
      ========================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={metaDescription}
      />

      <meta
        name="twitter:image"
        content={socialImage}
      />

      <meta
        name="twitter:image:alt"
        content={fullTitle}
      />


      {/* =========================
          MOBILE / THEME
      ========================== */}

      <meta
        name="theme-color"
        content="#0f172a"
      />

    </Helmet>
  );
};

export default SEO;