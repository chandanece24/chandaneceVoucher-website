import React from "react";
import SEO from "../components/SEO";

const Blog = () => {
  return (
    <>
      <SEO
        title="IT Certification Exam Voucher Blog"
        description="Read expert guides, certification news, exam voucher tips, AWS, Azure, Google Cloud, CompTIA, Fortinet and Databricks certification resources."
        canonicalUrl="https://techcyfy.com/blog"
      />

      <main className="min-h-screen bg-slate-950 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto">

          <header className="text-center mb-12">

            <h1 className="text-4xl md:text-5xl font-bold">
              IT Certification Exam Voucher Blog
            </h1>

            <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
              Explore IT certification guides, exam voucher tips,
              certification news, and resources for AWS, Microsoft Azure,
              Google Cloud, CompTIA, Fortinet, Databricks and more.
            </p>

          </header>

          <section>

            <h2 className="text-2xl font-bold mb-6">
              Latest Certification Guides
            </h2>

            {/* Blog cards এখানে থাকবে */}

          </section>

        </div>
      </main>
    </>
  );
};

export default Blog;