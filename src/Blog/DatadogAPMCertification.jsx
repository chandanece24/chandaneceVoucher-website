// src/pages/DatadogAPMCertification.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaQuestionCircle,
  FaShieldAlt,
  FaClock,
  FaWhatsapp,
  FaTelegram,
  FaGlobe,
} from "react-icons/fa";

const DatadogAPMCertification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-white text-slate-700">
      {/* Hero Section */}
      <section className="border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-sky-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-sky-600">Datadog APM Certification</span>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              Datadog Certification Guide
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Datadog APM Certification: Complete Exam Guide, Cost, Exam Format & Preparation
          </h1>

          {/* Meta Description */}
          <p className="text-lg text-slate-600 leading-relaxed">
            Learn everything about Datadog APM Certification, including exam format, cost, eligibility, topics, preparation strategy, learning resources, career benefits, and registration process.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FaLightbulb className="text-amber-500" />
            Table of Contents
          </h2>
          <nav className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              { id: "what-is-cert", label: "What Is Datadog APM Certification?" },
              { id: "what-is-apm", label: "What Is Datadog APM?" },
              { id: "cert-vs-cert", label: "APM Certification vs Datadog Certification" },
              { id: "exam-details", label: "Datadog APM Certification Exam Details" },
              { id: "prerequisites", label: "Is There Any Prerequisite?" },
              { id: "who-should-take", label: "Who Should Take the Certification?" },
              { id: "topics", label: "What Topics Are Covered?" },
              { id: "distributed-tracing", label: "Distributed Tracing Explained" },
              { id: "cost", label: "Datadog APM Certification Cost" },
              { id: "validity", label: "How Long Is Certification Valid?" },
              { id: "questions", label: "How Many Questions Are on the Exam?" },
              { id: "passing-score", label: "What Is the Passing Score?" },
              { id: "how-to-prepare", label: "How to Prepare for the Certification" },
              { id: "study-resources", label: "Best Study Resources" },
              { id: "registration", label: "Exam Registration" },
              { id: "online-exam", label: "Can You Take the Exam Online?" },
              { id: "languages", label: "What Languages Is the Exam Available In?" },
              { id: "career-benefits", label: "Career Benefits" },
              { id: "worth-it", label: "Is Datadog APM Certification Worth It?" },
              { id: "vs-other-certs", label: "vs Other Cloud Certifications" },
              { id: "mistakes", label: "Common Preparation Mistakes" },
              { id: "checklist", label: "Preparation Checklist" },
              { id: "voucher", label: "Looking for an Exam Voucher?" },
              { id: "faq", label: "Frequently Asked Questions" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors py-1"
              >
                <span className="w-1 h-1 rounded-full bg-sky-500" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">

          {/* Intro Paragraph */}
          <section className="scroll-mt-24">
            <div className="p-6 rounded-xl bg-sky-50 border border-sky-200">
              <p className="leading-relaxed text-sm">
                If you work in <strong className="text-slate-900">DevOps, cloud engineering, software development, Site Reliability Engineering (SRE), or observability</strong>, earning a <strong className="text-slate-900">Datadog APM Certification</strong> can help you demonstrate practical knowledge of application performance monitoring and distributed tracing.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                The official Datadog credential is called <strong className="text-slate-900">APM and Distributed Tracing Fundamentals</strong>. It validates foundational knowledge of Datadog APM, application instrumentation, discovering application insights, visualizing performance data, and troubleshooting applications with Datadog APM.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                In this complete guide, we will explain everything you need to know about the Datadog APM Certification, including the exam format, cost, eligibility, topics, preparation strategy, learning resources, career benefits, and registration process.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section id="what-is-cert" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is Datadog APM Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The <strong className="text-slate-900">Datadog APM and Distributed Tracing Fundamentals Certification</strong> is a foundational certification from Datadog designed to validate your knowledge of Application Performance Monitoring (APM) and distributed tracing.
              </p>
              <p className="text-slate-900 font-medium">According to Datadog, the certification covers:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "APM fundamentals",
                  "Application instrumentation with Datadog",
                  "Discovering insights using Datadog APM",
                  "Visualizing application performance",
                  "Troubleshooting applications using APM",
                  "Distributed tracing concepts",
                  "Datadog Agent and APM-related functionality",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Datadog describes the exam as an introductory APM certification designed to test foundational knowledge of the APM product.
              </p>
              <p>
                This certification is particularly relevant for professionals who work with modern cloud-native applications, microservices, distributed systems, and observability platforms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="what-is-apm" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is Datadog APM?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">Datadog Application Performance Monitoring (APM)</strong> provides visibility into application performance and distributed systems.
              </p>
              <p>
                APM helps engineers understand what happens when a request travels through an application. Instead of simply knowing that an application is slow, engineers can investigate where the time is being spent and identify potential bottlenecks.
              </p>
              <p className="text-slate-900 font-medium">Datadog APM provides capabilities such as:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Distributed tracing",
                  "Service dependency visualization",
                  "Application performance monitoring",
                  "Trace analysis",
                  "Error investigation",
                  "Performance troubleshooting",
                  "Correlation between traces, logs, metrics, and other telemetry",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                For modern microservices environments, this visibility can be particularly useful because a single user request may pass through multiple services, databases, APIs, and infrastructure components.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="cert-vs-cert" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification vs. Datadog Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>One common search-engine question is whether Datadog APM Certification and Datadog Certification are the same thing.</p>
              <p>Not exactly.</p>
              <p>Datadog offers multiple certification credentials. The APM-focused credential is officially named:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900 text-sm">Datadog Certified: APM and Distributed Tracing Fundamentals</p>
              </div>
              <p>
                The broader Datadog certification portfolio also includes certifications such as Datadog Fundamentals and Log Management Fundamentals, along with additional product-focused certifications listed by Datadog.
              </p>
              <p className="text-slate-900 font-medium">Therefore, when searching for:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Datadog APM certification",
                  "Datadog APM exam",
                  "Datadog distributed tracing certification",
                  "Datadog APM certification exam",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>you are generally referring to the APM and Distributed Tracing Fundamentals certification.</p>
            </div>
          </section>

          {/* Section 4: Exam Details */}
          <section id="exam-details" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification Exam Details
            </h2>
            <p className="leading-relaxed mb-6">
              Here are the key exam details currently published by Datadog:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Exam Feature</th>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Official Certification", detail: "APM and Distributed Tracing Fundamentals" },
                    { feature: "Certification Level", detail: "Foundational" },
                    { feature: "Exam Type", detail: "Multiple choice" },
                    { feature: "Number of Questions", detail: "90" },
                    { feature: "Exam Fee", detail: "US $100" },
                    { feature: "Delivery", detail: "Online proctored or onsite proctored" },
                    { feature: "Certification Validity", detail: "3 years" },
                    { feature: "Formal Prerequisites", detail: "None" },
                    { feature: "Passing Score", detail: "Not publicly disclosed" },
                    { feature: "Exam Vendor", detail: "Kryterion / Webassessor" },
                    { feature: "Credential", detail: "Verified Credly badge" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900 w-1/2">{row.feature}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-6">
              Datadog currently states that each certification exam contains <strong className="text-slate-900">90 multiple-choice questions</strong> and costs <strong className="text-slate-900">US $100</strong>. Certifications are valid for <strong className="text-slate-900">three years</strong> from the certification date.
            </p>
          </section>

          {/* Section 5 */}
          <section id="prerequisites" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Is There Any Prerequisite for Datadog APM Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                There are <strong className="text-slate-900">no formal prerequisites</strong> for taking a Datadog certification exam.
              </p>
              <p>
                However, Datadog recommends having practical experience with the platform, and the recommended experience can vary depending on the specific certification.
              </p>
              <p>
                For candidates preparing for the APM certification, practical exposure to Datadog APM, traces, services, instrumentation, and application troubleshooting can make preparation significantly easier.
              </p>
              <p>
                If you are completely new to Datadog, it is a good idea to start with Datadog's Learning Center before attempting the certification exam.
              </p>
            </div>
          </section>

          {/* Section 6: Who Should Take */}
          <section id="who-should-take" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Who Should Take the Datadog APM Certification?
            </h2>
            <p className="leading-relaxed mb-6">
              The Datadog APM certification can be useful for professionals working in areas such as:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "1. DevOps Engineers", desc: "DevOps engineers can use Datadog APM knowledge to monitor applications, investigate performance issues, and improve observability across development and production environments." },
                { title: "2. Site Reliability Engineers", desc: "SREs frequently work with application reliability, latency, errors, service dependencies, monitoring, and incident response. APM and distributed tracing knowledge can therefore be highly relevant to SRE responsibilities." },
                { title: "3. Cloud Engineers", desc: "Cloud engineers working with AWS, Microsoft Azure, Google Cloud, containers, Kubernetes, and microservices can benefit from application-level observability skills." },
                { title: "4. Software Developers", desc: "Developers can use APM to understand application performance and identify slow requests, errors, dependencies, and bottlenecks." },
                { title: "5. Platform Engineers", desc: "Platform teams responsible for observability and developer platforms can benefit from understanding Datadog APM and distributed tracing." },
                { title: "6. System and Infrastructure Engineers", desc: "Infrastructure professionals increasingly need application-level visibility in addition to traditional server and network monitoring." },
                { title: "7. Observability Engineers", desc: "For professionals specializing in observability, Datadog APM is directly relevant to monitoring modern distributed applications." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Topics */}
          <section id="topics" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Topics Are Covered in the Datadog APM Certification?
            </h2>
            <p className="leading-relaxed mb-8">
              The official Datadog certification overview identifies several major areas covered by the APM exam.
            </p>

            <div className="space-y-6">
              {/* Topic 1 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">APM Fundamentals</h3>
                <p className="leading-relaxed text-sm mb-4">
                  You should understand the basic concepts behind Application Performance Monitoring. Important concepts include:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Applications",
                    "Services",
                    "Traces",
                    "Spans",
                    "Resources",
                    "Service dependencies",
                    "Application performance",
                    "Errors",
                    "Latency",
                    "Distributed systems",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Understanding these concepts is important before moving into advanced troubleshooting.
                </p>
              </div>

              {/* Topic 2 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Application Instrumentation</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Another important area is <strong className="text-slate-900">instrumenting applications with Datadog</strong>. Instrumentation allows applications to generate telemetry that Datadog APM can analyze.
                </p>
                <p className="text-slate-900 font-medium text-sm mb-2">Candidates should understand the basic concepts behind:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Datadog Agent",
                    "APM libraries",
                    "Automatic instrumentation",
                    "Manual instrumentation",
                    "Traces",
                    "Spans",
                    "Service metadata",
                    "Tags",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Datadog's current documentation highlights <strong className="text-slate-900">Single Step Instrumentation</strong> as a straightforward way to get started with APM, while manual or custom instrumentation may be useful for certain environments.
                </p>
              </div>

              {/* Topic 3 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Discovering Insights with Datadog APM</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The exam also focuses on using APM data to understand application behavior. You should be comfortable with concepts such as:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Trace analysis",
                    "Service performance",
                    "Error investigation",
                    "Latency analysis",
                    "Service dependencies",
                    "Trace Explorer",
                    "Application performance trends",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Datadog APM allows engineers to follow requests through distributed systems and investigate where performance problems occur.
                </p>
              </div>

              {/* Topic 4 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Visualizing Application Performance</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Visualization is another important part of Datadog APM. Candidates should understand how observability data can be presented and analyzed through Datadog's interface. This includes understanding:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Service views",
                    "Trace views",
                    "Service maps",
                    "Performance metrics",
                    "Error information",
                    "Dashboards",
                    "Application dependencies",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topic 5 */}
              <div className="p-6 rounded-lg bg-sky-50 border border-sky-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Troubleshooting Applications</h3>
                <p className="leading-relaxed text-sm mb-4">
                  A major benefit of APM is the ability to investigate application problems. You should understand how to approach issues involving:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "High latency",
                    "Application errors",
                    "Slow requests",
                    "Service dependencies",
                    "Database performance",
                    "Failed requests",
                    "Distributed transactions",
                    "Performance bottlenecks",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Datadog explains that APM can help identify bottlenecks, troubleshoot issues, and optimize services through distributed tracing and correlated telemetry.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Distributed Tracing */}
          <section id="distributed-tracing" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Distributed Tracing Explained
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">Distributed tracing</strong> is one of the most important concepts to understand for the certification.
              </p>
              <p>Consider an e-commerce application:</p>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center text-sm font-mono text-slate-900">
                User → Web Application → API → Authentication Service → Product Service → Database
              </div>
              <p>A single request may travel through several components.</p>
              <p>Traditional monitoring might tell you that the overall request took 5 seconds.</p>
              <p>Distributed tracing can help you investigate where those 5 seconds were spent.</p>
              <p className="text-slate-900 font-medium">For example:</p>
              <ul className="space-y-2">
                {[
                  "Web application: 200 ms",
                  "API gateway: 150 ms",
                  "Authentication service: 300 ms",
                  "Product service: 3,900 ms",
                  "Database: 450 ms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The trace immediately points engineers toward the slow component.</p>
              <p>
                This is why distributed tracing is particularly valuable in microservices and cloud-native environments.
              </p>
            </div>
          </section>

          {/* Section 9: Cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification Cost
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-900 font-medium">The current Datadog certification exam fee is:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900 text-lg">US $100</p>
              </div>
              <p>
                Datadog states that each retake requires a separate payment and is not included in the original exam fee.
              </p>
              <p>
                Because certification pricing and policies can change, candidates should verify the current fee before registration.
              </p>
            </div>
          </section>

          {/* Section 10: Validity */}
          <section id="validity" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How Long Is Datadog APM Certification Valid?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The Datadog certification is currently valid for <strong className="text-slate-900">three years</strong> from the certification date.
              </p>
              <p>
                After the certification expires, Datadog states that candidates can renew by retaking the exam.
              </p>
            </div>
          </section>

          {/* Section 11: Questions */}
          <section id="questions" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How Many Questions Are on the Datadog APM Exam?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-900 font-medium">The Datadog certification exam contains:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900 text-lg">90 multiple-choice questions</p>
              </div>
              <p>
                The APM and Distributed Tracing Fundamentals certification follows the same 90-question format listed by Datadog for its certification exams.
              </p>
            </div>
          </section>

          {/* Section 12: Passing Score */}
          <section id="passing-score" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is the Datadog APM Certification Passing Score?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Datadog does <strong className="text-slate-900">not publicly disclose the passing score</strong> for its certification exams.
              </p>
              <p>The official certification FAQ states that the passing mark is determined by the percentage of correct answers.</p>
              <p>
                Because the official passing score is not published, be cautious about websites claiming a specific guaranteed passing percentage unless that information comes directly from Datadog.
              </p>
            </div>
          </section>

          {/* Section 13: How to Prepare */}
          <section id="how-to-prepare" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Prepare for the Datadog APM Certification
            </h2>
            <p className="leading-relaxed mb-6">
              A structured preparation plan can make your study more efficient.
            </p>

            <div className="space-y-4">
              {[
                { step: "Step 1", title: "Learn Datadog Fundamentals", desc: "If you are new to Datadog, first become familiar with Datadog navigation, metrics, tags, monitors, dashboards, Datadog Agent, and integrations. This creates a strong foundation for APM." },
                { step: "Step 2", title: "Learn APM Fundamentals", desc: "Study APM concepts, traces, spans, services, resources, distributed tracing, service dependencies, and APM metrics." },
                { step: "Step 3", title: "Practice Application Instrumentation", desc: "Learn how applications send telemetry to Datadog. Understand Datadog Agent, APM libraries, automatic instrumentation, manual instrumentation, service configuration, and environment configuration." },
                { step: "Step 4", title: "Practice Trace Analysis", desc: "Do not only read documentation. Use a real or test application and practice finding traces, filtering traces, identifying slow requests, finding errors, investigating services, and following distributed requests." },
                { step: "Step 5", title: "Learn Troubleshooting Workflows", desc: "Practice answering questions such as: Why is this service slow? Which dependency is causing latency? Where is the error occurring? Which service is affected? What happened during a performance degradation? This type of practical thinking is valuable for APM work." },
                { step: "Step 6", title: "Complete the Official Learning Path", desc: "Datadog provides a dedicated APM & Distributed Tracing Fundamentals Certification Learning Path through the Datadog Learning Center. The official learning path contains courses specifically designed to help candidates prepare for the certification." },
                { step: "Step 7", title: "Take the Official Practice Exam", desc: "Datadog provides an official practice exam with 25 questions. The practice exam is available through the Learning Center and is designed to help candidates evaluate their knowledge before attempting the actual certification." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 14: Study Resources */}
          <section id="study-resources" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Best Datadog APM Certification Study Resources
            </h2>
            <p className="leading-relaxed mb-6">
              For the most reliable preparation, prioritize official Datadog resources.
            </p>

            <div className="space-y-4">
              {[
                { title: "Datadog Certification Page", desc: "The official certification page provides current information about available certifications, exam delivery, pricing, validity, registration, and FAQs." },
                { title: "Datadog Learning Center", desc: "The Learning Center provides certification learning paths and APM training resources." },
                { title: "Datadog APM Documentation", desc: "Datadog's official documentation provides detailed technical information about APM, tracing, instrumentation, and troubleshooting." },
                { title: "APM Practice Exam", desc: "The official 25-question practice exam is useful for evaluating your readiness before scheduling the certification." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed mt-6">
              Using official resources is generally better than relying exclusively on third-party dumps or outdated exam questions.
            </p>
          </section>

          {/* Section 15: Registration */}
          <section id="registration" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification Exam Registration
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Datadog currently uses <strong className="text-slate-900">Kryterion's Webassessor platform</strong> for certification exam registration.
              </p>
              <p className="text-slate-900 font-medium">The general process is:</p>
              <ol className="space-y-2">
                {[
                  "Visit the official Datadog certification page.",
                  "Select the APM and Distributed Tracing Fundamentals certification.",
                  "Register through Webassessor.",
                  "Select your preferred exam delivery method.",
                  "Schedule your exam.",
                  "Complete the required system checks if taking the exam online.",
                  "Take the proctored examination.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <p>Datadog currently supports both <strong className="text-slate-900">online proctored exams</strong> and <strong className="text-slate-900">onsite proctored exams</strong>.</p>
            </div>
          </section>

          {/* Section 16: Online Exam */}
          <section id="online-exam" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Can You Take the Datadog APM Exam Online?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Yes.</p>
              <p>
                Datadog currently offers online proctored certification exams with live monitoring through a webcam.
              </p>
              <p>Candidates can also take certification exams at supported testing centers.</p>
              <p>
                Before scheduling an online exam, candidates should review the current technical requirements provided by the certification testing provider.
              </p>
            </div>
          </section>

          {/* Section 17: Languages */}
          <section id="languages" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Languages Is the Datadog APM Exam Available In?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The current Datadog certification information lists the <strong className="text-slate-900">APM & Distributed Tracing Fundamentals</strong> exam in:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["English", "Japanese", "Korean", "Brazilian Portuguese"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Always check the official Datadog certification page before registration because exam availability and languages can change.
              </p>
            </div>
          </section>

          {/* Section 18: Career Benefits */}
          <section id="career-benefits" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification Career Benefits
            </h2>
            <p className="leading-relaxed mb-6">Why should you consider becoming Datadog certified?</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Demonstrate Observability Skills", desc: "Certification provides a way to demonstrate foundational knowledge of Datadog and application observability." },
                { title: "Strengthen Your DevOps Profile", desc: "Datadog skills can complement experience with AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, Linux, CI/CD, SRE, and DevOps." },
                { title: "Improve Your Professional Credibility", desc: "A verified certification badge can be shared with employers, colleagues, and professional networks. After passing, Datadog states that candidates receive a verified Credly badge that can be shared across networks." },
                { title: "Support Career Growth", desc: "Datadog certification can complement roles such as DevOps Engineer, SRE, Cloud Engineer, Platform Engineer, Observability Engineer, Application Support Engineer, Cloud Operations Engineer, and Software Engineer." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed mt-6">
              Certification alone does not guarantee employment, but it can strengthen a broader portfolio of practical experience and technical skills.
            </p>
          </section>

          {/* Section 19: Worth It */}
          <section id="worth-it" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Is Datadog APM Certification Worth It?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                For professionals who actively work with Datadog or plan to move into observability-focused roles, the certification can be worthwhile.
              </p>
              <p className="text-slate-900 font-medium">It is particularly relevant if your career involves:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Cloud applications",
                  "Microservices",
                  "Distributed systems",
                  "DevOps",
                  "SRE",
                  "Application monitoring",
                  "Performance engineering",
                  "Incident troubleshooting",
                  "Observability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>However, practical experience remains important.</p>
              <p className="text-slate-900 font-medium">The best combination is:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="text-sm font-semibold text-slate-900">Datadog Certification + Hands-On APM Experience + Cloud/DevOps Skills</p>
              </div>
              <p>This combination can provide much stronger career value than certification alone.</p>
            </div>
          </section>

          {/* Section 20: vs Other Certs */}
          <section id="vs-other-certs" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification vs Other Cloud Certifications
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Datadog APM certification serves a different purpose from cloud-provider certifications.</p>
              <p className="text-slate-900 font-medium">For example:</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Certification Type</th>
                      <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Primary Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "AWS Certification", focus: "Amazon Web Services" },
                      { type: "Microsoft Azure Certification", focus: "Microsoft Azure" },
                      { type: "Google Cloud Certification", focus: "Google Cloud" },
                      { type: "Kubernetes Certification", focus: "Kubernetes administration/development" },
                      { type: "Datadog APM Certification", focus: "Application performance monitoring and distributed tracing" },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900">{row.type}</td>
                        <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>A cloud engineer may benefit from combining these skills.</p>
              <p className="text-slate-900 font-medium">For example:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="text-sm font-semibold text-slate-900">AWS + Kubernetes + Datadog APM + Terraform</p>
              </div>
              <p>can provide a strong foundation for modern cloud and DevOps environments.</p>
            </div>
          </section>

          {/* Section 21: Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Common Mistakes When Preparing for the Datadog APM Exam
            </h2>
            <div className="space-y-4">
              {[
                { title: "Mistake 1: Only Memorizing Definitions", desc: "APM is practical. Understanding how traces and services behave is more useful than memorizing terminology." },
                { title: "Mistake 2: Ignoring Distributed Tracing", desc: "Distributed tracing is central to the APM certification, so make sure you understand traces, spans, services, dependencies, and request flows." },
                { title: "Mistake 3: Skipping Hands-On Practice", desc: "Try to work with Datadog APM instead of relying exclusively on videos and articles." },
                { title: "Mistake 4: Using Outdated Exam Information", desc: "Datadog's certification program has evolved over time. Always verify exam price, exam format, exam languages, certification validity, registration platform, and exam policies using the official Datadog certification page." },
                { title: "Mistake 5: Depending on Exam Dumps", desc: "Avoid unauthorized exam dumps and leaked questions. Instead, use the official exam guide, Learning Center, documentation, and practice exam." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-red-50 border border-red-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 22: Checklist */}
          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Datadog APM Certification Preparation Checklist
            </h2>
            <p className="leading-relaxed mb-6">
              Before scheduling your exam, make sure you can confidently explain:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "What is Datadog APM?",
                "What is distributed tracing?",
                "What are traces?",
                "What are spans?",
                "What is a service?",
                "What is application instrumentation?",
                "How does Datadog collect APM data?",
                "How do you analyze traces?",
                "How do you identify application bottlenecks?",
                "How do you investigate errors?",
                "How do you understand service dependencies?",
                "How do you troubleshoot application performance?",
                "How do APM metrics and traces relate?",
                "How do you navigate Datadog APM?",
                "Have you completed the official practice exam?",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-sm">
                  <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="leading-relaxed mt-6">
              If you can confidently work through these areas, you will have a much stronger foundation for the certification.
            </p>
          </section>

          {/* Final Thoughts */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Final Thoughts
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The <strong className="text-slate-900">Datadog APM and Distributed Tracing Fundamentals Certification</strong> is a valuable foundational credential for professionals interested in application monitoring, observability, DevOps, cloud engineering, and SRE.
              </p>
              <p>
                The certification validates knowledge of important APM concepts, application instrumentation, performance analysis, visualization, and application troubleshooting.
              </p>
              <p>
                The current exam consists of <strong className="text-slate-900">90 multiple-choice questions</strong>, costs <strong className="text-slate-900">US $100</strong>, and the certification is valid for <strong className="text-slate-900">three years</strong>. Datadog also provides an official learning path, exam guide, and 25-question practice exam to help candidates prepare.
              </p>
              <p>
                If your goal is to build a career around <strong className="text-slate-900">DevOps, cloud, SRE, application monitoring, or observability</strong>, adding Datadog APM skills to your technical portfolio can be a useful step.
              </p>
            </div>
          </section>

          {/* Section 23: Voucher */}
          <section id="voucher" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Looking for a Datadog Certification Exam Voucher?
            </h2>
            <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-slate-50 border border-sky-200">
              <p className="leading-relaxed text-sm mb-4">
                If you are planning to take the <strong className="text-slate-900">Datadog APM and Distributed Tracing Fundamentals Certification Exam</strong>, Techcyfy can help you explore available exam voucher options.
              </p>
              <p className="leading-relaxed text-sm mb-6">
                Contact Techcyfy for current Datadog exam voucher availability and pricing.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex-shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">WhatsApp</p>
                    <a href="https://wa.me/8801982188224" className="text-sm font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                      +880 1982-188224
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex-shrink-0">
                    <FaGlobe />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Website</p>
                    <Link to="/" className="text-sm font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                      Techcyfy
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                    <FaTelegram />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Telegram</p>
                    <span className="text-sm font-semibold text-slate-900">
                      Techcyfy
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-amber-50 border-l-4 border-amber-500">
                <p className="text-xs text-amber-900">
                  <strong>Important:</strong> Exam pricing, availability, policies, languages, and registration procedures can change. Always verify the latest information with Datadog before purchasing or scheduling an exam.
                </p>
              </div>
            </div>
          </section>

          {/* Section 24: FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Frequently Asked Questions About Datadog APM Certification
            </h2>
            <div className="space-y-3">
              {[
                { q: "What is Datadog APM Certification?", a: "Datadog APM Certification officially refers to the APM and Distributed Tracing Fundamentals certification. It validates foundational knowledge of Datadog APM, application instrumentation, performance analysis, visualization, and troubleshooting." },
                { q: "How much does Datadog APM Certification cost?", a: "The current Datadog certification exam fee is US $100. Retakes require a separate payment." },
                { q: "How many questions are on the Datadog APM exam?", a: "The certification exam contains 90 multiple-choice questions." },
                { q: "Is Datadog APM certification difficult?", a: "The difficulty depends on your previous experience with Datadog, APM, observability, and distributed tracing. Hands-on experience and structured preparation can make the exam easier." },
                { q: "Does Datadog APM certification expire?", a: "Yes. Datadog certifications are currently valid for three years." },
                { q: "Are there prerequisites for Datadog APM certification?", a: "There are no formal prerequisites. However, practical experience with Datadog can be beneficial." },
                { q: "Can I take the Datadog APM exam online?", a: "Yes. Datadog currently supports online proctored exams as well as onsite testing-center options." },
                { q: "Is there a Datadog APM practice exam?", a: "Yes. Datadog provides an official 25-question APM & Distributed Tracing Fundamentals practice exam through its Learning Center." },
                { q: "Is Datadog APM certification worth it?", a: "It can be worthwhile for DevOps engineers, SREs, cloud engineers, developers, platform engineers, and observability professionals who use or plan to use Datadog." },
                { q: "Where can I register for Datadog APM certification?", a: "Datadog currently directs candidates to its certification registration process through Kryterion's Webassessor platform." },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group p-5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-slate-900 font-semibold list-none">
                    <span className="flex items-center gap-3 text-sm">
                      <FaQuestionCircle className="text-sky-500 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <span className="text-sky-500 text-xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed pl-7 text-slate-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Ready to Start Your Datadog APM Certification Journey?
            </h2>
            <p className="mb-6">
              Explore <strong className="text-slate-900">Techcyfy</strong> for more certification guides, observability resources, and technology career guides.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
              >
                Contact Techcyfy Today
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </section>

          {/* Related Topics */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Datadog Certification",
                "Datadog APM Exam",
                "Datadog Distributed Tracing",
                "Application Performance Monitoring",
                "DevOps Certification",
                "Observability Certification",
                "SRE Certification",
                "Cloud Monitoring",
                "Datadog Agent",
                "APM Tracing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Trust Badge */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaShieldAlt className="text-emerald-500" />
              <span>Techcyfy Accredited</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaClock className="text-sky-500" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaCheckCircle className="text-emerald-500" />
              <span>Expert Reviewed</span>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default DatadogAPMCertification;