// src/pages/ServiceNowCSACertification.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaQuestionCircle,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const ServiceNowCSACertification = () => {
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
            <span className="text-sky-600">ServiceNow CSA Certification</span>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              ServiceNow Certification Guide 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            ServiceNow CSA Certification: Complete Certified System Administrator Guide 2026
          </h1>

          {/* Meta Description */}
          <p className="text-lg text-slate-600 leading-relaxed">
            Learn everything about ServiceNow CSA Certification, including exam topics, eligibility, format, preparation strategy, career benefits, study plan, and tips to become a ServiceNow Certified System Administrator.
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
              { id: "what-is-csa", label: "What Is ServiceNow CSA Certification?" },
              { id: "why-important", label: "Why Is CSA Certification Important?" },
              { id: "who-should-take", label: "Who Should Take the CSA Certification?" },
              { id: "prerequisites", label: "ServiceNow CSA Certification Prerequisites" },
              { id: "exam-format", label: "ServiceNow CSA Exam Format" },
              { id: "exam-syllabus", label: "ServiceNow CSA Exam Syllabus" },
              { id: "exam-weightage", label: "ServiceNow CSA Exam Weightage" },
              { id: "how-to-prepare", label: "How to Prepare for CSA Certification" },
              { id: "study-plan", label: "ServiceNow CSA 4-Week Study Plan" },
              { id: "cost", label: "ServiceNow CSA Certification Cost" },
              { id: "registration", label: "How to Register for the CSA Exam" },
              { id: "difficulty", label: "Is ServiceNow CSA Certification Difficult?" },
              { id: "mistakes", label: "Common Preparation Mistakes" },
              { id: "after-csa", label: "What Can You Do After CSA Certification?" },
              { id: "csa-vs-cad", label: "ServiceNow CSA vs CAD" },
              { id: "career-roadmap", label: "ServiceNow CSA Career Roadmap" },
              { id: "portfolio", label: "How to Build a ServiceNow Portfolio" },
              { id: "faq", label: "ServiceNow CSA Certification FAQs" },
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

          {/* Section 1 */}
          <section id="what-is-csa" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is ServiceNow CSA Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">ServiceNow CSA Certification</strong>, officially known as the <strong className="text-slate-900">ServiceNow Certified System Administrator (CSA)</strong> certification, validates foundational knowledge and skills required to configure, implement, and maintain a ServiceNow environment.
              </p>
              <p>
                The certification is designed for people who want to demonstrate their ability to work with the ServiceNow platform, including platform navigation, application configuration, data management, security, self-service, automation, integrations, and administration.
              </p>
              <p>
                According to ServiceNow's current 2026 exam blueprint, the CSA exam evaluates knowledge across areas such as platform fundamentals, database management, self-service and automation, data migration, integrations, and security.
              </p>
              <p>
                For professionals beginning a career in the ServiceNow ecosystem, CSA can serve as an important foundation for developing broader ServiceNow administration and platform skills.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="why-important" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Why Is ServiceNow CSA Certification Important?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                ServiceNow is widely used by organizations to manage IT services, workflows, employee experiences, customer operations, and other enterprise processes.
              </p>
              <p>
                A ServiceNow administrator plays an important role in configuring and maintaining the platform. That makes knowledge of the Now Platform particularly useful for IT professionals, administrators, consultants, developers, and professionals moving into ServiceNow-related roles.
              </p>
              <p className="text-slate-900 font-medium">The CSA certification helps demonstrate foundational knowledge in areas including:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "ServiceNow platform administration",
                  "Application and module configuration",
                  "Data and database concepts",
                  "Access control and security",
                  "Service Catalog",
                  "Knowledge Management",
                  "Workflow and automation",
                  "Importing and migrating data",
                  "Business Rules",
                  "UI Policies",
                  "Update Sets",
                  "ServiceNow scripting fundamentals",
                  "CMDB and CSDM concepts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                ServiceNow describes the CSA certification as validating the knowledge and skills needed to configure, implement, and maintain a ServiceNow system.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="who-should-take" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Who Should Take the ServiceNow CSA Certification?
            </h2>
            <p className="leading-relaxed mb-6">
              The ServiceNow CSA certification can be relevant to a range of technology professionals and aspiring administrators.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "1. Aspiring ServiceNow Administrators", desc: "If your goal is to become a ServiceNow System Administrator, CSA provides a structured way to build and validate foundational platform knowledge." },
                { title: "2. IT Professionals", desc: "IT support specialists, system administrators, IT service management professionals, and help-desk professionals can use ServiceNow skills to expand their career options." },
                { title: "3. ServiceNow Consultants", desc: "Consultants working with ServiceNow implementations need a strong understanding of platform configuration, data, workflows, security, and administration." },
                { title: "4. ServiceNow Developers", desc: "Developers can benefit from understanding the platform's administration concepts before progressing toward more development-focused certifications." },
                { title: "5. Career Changers", desc: "Professionals transitioning into IT service management, enterprise platforms, or ServiceNow careers can use CSA as a structured starting point." },
                { title: "6. ServiceNow Partners and Employees", desc: "ServiceNow's current CSA blueprint states that the exam is available to ServiceNow customers, partners, employees, and others interested in becoming Certified System Administrators." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="prerequisites" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Certification Prerequisites
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                ServiceNow's current exam blueprint recommends experience with database concepts and system management, exposure to system administration roles or ServiceNow administrative applications, and some familiarity with IT help-desk processes and incident, problem, and change workflows.
              </p>
              <p>
                ServiceNow also recommends approximately <strong className="text-slate-900">three to six months of experience using and/or maintaining a ServiceNow instance</strong>.
              </p>
              <p>However, recommended experience and official exam requirements should not be confused.</p>
              <p>
                If you are new to ServiceNow, the best approach is to complete the official ServiceNow learning material and gain practical experience with the platform before scheduling the exam.
              </p>
            </div>
          </section>

          {/* Section 5: Exam Format */}
          <section id="exam-format" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Exam Format
            </h2>
            <p className="leading-relaxed mb-6">
              The current ServiceNow CSA Mainline Exam Blueprint, updated in January 2026, specifies the following exam structure:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Exam Feature</th>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Current CSA Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Certification", detail: "Certified System Administrator" },
                    { feature: "Exam duration", detail: "90 minutes" },
                    { feature: "Number of questions", detail: "60" },
                    { feature: "Question types", detail: "Multiple choice and multiple select" },
                    { feature: "Multiple-choice questions", detail: "One correct answer" },
                    { feature: "Multiple-select questions", detail: "Select all required correct answers" },
                    { feature: "Exam delivery", detail: "Pearson test center or online proctored OnVUE" },
                    { feature: "Result", detail: "Conditional pass/fail displayed after submission" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900">{row.feature}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-6">
              ServiceNow states that the exam contains 60 questions and has a 90-minute duration. Multiple-select questions do not provide partial credit.
            </p>
            <p className="leading-relaxed">
              The exam can be taken at a Pearson test center or online through OnVUE, according to the current blueprint.
            </p>
          </section>

          {/* Section 6: Exam Syllabus */}
          <section id="exam-syllabus" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Exam Syllabus
            </h2>
            <p className="leading-relaxed mb-8">
              Understanding the CSA syllabus is one of the most important parts of exam preparation. The current ServiceNow CSA blueprint divides the exam into six major content areas.
            </p>

            <div className="space-y-6">
              {/* Syllabus 1 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">1. Platform Overview and Navigation</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The first area focuses on understanding the ServiceNow platform and how users interact with it. Important concepts include:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "ServiceNow platform fundamentals",
                    "User interface navigation",
                    "Lists",
                    "Forms",
                    "Applications",
                    "Modules",
                    "Platform capabilities",
                    "Task management",
                    "Visual Task Boards",
                    "Dashboards",
                    "Platform Analytics",
                    "Notifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  A strong understanding of the platform interface is essential because administrators work with these components regularly.
                </p>
              </div>

              {/* Syllabus 2 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">2. Self-Service and Automation</h3>
                <p className="leading-relaxed text-sm mb-4">
                  This domain covers features that allow users and organizations to access services and automate work. Key areas include:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Knowledge Management",
                    "Service Catalog",
                    "Workflow Studio",
                    "Virtual Agent",
                    "Self-service capabilities",
                    "Automation concepts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Understanding how users interact with the ServiceNow platform is important for administrators because many enterprise workflows depend on self-service and automation.
                </p>
              </div>

              {/* Syllabus 3 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">3. Database Management and Platform Security</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Database and security concepts are significant components of the CSA certification. Topics include:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Data Schema",
                    "Tables and fields",
                    "Application and Access Control",
                    "Importing Data",
                    "CMDB",
                    "CSDM",
                    "Security Center",
                    "Shared Responsibility Model",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  You should understand how ServiceNow stores information and how administrators control access to that information.
                </p>
              </div>

              {/* Syllabus 4 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">4. Data Migration and Integration</h3>
                <p className="leading-relaxed text-sm mb-4">
                  ServiceNow administrators often work with data coming into or moving between systems. You should understand concepts related to:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Data imports",
                    "Data migration",
                    "Integrations",
                    "Import Sets",
                    "Transform Maps",
                    "Integration fundamentals",
                    "Data consistency",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Practical experience with importing data can make these concepts significantly easier to understand.
                </p>
              </div>

              {/* Syllabus 5 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">5. Configuration and Development Fundamentals</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Although CSA is an administration-focused certification, configuration and basic development concepts are important. The current blueprint includes areas such as:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "UI Policies",
                    "Business Rules",
                    "System Update Sets",
                    "ServiceNow scripting",
                    "Platform configuration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  You should understand what these components do, when they are used, and how they affect the behavior of the platform.
                </p>
              </div>

              {/* Syllabus 6 */}
              <div className="p-6 rounded-lg bg-sky-50 border border-sky-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">6. Administration and Platform Management</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The administrator role requires an understanding of how to maintain and manage the ServiceNow environment. This includes concepts related to:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Platform configuration",
                    "User administration",
                    "Data management",
                    "Security",
                    "Applications",
                    "Workflows",
                    "System maintenance",
                    "Platform operations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  The goal is not simply to memorize definitions. You should understand how different ServiceNow components work together.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Exam Weightage */}
          <section id="exam-weightage" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Exam Weightage
            </h2>
            <p className="leading-relaxed mb-6">
              The current CSA exam blueprint provides the following domain distribution:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">CSA Domain</th>
                    <th className="text-right px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { domain: "Platform Overview and Navigation", weight: "20%" },
                    { domain: "Self Service & Automation", weight: "20%" },
                    { domain: "Database Management and Platform Security", weight: "30%" },
                    { domain: "Data Migration and Integration", weight: "13%" },
                    { domain: "Configuration / related platform administration topics", weight: "Covered within blueprint" },
                    { domain: "Other blueprint areas", weight: "Covered within blueprint" },
                    { domain: "Total", weight: "100%" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900">{row.domain}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-right text-slate-600">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mb-4">
              The exact current blueprint should always be used as the source of truth when preparing because ServiceNow can update certification content.
            </p>
            <div className="p-4 rounded-lg bg-amber-50 border-l-4 border-amber-500">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> Do not prepare only by memorizing percentages. The exam evaluates knowledge across the complete blueprint.
              </p>
            </div>
          </section>

          {/* Section 8: How to Prepare */}
          <section id="how-to-prepare" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Prepare for ServiceNow CSA Certification
            </h2>
            <p className="leading-relaxed mb-6">
              A structured preparation strategy can make the certification process much easier.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 1: Start With Official ServiceNow Training</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Begin with ServiceNow's official learning resources. ServiceNow specifically states that CSA exam questions are based on official ServiceNow training materials and product documentation. It also recommends using the official preparation resources rather than relying on unofficial study material as your primary source.
                </p>
                <p className="leading-relaxed text-sm">Focus on understanding concepts instead of simply watching videos.</p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 2: Study the CSA Exam Blueprint</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The exam blueprint should become your preparation checklist. Create a list of every domain and topic in the official blueprint. For each topic, ask:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Do I understand the definition?",
                    "Do I know where it is used?",
                    "Can I explain why it is used?",
                    "Can I perform the task in ServiceNow?",
                    "Can I distinguish it from similar features?",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  This approach is more effective than repeatedly reading the same material without testing your understanding.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 3: Get Hands-On ServiceNow Experience</h3>
                <p className="leading-relaxed text-sm mb-4">
                  ServiceNow is a platform that becomes much easier to understand through practical experience. Whenever possible, practice concepts such as:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Creating users",
                    "Managing groups",
                    "Working with lists and forms",
                    "Creating and modifying records",
                    "Configuring fields",
                    "Creating UI Policies",
                    "Working with Business Rules",
                    "Importing data",
                    "Creating Service Catalog items",
                    "Managing Knowledge articles",
                    "Working with Update Sets",
                    "Exploring workflows and automation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  Hands-on practice helps connect theoretical concepts with actual platform behavior.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 4: Learn ServiceNow Tables and Data Relationships</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Database concepts are particularly important for CSA preparation. You should understand:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Tables",
                    "Fields",
                    "Records",
                    "Reference fields",
                    "Parent and child tables",
                    "Relationships",
                    "Data schema",
                    "CMDB concepts",
                    "CSDM concepts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm mb-3">
                  Instead of memorizing isolated table names, focus on understanding how data is structured. For example, when you encounter a ServiceNow record, ask:
                </p>
                <ul className="space-y-1 text-sm italic text-slate-600">
                  <li>What table does this record belong to?</li>
                  <li>What fields does it contain?</li>
                  <li>What other records can it reference?</li>
                  <li>What controls access to it?</li>
                </ul>
                <p className="leading-relaxed text-sm mt-3">
                  These questions help develop administrator-level thinking.
                </p>
              </div>

              {/* Step 5 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 5: Understand Security and Access Control</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Security is an important part of ServiceNow administration. Study concepts such as:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Users",
                    "Groups",
                    "Roles",
                    "Access Controls",
                    "Application access",
                    "Data access",
                    "Security concepts",
                    "Shared responsibility",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  You should understand not only what an Access Control does but also how it affects access to ServiceNow data and functionality.
                </p>
              </div>

              {/* Step 6 */}
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 6: Practice Configuration</h3>
                <p className="leading-relaxed text-sm mb-4">
                  CSA preparation should include practical configuration exercises. For example, practice:
                </p>
                <ol className="space-y-2 mb-4">
                  {[
                    "Creating or modifying fields.",
                    "Configuring forms.",
                    "Creating UI Policies.",
                    "Understanding Business Rules.",
                    "Managing Update Sets.",
                    "Creating basic catalog configurations.",
                    "Importing data.",
                    "Exploring workflows and automation.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
                <p className="leading-relaxed text-sm">
                  Practical exercises are especially useful for distinguishing similar ServiceNow features.
                </p>
              </div>

              {/* Step 7 */}
              <div className="p-6 rounded-lg bg-sky-50 border border-sky-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Step 7: Review Your Weak Areas</h3>
                <p className="leading-relaxed text-sm mb-4">
                  After completing your initial study, identify areas where your understanding is weak. For example:
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p><strong className="text-emerald-600">Strong:</strong> Navigation and basic platform concepts</p>
                  <p><strong className="text-amber-600">Needs improvement:</strong> Security and Access Controls</p>
                  <p><strong className="text-amber-600">Needs improvement:</strong> Data migration</p>
                  <p><strong className="text-emerald-600">Strong:</strong> Lists and forms</p>
                </div>
                <p className="leading-relaxed text-sm">
                  Then spend additional study time on the weaker domains.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Study Plan */}
          <section id="study-plan" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA 4-Week Study Plan
            </h2>
            <p className="leading-relaxed mb-6">
              Here is a practical four-week preparation roadmap.
            </p>

            <div className="space-y-4">
              {[
                { week: "Week 1", title: "ServiceNow Fundamentals", topics: ["ServiceNow platform basics", "Navigation", "Applications", "Modules", "Lists", "Forms", "Records", "Users", "Groups", "Roles"], note: "Spend time exploring the platform rather than only reading." },
                { week: "Week 2", title: "Data, Security, and Administration", topics: ["Tables", "Fields", "Data schema", "CMDB", "CSDM", "Access Controls", "Roles", "Application security", "Importing data"], note: "Practice each concept whenever possible." },
                { week: "Week 3", title: "Automation and Configuration", topics: ["Service Catalog", "Knowledge Management", "Workflow Studio", "Virtual Agent", "UI Policies", "Business Rules", "Update Sets", "Scripting fundamentals"], note: "This week should be heavily practical." },
                { week: "Week 4", title: "Revision and Exam Preparation", topics: ["Review the official CSA blueprint", "Revisit weak domains", "Repeat important labs", "Review ServiceNow terminology", "Test yourself with practice questions", "Review official documentation", "Simulate the exam environment"], note: "Avoid learning large amounts of completely new material immediately before the exam." },
              ].map((item) => (
                <div key={item.week} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-base font-bold text-slate-900 mb-3">
                    <span className="text-sky-600">{item.week}:</span> {item.title}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-3">
                    {item.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm">
                        <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 italic">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10: Cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Certification Cost
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Certification pricing can change based on ServiceNow's policies, region, taxes, organizational arrangements, and other factors.
              </p>
              <p>
                The current ServiceNow CSA blueprint confirms that registration involves payment and that learning credits and credit-card payments are accepted. It also states that partner/customer arrangements may provide discounts.
              </p>
              <p>
                Some ServiceNow community discussions have referenced a <strong className="text-slate-900">$300 USD</strong> standard fee for CSA in 2026, but candidates should verify the current amount directly through their ServiceNow University account before registering because pricing and applicable taxes or discounts can change.
              </p>
            </div>
          </section>

          {/* Section 11: Registration */}
          <section id="registration" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Register for the ServiceNow CSA Exam
            </h2>
            <p className="leading-relaxed mb-6">
              The current ServiceNow process involves several steps.
            </p>

            <div className="space-y-4">
              {[
                { step: "Step 1", title: "Register for the Exam", desc: "Register through the ServiceNow certification process and pay for your exam attempt." },
                { step: "Step 2", title: "Schedule Your Exam", desc: "According to the current CSA blueprint, after registration you have 90 days to schedule and complete the exam." },
                { step: "Step 3", title: "Select Your Exam Delivery Method", desc: "You can choose between a Pearson test center or online proctored testing through OnVUE." },
                { step: "Step 4", title: "Take the Exam", desc: "Complete the 60-question exam within the 90-minute time limit." },
                { step: "Step 5", title: "Receive Your Result", desc: "ServiceNow states that a conditional pass/fail result is displayed immediately after completing and submitting the exam." },
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

          {/* Section 12: Difficulty */}
          <section id="difficulty" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Is ServiceNow CSA Certification Difficult?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The difficulty of the CSA certification depends heavily on your familiarity with ServiceNow and IT service management concepts.
              </p>
              <p>
                Someone with hands-on ServiceNow administration experience may approach the exam differently from someone who is completely new to the platform.
              </p>
              <p>The important point is to avoid treating CSA as a memorization-only exam.</p>
              <p className="text-slate-900 font-medium">You should understand:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "How ServiceNow works",
                  "Why different platform components exist",
                  "How data is structured",
                  "How access is controlled",
                  "How administrators configure applications",
                  "How automation works",
                  "How data is imported",
                  "How changes are managed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Practical knowledge can make the learning process much more meaningful.</p>
            </div>
          </section>

          {/* Section 13: Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Common Mistakes When Preparing for ServiceNow CSA
            </h2>
            <div className="space-y-4">
              {[
                { title: "1. Relying Only on Mock Questions", desc: "Practice questions can help identify knowledge gaps, but they should not replace learning the actual ServiceNow concepts. ServiceNow itself recommends using its official training materials and product documentation for preparation." },
                { title: "2. Memorizing Without Understanding", desc: "Memorizing definitions may help with some questions, but administration requires understanding how platform components behave." },
                { title: "3. Ignoring Security", desc: "Access Controls, roles, and platform security are important areas of ServiceNow administration." },
                { title: "4. Skipping Hands-On Practice", desc: "Reading about a feature is different from actually configuring it." },
                { title: "5. Using Outdated Study Material", desc: "ServiceNow changes its platform, certification blueprints, and exam processes over time. Always compare third-party preparation resources with the current official CSA blueprint." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-red-50 border border-red-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 14: After CSA */}
          <section id="after-csa" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Can You Do After ServiceNow CSA Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                CSA can provide a foundation for progressing into other areas of the ServiceNow ecosystem.
              </p>
              <p className="text-slate-900 font-medium">Depending on your career goals, you may explore roles such as:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "ServiceNow System Administrator",
                  "ServiceNow Administrator",
                  "ServiceNow Consultant",
                  "ServiceNow Developer",
                  "ITSM Administrator",
                  "ServiceNow Platform Analyst",
                  "ServiceNow Implementation Specialist",
                  "ServiceNow Technical Consultant",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Certification alone does not guarantee employment. Employers may also look for practical experience, ITSM knowledge, communication skills, problem-solving ability, and hands-on ServiceNow experience.
              </p>
            </div>
          </section>

          {/* Section 15: CSA vs CAD */}
          <section id="csa-vs-cad" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA vs CAD
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>CSA and CAD serve different purposes.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">CSA — Certified System Administrator</h3>
                  <p className="text-sm leading-relaxed">
                    Focuses primarily on ServiceNow platform administration, configuration, data, security, workflows, and platform fundamentals.
                  </p>
                </div>
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">CAD — Certified Application Developer</h3>
                  <p className="text-sm leading-relaxed">
                    Focuses more heavily on application development and development capabilities within the ServiceNow platform.
                  </p>
                </div>
              </div>
              <p>
                For someone building foundational ServiceNow administration knowledge, CSA is the natural certification to study first.
              </p>
            </div>
          </section>

          {/* Section 16: Career Roadmap */}
          <section id="career-roadmap" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Certification Career Roadmap
            </h2>
            <p className="leading-relaxed mb-6">
              A possible ServiceNow learning journey can look like this:
            </p>
            <div className="space-y-2 text-sm">
              {[
                "ServiceNow Fundamentals",
                "Hands-On ServiceNow Practice",
                "CSA Certification",
                "ServiceNow Administration Experience",
                "Advanced ServiceNow Skills",
                "Specialized ServiceNow Certifications",
                "ServiceNow Administrator / Consultant / Developer Career",
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
            <p className="leading-relaxed mt-6">
              Your actual path can vary depending on whether your goal is administration, development, consulting, ITSM, security, or another ServiceNow specialization.
            </p>
          </section>

          {/* Section 17: Portfolio */}
          <section id="portfolio" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Build a ServiceNow Portfolio
            </h2>
            <p className="leading-relaxed mb-6">
              Certification demonstrates knowledge, but a portfolio can help demonstrate practical ability. Consider building projects such as:
            </p>

            <div className="space-y-4">
              {[
                { title: "Project 1: IT Help Desk Application", items: ["Incidents", "Assignment groups", "Priorities", "Notifications", "Knowledge articles"] },
                { title: "Project 2: Service Catalog", items: ["Catalog items", "Variables", "Approvals", "Automation", "Notifications"] },
                { title: "Project 3: Employee Onboarding", items: ["Create an onboarding workflow that coordinates tasks across multiple teams."] },
                { title: "Project 4: Data Import Project", items: ["Practice importing external data and transforming it into ServiceNow records."] },
                { title: "Project 5: Knowledge Management Portal", items: ["Create and organize knowledge articles and build a user-friendly self-service experience."] },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                  {item.items.length > 1 ? (
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.items.map((sub) => (
                        <li key={sub} className="flex items-start gap-2 text-sm">
                          <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed">{item.items[0]}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="leading-relaxed mt-6">
              These projects can help demonstrate practical knowledge when applying for ServiceNow-related positions.
            </p>
          </section>

          {/* Section 18: FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              ServiceNow CSA Certification FAQs
            </h2>
            <div className="space-y-3">
              {[
                { q: "What does CSA stand for in ServiceNow?", a: "CSA stands for Certified System Administrator. It is a ServiceNow certification focused on foundational system administration knowledge and skills." },
                { q: "How long is the ServiceNow CSA exam?", a: "The current CSA exam duration is 90 minutes." },
                { q: "How many questions are on the CSA exam?", a: "The current CSA exam contains 60 questions." },
                { q: "Is the ServiceNow CSA exam multiple choice?", a: "Yes. The current exam includes both multiple-choice and multiple-select questions. Multiple-select questions require all applicable answers, and ServiceNow states that partial credit is not provided." },
                { q: "Can I take the CSA exam online?", a: "Yes. ServiceNow's current blueprint lists online proctored testing through OnVUE as an exam delivery option, in addition to Pearson test centers." },
                { q: "How much ServiceNow experience should I have before taking CSA?", a: "ServiceNow recommends three to six months of experience using and/or maintaining a ServiceNow instance, along with familiarity with database concepts, system administration, and IT help-desk processes." },
                { q: "Is CSA good for beginners?", a: "CSA can be a useful starting point for people building a ServiceNow administration career. Beginners should first learn the platform fundamentals and gain practical exposure before attempting the certification." },
                { q: "Does CSA expire?", a: "ServiceNow's current blueprint states that certified individuals must complete annual maintenance exams, known as delta exams, and pay the applicable yearly Certification Maintenance Program fee to maintain certification." },
                { q: "What should I study for the ServiceNow CSA exam?", a: "Start with the official ServiceNow CSA exam blueprint and ServiceNow training materials. Pay particular attention to platform navigation, data and database concepts, security, self-service, automation, configuration, data migration, integrations, and administration." },
                { q: "What certification should I take after CSA?", a: "The next certification depends on your career objective. Professionals interested in development, consulting, ITSM, security, or other ServiceNow specialties can explore the certification paths associated with those areas after establishing their foundational knowledge." },
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
                The <strong className="text-slate-900">ServiceNow CSA Certification</strong> is an important foundation for professionals who want to develop ServiceNow administration skills.
              </p>
              <p>
                Successful preparation should go beyond memorizing practice questions. Learn the platform, understand its data model, practice administration tasks, study security and configuration, and use the current official CSA blueprint as your preparation checklist.
              </p>
              <p>
                Because ServiceNow regularly updates its platform, certification content, and exam processes, always verify exam details through official ServiceNow resources before scheduling your test.
              </p>
              <p className="text-slate-900 font-medium">For Techcyfy readers, the best approach is simple:</p>
              <p className="text-slate-900 font-semibold text-center py-4 bg-sky-50 rounded-lg border border-sky-200">
                Learn → Practice → Review → Test → Certify → Build Experience
              </p>
              <p>
                With a strong foundation in ServiceNow administration, CSA can become the starting point for a broader career journey across the ServiceNow ecosystem.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Ready to Start Your ServiceNow CSA Journey?
            </h2>
            <p className="mb-6">
              Explore <strong className="text-slate-900">Techcyfy</strong> for practical ServiceNow, ITSM, cloud, and certification learning resources designed to help you build a successful technology career.
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
              <span>15 min read</span>
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

export default ServiceNowCSACertification;