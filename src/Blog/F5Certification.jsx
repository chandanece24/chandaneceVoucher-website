// src/pages/F5Certification.jsx

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

const F5Certification = () => {
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
            <span className="text-sky-600">F5 Certification</span>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              F5 Certification Guide 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            F5 Certification 2026: Complete Guide to F5 BIG-IP, LTM, DNS, ASM, APM & NGINX Certifications
          </h1>

          {/* Meta Description */}
          <p className="text-lg text-slate-600 leading-relaxed">
            Learn about F5 certification 2026, including F5 BIG-IP Administrator, LTM, DNS, ASM, APM and NGINX certifications, exam costs, paths, preparation and vouchers.
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
              { id: "what-is", label: "What Is F5 Certification?" },
              { id: "why-get", label: "Why Get F5 Certified?" },
              { id: "levels", label: "F5 Certification Levels and Career Paths" },
              { id: "f5-ca-bigip", label: "F5 Certified Administrator, BIG-IP" },
              { id: "f5cab1", label: "F5CAB1: Install, Initial Configuration & Upgrade" },
              { id: "f5cab2", label: "F5CAB2: Data Plane Concepts" },
              { id: "f5cab3", label: "F5CAB3: Data Plane Configuration" },
              { id: "f5cab4", label: "F5CAB4: Control Plane Administration" },
              { id: "f5cab5", label: "F5CAB5: Support and Troubleshooting" },
              { id: "f5-101-201", label: "Important Update: F5 101 and 201 Exams" },
              { id: "ltm", label: "F5 BIG-IP LTM Certification" },
              { id: "dns", label: "F5 BIG-IP DNS Certification" },
              { id: "asm", label: "F5 BIG-IP ASM Certification" },
              { id: "apm", label: "F5 BIG-IP APM Certification" },
              { id: "security", label: "F5 Security Certification" },
              { id: "cloud", label: "F5 Cloud Certification" },
              { id: "nginx", label: "F5 NGINX Certification" },
              { id: "exam-cost", label: "F5 Certification Exam Cost" },
              { id: "exam-location", label: "Where Can You Take an F5 Certification Exam?" },
              { id: "preparation", label: "F5 Certification Exam Preparation" },
              { id: "career-opportunities", label: "F5 Certification Career Opportunities" },
              { id: "who-should-get", label: "Who Should Get F5 Certified?" },
              { id: "vs-cisco", label: "F5 Certification vs Cisco Certification" },
              { id: "vs-fortinet", label: "F5 Certification vs Fortinet Certification" },
              { id: "worth-it", label: "Is F5 Certification Worth It in 2026?" },
              { id: "for-beginners", label: "Best F5 Certification for Beginners" },
              { id: "path-network", label: "F5 Certification Path for Network Engineers" },
              { id: "path-cyber", label: "F5 Certification Path for Cybersecurity Professionals" },
              { id: "path-cloud", label: "F5 Certification Path for Cloud & DevOps" },
              { id: "voucher", label: "How to Buy an F5 Certification Exam Voucher" },
              { id: "voucher-techcyfy", label: "Get F5 Exam Vouchers from Techcyfy" },
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
                <strong className="text-slate-900">F5 certification</strong> is a valuable credential for IT professionals working in application delivery, load balancing, network security, application security, traffic management, cloud infrastructure, and enterprise networking.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                F5 certifications validate technical skills related to technologies such as <strong className="text-slate-900">F5 BIG-IP, BIG-IP LTM, BIG-IP DNS, BIG-IP ASM, BIG-IP APM, security solutions, cloud solutions, and NGINX</strong>.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                The F5 certification program has evolved significantly, and the current certification portfolio includes administrator, technology specialist, solution expert, and other professional credentials.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                If you are planning to earn an F5 certification in 2026, this guide explains the certification paths, current F5 BIG-IP exams, costs, career opportunities, preparation strategy, and how to choose the right F5 certification for your career.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section id="what-is" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is F5 Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">F5 certification</strong> is a professional certification program designed to validate knowledge and technical skills related to F5 application delivery and security technologies.
              </p>
              <p className="text-slate-900 font-medium">F5 technologies are commonly associated with:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Application delivery",
                  "Load balancing",
                  "Traffic management",
                  "Application security",
                  "Network security",
                  "Access management",
                  "DNS",
                  "High availability",
                  "Cloud solutions",
                  "NGINX",
                  "Application performance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-900 font-medium">F5 certifications can be particularly useful for:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Network Engineers",
                  "Network Administrators",
                  "System Administrators",
                  "Network Security Engineers",
                  "Application Delivery Engineers",
                  "Security Engineers",
                  "DevOps Engineers",
                  "Cloud Engineers",
                  "Infrastructure Engineers",
                  "IT Consultants",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                The current F5 certification catalog includes <strong className="text-slate-900">F5 Certified Administrator, BIG-IP; F5 Certified Administrator, NGINX; F5 Certified Technology Specialist certifications; and F5 Certified Solution Expert certifications</strong>, among others.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="why-get" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Why Get F5 Certified?
            </h2>
            <p className="leading-relaxed mb-6">F5 certification can help IT professionals demonstrate specialized knowledge in application delivery and enterprise networking.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "1. Validate F5 Skills", desc: "Certification provides a structured way to demonstrate knowledge of F5 technologies and administration." },
                { title: "2. Improve Your Professional Profile", desc: "An F5 certification can strengthen your resume, LinkedIn profile, professional portfolio, job applications, and internal promotion opportunities." },
                { title: "3. Build Application Delivery Expertise", desc: "F5 technologies are closely associated with application delivery networks, traffic management, load balancing, and application security." },
                { title: "4. Develop Network Security Skills", desc: "Several F5 technologies address application and access security, making F5 knowledge relevant to cybersecurity professionals." },
                { title: "5. Expand Career Opportunities", desc: "F5 skills can be useful for professionals pursuing careers in Network Engineering, Application Delivery, Network Security, Cloud Infrastructure, DevOps, Cybersecurity, and Infrastructure Engineering." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Levels */}
          <section id="levels" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Levels and Career Paths
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5's certification ecosystem includes multiple professional levels and technology areas.</p>
              <p className="text-slate-900 font-medium">A simplified path can look like:</p>
              <div className="space-y-2 text-sm">
                {["F5 Certified Administrator", "F5 Certified Technology Specialist", "F5 Certified Solution Expert"].map((item, index, arr) => (
                  <React.Fragment key={item}>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center font-medium text-slate-900">
                      {item}
                    </div>
                    {index < arr.length - 1 && (
                      <div className="text-center text-sky-500">↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-slate-900 font-medium mt-4">Depending on the technology and career objective, candidates can specialize in areas such as:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["BIG-IP LTM", "BIG-IP DNS", "BIG-IP ASM", "BIG-IP APM", "Security", "Cloud", "NGINX"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The current F5 certification portal lists administrator, technology specialist, and solution expert credentials.</p>
            </div>
          </section>

          {/* F5 Certified Administrator */}
          <section id="f5-ca-bigip" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certified Administrator, BIG-IP
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The <strong className="text-slate-900">F5 Certified Administrator, BIG-IP (F5-CA, BIG-IP)</strong> is one of the most important certifications for professionals working with F5 BIG-IP environments.
              </p>
              <p>The certification validates competence in day-to-day BIG-IP operations, basic deployment, management, security, and support after the system has been installed and configured.</p>
              <p>It also assesses knowledge of BIG-IP <strong className="text-slate-900">data plane and control plane administration</strong>.</p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Current F5 BIG-IP Administrator Certification Requirements</h3>
              <p className="text-sm mb-3">As of the current certification structure, candidates must pass <strong className="text-slate-900">five exams</strong> to earn the F5 Certified Administrator, BIG-IP credential.</p>
              <p className="text-sm mb-3">The five exams are:</p>
              <ol className="space-y-2 mb-4">
                {[
                  "F5CAB1 — BIG-IP Administration Install, Initial Configuration, and Upgrade",
                  "F5CAB2 — BIG-IP Administration Data Plane Concepts",
                  "F5CAB3 — BIG-IP Administration Data Plane Configuration",
                  "F5CAB4 — BIG-IP Administration Control Plane Administration",
                  "F5CAB5 — BIG-IP Administration Support and Troubleshooting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <p>The five exams can be taken <strong className="text-slate-900">in any order</strong>.</p>
            </div>
          </section>

          {/* F5CAB1 */}
          <section id="f5cab1" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5CAB1: Install, Initial Configuration, and Upgrade
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5CAB1</strong> exam focuses on the fundamental administration tasks required to install, configure, secure, and upgrade BIG-IP systems.</p>
              <p className="text-slate-900 font-medium">Key areas include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "BIG-IP installation",
                  "Initial configuration",
                  "Management connectivity",
                  "Licensing",
                  "Software images",
                  "BIG-IP modules",
                  "Security",
                  "Upgrades",
                  "Provisioning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>F5 lists this exam as a <strong className="text-slate-900">30-minute exam with 30 items</strong>, with a listed cost of <strong className="text-slate-900">US$50</strong>.</p>
            </div>
          </section>

          {/* F5CAB2 */}
          <section id="f5cab2" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5CAB2: Data Plane Concepts
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5CAB2</strong> exam focuses on BIG-IP data plane concepts.</p>
              <p>Candidates should understand how BIG-IP handles application traffic and how its data-plane technologies support application delivery.</p>
              <p>This exam is one of the five assessments required for the F5 Certified Administrator, BIG-IP credential.</p>
            </div>
          </section>

          {/* F5CAB3 */}
          <section id="f5cab3" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5CAB3: Data Plane Configuration
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5CAB3</strong> exam focuses on configuring BIG-IP data-plane functionality.</p>
              <p className="text-slate-900 font-medium">Candidates should develop practical knowledge of:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Traffic management",
                  "Virtual servers",
                  "Pools",
                  "Pool members",
                  "Profiles",
                  "Application delivery",
                  "Traffic processing",
                  "BIG-IP configuration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>This exam forms another component of the current five-exam F5 Certified Administrator pathway.</p>
            </div>
          </section>

          {/* F5CAB4 */}
          <section id="f5cab4" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5CAB4: Control Plane Administration
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5CAB4</strong> exam focuses on BIG-IP control-plane administration.</p>
              <p className="text-slate-900 font-medium">Important areas include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "High availability",
                  "Device management",
                  "Management connectivity",
                  "Logs",
                  "UCS archives",
                  "Authentication",
                  "System services",
                  "ConfigSync",
                  "Device status",
                  "Software upgrades",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>F5 lists F5CAB4 as a <strong className="text-slate-900">30-minute exam</strong>, with a listed cost of <strong className="text-slate-900">US$50 online or US$65 at a test center</strong>.</p>
            </div>
          </section>

          {/* F5CAB5 */}
          <section id="f5cab5" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5CAB5: Support and Troubleshooting
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5CAB5</strong> exam focuses on troubleshooting and operational support.</p>
              <p className="text-slate-900 font-medium">Candidates should understand how to:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Identify resource utilization",
                  "Troubleshoot network performance",
                  "Troubleshoot load balancing",
                  "Troubleshoot virtual servers",
                  "Troubleshoot pools",
                  "Analyze statistics",
                  "Interpret traffic flow",
                  "Identify common BIG-IP issues",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>F5 lists F5CAB5 as a <strong className="text-slate-900">30-minute exam with 30 items</strong>, costing <strong className="text-slate-900">US$50 online or US$65 at a test center</strong>.</p>
            </div>
          </section>

          {/* 101 and 201 Update */}
          <section id="f5-101-201" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Important Update: F5 101 and 201 Exams
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-900 font-medium">Candidates researching F5 certification will often encounter:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["101 — Application Delivery Fundamentals", "201 — TMOS Administration"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>These were historically used as the two-exam path for the F5 Certified Administrator credential.</p>
              <p>However, F5 changed the certification structure in <strong className="text-slate-900">May 2025</strong>.</p>
              <p>
                The <strong className="text-slate-900">101 Application Delivery Fundamentals exam retired on April 30, 2025</strong>, while the 201 TMOS Administration exam became restricted to candidates who already had valid eligibility. F5 introduced the five-exam structure for the refreshed F5 Certified Administrator, BIG-IP credential.
              </p>
              <p>
                Therefore, candidates starting their F5 certification journey in 2026 should focus on the <strong className="text-slate-900">current F5CAB1–F5CAB5 pathway</strong>, rather than assuming that 101 + 201 is still the normal route.
              </p>
            </div>
          </section>

          {/* LTM */}
          <section id="ltm" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 BIG-IP LTM Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">F5 BIG-IP LTM</strong> is one of the most important specialization areas for professionals working with application delivery and load balancing.
              </p>
              <p>LTM stands for <strong className="text-slate-900">Local Traffic Manager</strong>.</p>
              <p className="text-slate-900 font-medium">F5 BIG-IP LTM can be used for:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Load balancing",
                  "Traffic management",
                  "Application availability",
                  "High availability",
                  "Application performance",
                  "Health monitoring",
                  "Traffic distribution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The F5 certification program includes the <strong className="text-slate-900">F5 Certified Technology Specialist, BIG-IP LTM</strong> credential.</p>
              <p className="text-slate-900 font-medium">The current certification path includes:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["301a — BIG-IP LTM: Architect, Setup, and Deploy", "301b — BIG-IP LTM: Maintain and Troubleshoot"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>These specialist exams are relevant to professionals who want to demonstrate advanced BIG-IP LTM expertise.</p>
            </div>
          </section>

          {/* DNS */}
          <section id="dns" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 BIG-IP DNS Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5 Certified Technology Specialist, BIG-IP DNS</strong> certification focuses on F5 BIG-IP DNS technology.</p>
              <p className="text-slate-900 font-medium">It can be relevant to professionals working with:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "DNS traffic management",
                  "Global application availability",
                  "Application delivery",
                  "Traffic distribution",
                  "DNS infrastructure",
                  "High availability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The current F5 exam catalog lists <strong className="text-slate-900">302 — BIG-IP DNS Specialist</strong>.</p>
            </div>
          </section>

          {/* ASM */}
          <section id="asm" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 BIG-IP ASM Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5 Certified Technology Specialist, BIG-IP ASM</strong> certification is designed around application security capabilities.</p>
              <p>ASM is associated with protecting web applications against application-layer threats.</p>
              <p className="text-slate-900 font-medium">Relevant professionals include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Security Engineers",
                  "Application Security Engineers",
                  "Network Security Engineers",
                  "Cybersecurity Professionals",
                  "Application Delivery Engineers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The current F5 exam catalog lists <strong className="text-slate-900">303 — BIG-IP ASM Specialist</strong>.</p>
            </div>
          </section>

          {/* APM */}
          <section id="apm" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 BIG-IP APM Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>The <strong className="text-slate-900">F5 Certified Technology Specialist, BIG-IP APM</strong> certification focuses on access management technologies.</p>
              <p className="text-slate-900 font-medium">APM can be relevant to areas such as:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Authentication",
                  "Authorization",
                  "Access control",
                  "Identity integration",
                  "Application access",
                  "Secure remote access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The current F5 certification catalog lists <strong className="text-slate-900">304 — BIG-IP APM Specialist</strong>.</p>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Security Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>For cybersecurity professionals, F5 also offers a <strong className="text-slate-900">F5 Certified Solution Expert, Security</strong> path.</p>
              <p>This is designed for professionals who want to demonstrate broader security solution expertise.</p>
              <p>The current F5 certification catalog lists <strong className="text-slate-900">Security Solutions (401)</strong> among the available certification exams.</p>
            </div>
          </section>

          {/* Cloud */}
          <section id="cloud" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Cloud Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Cloud technologies have become an important part of modern application delivery.</p>
              <p>F5 provides a <strong className="text-slate-900">F5 Certified Solution Expert, Cloud</strong> certification path.</p>
              <p>The current certification catalog lists <strong className="text-slate-900">Cloud Solutions (402)</strong>.</p>
              <p className="text-slate-900 font-medium">This path can be relevant to professionals working with:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Cloud infrastructure",
                  "Application delivery",
                  "Hybrid cloud",
                  "Cloud security",
                  "Enterprise applications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* NGINX */}
          <section id="nginx" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 NGINX Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5 also provides certification options for <strong className="text-slate-900">NGINX</strong> technologies.</p>
              <p className="text-slate-900 font-medium">The current F5 certification exam catalog includes:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "NGINX Management — F5N1",
                  "NGINX Configuration: Knowledge — F5N2",
                  "NGINX Configuration: Demonstrate — F5N3",
                  "NGINX Troubleshoot — F5N4",
                  "F5 Certified Administrator, NGINX Recertification — F5CANR",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-900 font-medium">These certifications can be relevant to professionals working with:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Web servers",
                  "Reverse proxies",
                  "Application delivery",
                  "API infrastructure",
                  "DevOps",
                  "Cloud native applications",
                  "Web application architecture",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>F5 currently lists these NGINX exams as available through Pearson VUE.</p>
            </div>
          </section>

          {/* Exam Cost */}
          <section id="exam-cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Exam Cost
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5 certification exam prices vary by certification and delivery method.</p>
              <p>
                For example, the current F5 BIG-IP Administrator component exams are listed at <strong className="text-slate-900">US$50 online or US$65 at a test center</strong> for exams such as F5CAB4 and F5CAB5.
              </p>
              <p className="text-slate-900 font-medium">The F5 BIG-IP Administrator recertification exam is currently listed at:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["US$100 online", "US$130 at a test center"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>F5 lists the recertification exam as a 60-minute exam.</p>
              <p>Other specialist and solution-expert exams have different prices.</p>
              <p>Because F5 can change exam pricing, candidates should confirm the current fee before purchasing an exam voucher.</p>
            </div>
          </section>

          {/* Exam Location */}
          <section id="exam-location" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Where Can You Take an F5 Certification Exam?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5 currently uses multiple exam delivery options.</p>
              <p className="text-slate-900 font-medium">According to F5 Education Services, eligible exams are delivered through:</p>

              <div className="space-y-4 mt-4">
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">Pearson VUE</h3>
                  <p className="text-sm leading-relaxed">Candidates can take available F5 exams at Pearson VUE test centers worldwide.</p>
                </div>
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">Certiverse</h3>
                  <p className="text-sm leading-relaxed">Selected F5 exams are available through online proctored delivery using Certiverse.</p>
                </div>
              </div>

              <p>The current F5 delivery information lists the five BIG-IP Administrator exams as available through both Pearson VUE and Certiverse.</p>
              <p>This gives candidates flexibility between test-center and online exam delivery, depending on the certification and available delivery method.</p>
            </div>
          </section>

          {/* Preparation */}
          <section id="preparation" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Exam Preparation
            </h2>
            <p className="leading-relaxed mb-6">Preparing properly is essential for passing F5 certification exams.</p>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">1. Understand the Exam Blueprint</h3>
                <p className="leading-relaxed text-sm mb-4">Start by reviewing the official F5 exam blueprint.</p>
                <p className="leading-relaxed text-sm">The blueprint identifies the skills and knowledge areas candidates should understand.</p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">2. Learn BIG-IP Fundamentals</h3>
                <p className="leading-relaxed text-sm mb-4">Before moving into specialist-level certifications, develop a strong understanding of:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "BIG-IP architecture",
                    "TMOS",
                    "Virtual servers",
                    "Pools",
                    "Pool members",
                    "Profiles",
                    "Monitors",
                    "Traffic management",
                    "High availability",
                    "Networking",
                    "Troubleshooting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">3. Practice Hands-On</h3>
                <p className="leading-relaxed text-sm mb-4">F5 certification is much easier to understand when you have practical experience. Create a lab environment where possible and practice:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Creating virtual servers",
                    "Creating pools",
                    "Adding pool members",
                    "Configuring monitors",
                    "Managing traffic",
                    "Reviewing logs",
                    "Troubleshooting connectivity",
                    "Configuring high availability",
                    "Managing BIG-IP systems",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">4. Study Networking</h3>
                <p className="leading-relaxed text-sm mb-4">Strong networking fundamentals are extremely useful for F5 certification. Focus on:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "TCP/IP",
                    "HTTP/HTTPS",
                    "DNS",
                    "VLANs",
                    "Routing",
                    "NAT",
                    "Ports",
                    "SSL/TLS",
                    "Load balancing",
                    "Network troubleshooting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">5. Practice Troubleshooting</h3>
                <p className="leading-relaxed text-sm mb-4">Do not focus only on configuration. Learn how to identify why:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "A virtual server is unavailable",
                    "A pool member is down",
                    "Traffic is not reaching the application",
                    "Health monitors are failing",
                    "Network connectivity is broken",
                    "Application traffic is behaving unexpectedly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">Troubleshooting skills are particularly important for F5 administrators.</p>
              </div>
            </div>
          </section>

          {/* Career Opportunities */}
          <section id="career-opportunities" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Career Opportunities
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5 certification can support careers in several technical areas.</p>
              <p className="text-slate-900 font-medium">Potential job titles include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "F5 Network Engineer",
                  "F5 BIG-IP Administrator",
                  "Application Delivery Engineer",
                  "Load Balancing Engineer",
                  "Network Engineer",
                  "Network Security Engineer",
                  "Application Security Engineer",
                  "Infrastructure Engineer",
                  "Cloud Engineer",
                  "DevOps Engineer",
                  "Security Engineer",
                  "Network Architect",
                  "Application Delivery Architect",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Actual job requirements vary by employer and region.</p>
              <p>Certification should be combined with hands-on experience and broader networking and security knowledge.</p>
            </div>
          </section>

          {/* Who Should Get */}
          <section id="who-should-get" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Who Should Get F5 Certified?
            </h2>
            <p className="leading-relaxed mb-6">F5 certification can be a strong choice for:</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Network Engineers", desc: "If you work with enterprise networking and traffic management, F5 skills can complement your networking background." },
                { title: "Network Security Engineers", desc: "F5 provides technologies related to application security, access management, and traffic security." },
                { title: "System Administrators", desc: "Administrators responsible for application infrastructure can benefit from BIG-IP knowledge." },
                { title: "Cloud Engineers", desc: "F5 certification can complement cloud infrastructure and application delivery skills." },
                { title: "DevOps Engineers", desc: "NGINX and application delivery knowledge can be valuable for modern DevOps environments." },
                { title: "Cybersecurity Professionals", desc: "F5 security technologies can complement broader cybersecurity expertise." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* vs Cisco */}
          <section id="vs-cisco" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification vs Cisco Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5 and Cisco certifications serve different technology areas.</p>
              <p className="text-slate-900 font-medium">Cisco certifications are strongly associated with:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Routing", "Switching", "Networking", "Security", "Wireless", "Enterprise infrastructure"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-900 font-medium">F5 certifications focus more specifically on:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Application delivery", "Load balancing", "Traffic management", "Application security", "Access management", "DNS", "NGINX"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>A network engineer can benefit from having both Cisco and F5 skills.</p>
            </div>
          </section>

          {/* vs Fortinet */}
          <section id="vs-fortinet" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification vs Fortinet Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>F5 and Fortinet also have different primary technology focuses.</p>
              <p><strong className="text-slate-900">F5</strong> is heavily associated with application delivery, traffic management, application security, access management, and NGINX.</p>
              <p><strong className="text-slate-900">Fortinet</strong> is heavily associated with network security and security appliances such as FortiGate.</p>
              <p>Professionals working in enterprise security infrastructure may find value in understanding both ecosystems.</p>
            </div>
          </section>

          {/* Worth It */}
          <section id="worth-it" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Is F5 Certification Worth It in 2026?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p><strong className="text-slate-900">Yes, especially for professionals working with application delivery, load balancing, network security, and enterprise infrastructure.</strong></p>
              <p className="text-slate-900 font-medium">F5 certifications are particularly relevant if your current or target job involves:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "BIG-IP",
                  "LTM",
                  "DNS",
                  "ASM",
                  "APM",
                  "Application delivery",
                  "Load balancing",
                  "NGINX",
                  "Network security",
                  "Cloud application delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>The certification becomes even more valuable when combined with practical experience.</p>
              <p className="text-slate-900 font-medium">A strong skill combination could include:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="text-sm font-semibold text-slate-900">Networking + Linux + F5 BIG-IP + Cloud + Security</p>
              </div>
              <p>For example, an engineer with Cisco networking experience, Linux administration skills, cloud knowledge, and F5 BIG-IP expertise can build a strong infrastructure and application-delivery profile.</p>
            </div>
          </section>

          {/* For Beginners */}
          <section id="for-beginners" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Best F5 Certification for Beginners
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>If you are new to F5 technologies, the <strong className="text-slate-900">F5 Certified Administrator, BIG-IP</strong> path is a logical starting point for BIG-IP administration.</p>
              <p>The current credential requires completion of the five F5CAB exams.</p>
              <p className="text-slate-900 font-medium">After building administrator-level knowledge, professionals can move toward specialized areas such as:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["BIG-IP LTM", "BIG-IP DNS", "BIG-IP ASM", "BIG-IP APM", "Security", "Cloud"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Path Network */}
          <section id="path-network" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Path for Network Engineers
            </h2>
            <p className="leading-relaxed mb-6">A network engineer can follow a path such as:</p>
            <div className="space-y-2 text-sm">
              {[
                "Networking Fundamentals",
                "F5 Certified Administrator, BIG-IP",
                "BIG-IP LTM Specialist",
                "BIG-IP DNS / Security / APM / ASM",
                "Advanced F5 Architecture & Security Roles",
              ].map((item, index, arr) => (
                <React.Fragment key={item}>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center font-medium text-slate-900">
                    {item}
                  </div>
                  {index < arr.length - 1 && (
                    <div className="text-center text-sky-500 text-lg">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="leading-relaxed mt-6">This path can help a network engineer transition toward application delivery and network security engineering.</p>
          </section>

          {/* Path Cyber */}
          <section id="path-cyber" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Path for Cybersecurity Professionals
            </h2>
            <p className="leading-relaxed mb-6">Cybersecurity professionals can consider:</p>
            <div className="space-y-2 text-sm">
              {[
                "Networking Fundamentals",
                "F5 Certified Administrator, BIG-IP",
                "BIG-IP ASM / APM",
                "Security Solutions",
                "Advanced Application Security Roles",
              ].map((item, index, arr) => (
                <React.Fragment key={item}>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center font-medium text-slate-900">
                    {item}
                  </div>
                  {index < arr.length - 1 && (
                    <div className="text-center text-sky-500 text-lg">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="leading-relaxed mt-6">This path combines application delivery knowledge with security expertise.</p>
          </section>

          {/* Path Cloud */}
          <section id="path-cloud" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              F5 Certification Path for Cloud & DevOps Professionals
            </h2>
            <p className="leading-relaxed mb-6">Cloud and DevOps professionals can consider:</p>
            <div className="space-y-2 text-sm">
              {[
                "Linux + Networking",
                "F5 BIG-IP / NGINX Fundamentals",
                "F5 Certified Administrator",
                "NGINX Certifications",
                "Cloud / Security Specialization",
              ].map((item, index, arr) => (
                <React.Fragment key={item}>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center font-medium text-slate-900">
                    {item}
                  </div>
                  {index < arr.length - 1 && (
                    <div className="text-center text-sky-500 text-lg">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="leading-relaxed mt-6">NGINX knowledge can be particularly useful for professionals working with web applications, APIs, reverse proxies, and cloud-native environments.</p>
          </section>

          {/* Voucher */}
          <section id="voucher" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Buy an F5 Certification Exam Voucher
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>If you are planning to take an F5 certification exam, first identify the exact exam you need.</p>
              <p className="text-slate-900 font-medium">Examples include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "F5CAB1",
                  "F5CAB2",
                  "F5CAB3",
                  "F5CAB4",
                  "F5CAB5",
                  "301a",
                  "301b",
                  "302",
                  "303",
                  "304",
                  "401",
                  "402",
                  "F5N1",
                  "F5N2",
                  "F5N3",
                  "F5N4",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Exam availability, delivery options, and prices can vary by certification.</p>
              <p>Always confirm the exact exam code before purchasing.</p>
            </div>
          </section>

          {/* Techcyfy Voucher */}
          <section id="voucher-techcyfy" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Get F5 Certification Exam Vouchers from Techcyfy
            </h2>
            <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-slate-50 border border-sky-200">
              <p className="leading-relaxed text-sm mb-4">
                Looking for an <strong className="text-slate-900">F5 certification exam voucher</strong>?
              </p>
              <p className="leading-relaxed text-sm mb-4">
                <strong className="text-slate-900">Techcyfy</strong> provides IT certification exam voucher solutions for candidates preparing for globally recognized technology certifications.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                If you are planning to take an F5 certification exam, contact Techcyfy to check the latest:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "F5 exam voucher availability",
                  "Exam pricing",
                  "Certification options",
                  "Purchasing information",
                  "Candidate support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-base font-bold text-slate-900 mb-3">Why Choose Techcyfy?</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "IT certification exam voucher solutions",
                  "Competitive pricing",
                  "Multiple certification vendors",
                  "Support for certification candidates",
                  "Assistance before purchasing",
                  "Global candidate support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="leading-relaxed text-sm font-semibold text-slate-900 mb-4">
                Contact Techcyfy today to check the latest F5 certification exam voucher availability.
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
                  <strong>Important:</strong> Exam prices, voucher availability, exam codes, certification policies and registration procedures can change. Always verify the latest requirements through the official F5 certification portal before scheduling your examination.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Frequently Asked Questions About F5 Certification
            </h2>
            <div className="space-y-3">
              {[
                { q: "What is F5 certification?", a: "F5 certification validates technical knowledge and skills related to F5 technologies, including BIG-IP, application delivery, load balancing, security, access management, DNS, cloud solutions, and NGINX." },
                { q: "What is the current F5 BIG-IP Administrator certification?", a: "The current F5 Certified Administrator, BIG-IP credential requires candidates to pass five exams: F5CAB1, F5CAB2, F5CAB3, F5CAB4, and F5CAB5." },
                { q: "Are F5 101 and 201 exams still required?", a: "The old 101 + 201 structure was changed in 2025. The 101 exam retired on April 30, 2025, and F5 introduced the five-exam structure for the refreshed BIG-IP Administrator credential." },
                { q: "How much does the F5 certification exam cost?", a: "The price depends on the certification and delivery method. Current BIG-IP Administrator component exams such as F5CAB4 and F5CAB5 are listed at US$50 online or US$65 at a test center." },
                { q: "Is F5 certification worth it?", a: "F5 certification can be worthwhile for professionals working in application delivery, load balancing, network security, BIG-IP administration, NGINX, and enterprise infrastructure." },
                { q: "Which F5 certification is best for beginners?", a: "For professionals beginning with F5 BIG-IP, the F5 Certified Administrator, BIG-IP path is a strong starting point." },
                { q: "What is F5 BIG-IP LTM?", a: "BIG-IP LTM, or Local Traffic Manager, is an F5 technology used for application traffic management and load balancing. F5 offers a Certified Technology Specialist path specifically for BIG-IP LTM." },
                { q: "Does F5 have NGINX certifications?", a: "Yes. The current F5 certification exam catalog includes NGINX Management, NGINX Configuration, NGINX Troubleshoot, and NGINX administrator recertification options." },
                { q: "Where can I take an F5 certification exam?", a: "Depending on the exam, F5 certifications can be delivered through Pearson VUE test centers and/or Certiverse online proctoring." },
                { q: "How can I prepare for F5 certification?", a: "Use the official F5 exam blueprint, study F5 training materials, understand networking fundamentals, build hands-on BIG-IP experience, and practice troubleshooting real-world scenarios." },
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

          {/* Final Thoughts */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Final Thoughts
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">F5 certification</strong> can be an excellent credential for IT professionals who want to specialize in application delivery, load balancing, network security, application security, cloud infrastructure, and NGINX technologies.
              </p>
              <p>
                For candidates starting their F5 BIG-IP journey in 2026, it is important to understand the <strong className="text-slate-900">current certification structure</strong> rather than relying on older 101 and 201 exam information.
              </p>
              <p className="text-slate-900 font-medium">The current F5 Certified Administrator, BIG-IP pathway consists of five exams:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900">F5CAB1 + F5CAB2 + F5CAB3 + F5CAB4 + F5CAB5</p>
              </div>
              <p className="text-slate-900 font-medium">After developing administrator-level skills, professionals can specialize in areas such as:</p>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <p className="font-semibold text-slate-900">BIG-IP LTM + DNS + ASM + APM + Security + Cloud</p>
              </div>
              <p className="text-slate-900 font-medium">For professionals working with modern application infrastructure, F5 knowledge can complement skills in:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-semibold text-slate-900">Networking + Linux + Cloud + DevOps + Cybersecurity</p>
              </div>
              <p>If you are ready to pursue an F5 certification, choose the certification that matches your career objective, review the official exam blueprint, build practical skills, and prepare with legitimate training resources.</p>
              <p className="text-slate-900 font-semibold">
                Looking for an F5 certification exam voucher? Contact Techcyfy to check the latest voucher availability and pricing.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Ready to Start Your F5 Certification Journey?
            </h2>
            <p className="mb-6">
              Explore <strong className="text-slate-900">Techcyfy</strong> for more certification guides, application delivery resources, and technology career guides.
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

          {/* Trust Badge */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaShieldAlt className="text-emerald-500" />
              <span>Techcyfy Accredited</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaClock className="text-sky-500" />
              <span>20 min read</span>
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

export default F5Certification;