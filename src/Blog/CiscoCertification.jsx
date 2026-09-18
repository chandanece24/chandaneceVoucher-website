// src/pages/CiscoCertification.jsx

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

const CiscoCertification = () => {
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
            <span className="text-sky-600">Cisco Certification</span>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              Cisco Certification Guide
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Cisco Certification: Complete CCNA, CCNP & CCIE Exam Guide
          </h1>

          {/* Meta Description */}
          <p className="text-lg text-slate-600 leading-relaxed">
            Learn everything about Cisco Certification, including CCNA, CCNP, CCIE, exam cost, prerequisites, exam topics, preparation strategy, career benefits, and certification roadmap.
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
              { id: "what-is", label: "What Is Cisco Certification?" },
              { id: "why-choose", label: "Why Choose Cisco Certification?" },
              { id: "levels", label: "Cisco Certification Levels" },
              { id: "path", label: "Cisco Certification Path" },
              { id: "ccna", label: "What Is CCNA Certification?" },
              { id: "ccna-details", label: "CCNA Exam Details" },
              { id: "ccna-topics", label: "CCNA Exam Topics" },
              { id: "ccna-v2", label: "CCNA v1.1 vs CCNA v2.0" },
              { id: "ccnp", label: "What Is CCNP Certification?" },
              { id: "ccnp-enterprise", label: "CCNP Enterprise Certification" },
              { id: "ccnp-cost", label: "CCNP Exam Cost" },
              { id: "ccie", label: "What Is CCIE Certification?" },
              { id: "cost", label: "Cisco Certification Cost" },
              { id: "expire", label: "Does Cisco Certification Expire?" },
              { id: "prerequisites", label: "Cisco Certification Prerequisites" },
              { id: "who-should-get", label: "Who Should Get Cisco Certification?" },
              { id: "career-benefits", label: "Cisco Certification Career Benefits" },
              { id: "job-opportunities", label: "Cisco Certification Job Opportunities" },
              { id: "worth-it", label: "Is CCNA, CCNP & CCIE Worth It?" },
              { id: "how-to-prepare", label: "How to Prepare for Cisco Certification" },
              { id: "resources", label: "Best Preparation Resources" },
              { id: "online-exam", label: "Can You Take Exams Online?" },
              { id: "registration", label: "How to Register for an Exam" },
              { id: "voucher", label: "Cisco Exam Voucher" },
              { id: "voucher-techcyfy", label: "Cisco Voucher from Techcyfy" },
              { id: "for-beginners", label: "Cisco Certification for Beginners" },
              { id: "for-engineers", label: "Cisco Certification for Network Engineers" },
              { id: "vs-comptia", label: "Cisco vs CompTIA Network+" },
              { id: "vs-aws", label: "Cisco vs AWS Certification" },
              { id: "mistakes", label: "Common Exam Mistakes" },
              { id: "checklist", label: "Preparation Checklist" },
              { id: "faq", label: "Frequently Asked Questions" },
              { id: "verdict", label: "Final Verdict" },
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
                <strong className="text-slate-900">Cisco Certification</strong> is one of the most recognized professional certification paths for networking and IT professionals worldwide.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                Cisco certifications validate skills in areas such as networking, cybersecurity, automation, cloud connectivity, collaboration, data center technologies, and network infrastructure.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                Whether you are a beginner looking for your first Cisco networking certification, an experienced network engineer preparing for <strong className="text-slate-900">CCNP</strong>, or an advanced professional targeting <strong className="text-slate-900">CCIE</strong>, Cisco provides a structured certification pathway for different experience levels.
              </p>
              <p className="leading-relaxed text-sm mt-3">
                If you are searching for Cisco certification, CCNA certification, CCNP certification, CCIE certification, Cisco exam cost, Cisco certification exam, Cisco exam voucher, or Cisco certification path, this complete guide explains what you need to know.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section id="what-is" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is Cisco Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">Cisco Certification</strong> is a professional certification program designed to validate technical knowledge and skills related to Cisco technologies and broader IT networking disciplines.
              </p>
              <p>
                Cisco certifications are used by networking professionals, system administrators, security engineers, cloud engineers, DevOps professionals, network automation engineers, and IT managers around the world.
              </p>
              <p>Cisco's certification ecosystem includes multiple levels and specializations.</p>
              <p className="text-slate-900 font-medium">The main career certification levels include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Entry-level", "Associate", "Professional", "Expert"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Cisco also offers specialist and focused certifications for specific technology areas.</p>
              <p className="text-slate-900 font-medium">The certification portfolio includes paths related to:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Networking",
                  "Enterprise networking",
                  "Cybersecurity",
                  "Data center",
                  "Collaboration",
                  "Service provider",
                  "Automation",
                  "DevNet",
                  "AI",
                  "Wireless",
                  "Network design",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Cisco's current exam catalog lists certifications and exams across multiple career tracks, including CCNA, CCNP, CCIE, Cisco AI Technical Practitioner, AppDynamics, cybersecurity, enterprise networking, and other specializations.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="why-choose" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Why Choose Cisco Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Cisco certification can be valuable for professionals who want to build or demonstrate practical networking skills.</p>
              <p className="text-slate-900 font-medium">Cisco certifications can help you:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Build networking knowledge",
                  "Validate technical skills",
                  "Strengthen your resume",
                  "Prepare for networking careers",
                  "Develop enterprise networking expertise",
                  "Learn network security",
                  "Understand automation and programmability",
                  "Build cloud networking knowledge",
                  "Prepare for advanced networking roles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Cisco's certification program is particularly relevant for professionals working with enterprise networks, routers, switches, wireless networks, security infrastructure, automation, and network operations.
              </p>
            </div>
          </section>

          {/* Section 3: Levels */}
          <section id="levels" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Levels
            </h2>
            <p className="leading-relaxed mb-6">
              Cisco's certification ecosystem provides a progression from foundational skills to expert-level networking expertise.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">1. Entry-Level Cisco Certifications</h3>
                <p className="leading-relaxed text-sm mb-4">Entry-level certifications are designed for candidates beginning their IT careers.</p>
                <p className="text-slate-900 font-medium text-sm mb-2">Cisco currently offers certifications such as:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {["Cisco Certified Support Technician (CCST) Networking", "Cisco Certified Support Technician (CCST) Cybersecurity"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">These can be useful starting points for candidates who are new to IT and networking.</p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">2. Cisco Associate-Level Certifications</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The <strong className="text-slate-900">associate level</strong> is one of the most popular starting points for professional networking.
                </p>
                <p className="text-slate-900 font-bold text-sm mb-2">CCNA – Cisco Certified Network Associate</p>
                <p className="text-slate-900 font-medium text-sm mb-2">CCNA validates knowledge of:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {["Network fundamentals", "Network access", "IP connectivity", "IP services", "Security fundamentals", "Automation and programmability"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm mb-3">
                  Cisco currently identifies <strong className="text-slate-900">200-301 CCNA</strong> as the core exam required to earn the CCNA certification.
                </p>
                <p className="text-slate-900 font-medium text-sm mb-2">Other associate-level certifications include:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Cisco CyberOps Associate", "Cisco DevNet Associate"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm mt-3">
                  Cisco has also updated the naming of some cybersecurity certifications, so candidates should always verify the current official certification name before purchasing an exam voucher.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">3. Cisco Professional Certifications</h3>
                <p className="leading-relaxed text-sm mb-4">Professional-level Cisco certifications are designed for experienced IT and networking professionals.</p>
                <p className="text-slate-900 font-bold text-sm mb-2">CCNP – Cisco Certified Network Professional</p>
                <p className="text-slate-900 font-medium text-sm mb-2">CCNP certifications are available across multiple technology areas. Examples include:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {["CCNP Enterprise", "CCNP Security", "CCNP Data Center", "CCNP Collaboration", "CCNP Service Provider", "CCNP Automation"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm mb-3">The exact exam combination depends on the certification track.</p>
                <p className="leading-relaxed text-sm mb-3">
                  For example, <strong className="text-slate-900">CCNP Enterprise</strong> requires a core exam plus one concentration exam.
                </p>
                <p className="leading-relaxed text-sm">
                  The current Cisco exam catalog lists <strong className="text-slate-900">350-401 ENCOR</strong> as the core exam for CCNP Enterprise and several concentration exams such as ENARSI, ENSDWI, ENSLD, ENCC, and ENNA.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-sky-50 border border-sky-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">4. Cisco Expert Certifications</h3>
                <p className="leading-relaxed text-sm mb-4">At the expert level, Cisco offers certifications such as:</p>
                <p className="text-slate-900 font-bold text-sm mb-2">CCIE – Cisco Certified Internetwork Expert</p>
                <p className="leading-relaxed text-sm mb-4">CCIE is designed for highly experienced networking professionals.</p>
                <p className="text-slate-900 font-medium text-sm mb-2">CCIE certifications cover areas such as:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {["Enterprise infrastructure", "Enterprise wireless", "Security", "Collaboration", "Data center", "Service provider"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">
                  CCIE certification generally requires passing the appropriate written/core exam and a practical lab examination, depending on the track. The CCIE lab is significantly more hands-on than associate or professional-level exams.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Path */}
          <section id="path" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Path
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-900 font-medium">A simplified Cisco networking certification path is:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900">CCST Networking → CCNA → CCNP → CCIE</p>
              </div>
              <p>However, you do not necessarily have to complete every level before moving forward.</p>

              <p className="text-slate-900 font-medium">For example:</p>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900 mb-1">Enterprise Networking</p>
                <p className="text-sm">Beginner → CCNA → CCNP Enterprise → CCIE Enterprise Infrastructure</p>
              </div>

              <p className="text-slate-900 font-medium">For cybersecurity:</p>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-sm">Networking Fundamentals → CCNA → Cisco Cybersecurity/CCNP Security → Advanced Security Skills</p>
              </div>

              <p className="text-slate-900 font-medium">For automation:</p>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-sm">CCNA → DevNet/Automation skills → CCNP Automation</p>
              </div>
            </div>
          </section>

          {/* Section 5: CCNA */}
          <section id="ccna" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is CCNA Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">CCNA</strong> stands for <strong className="text-slate-900">Cisco Certified Network Associate</strong>.
              </p>
              <p>
                It is one of the world's most widely recognized networking certifications and is often considered a strong foundation for people beginning a professional networking career.
              </p>
              <p className="text-slate-900 font-medium">Cisco states that CCNA validates skills in:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Network fundamentals",
                  "Network access",
                  "IP connectivity",
                  "IP services",
                  "Security fundamentals",
                  "Automation and programmability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6: CCNA Details */}
          <section id="ccna-details" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              CCNA Exam Details
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-900 font-medium">The current CCNA certification is earned by passing:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900">200-301 CCNA</p>
              </div>
              <p className="text-slate-900 font-medium">Cisco currently lists the exam as:</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">CCNA Exam Feature</th>
                      <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Current Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Exam", detail: "200-301 CCNA" },
                      { feature: "Version", detail: "v1.1" },
                      { feature: "Duration", detail: "120 minutes" },
                      { feature: "Current Price", detail: "US$300 on Cisco's exam page" },
                      { feature: "Languages", detail: "English, Japanese" },
                      { feature: "Prerequisites", detail: "None" },
                      { feature: "Certification Validity", detail: "3 years" },
                      { feature: "Exam Type", detail: "Proctored" },
                      { feature: "Certification", detail: "CCNA" },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900 w-1/2">{row.feature}</td>
                        <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Cisco's current CCNA exam page lists the exam at <strong className="text-slate-900">US$300</strong>, while Cisco's broader exam-pricing table also lists the CCNA exam at $300. Regional taxes and pricing conditions may apply.
              </p>
            </div>
          </section>

          {/* Section 7: CCNA Topics */}
          <section id="ccna-topics" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              CCNA Exam Topics
            </h2>
            <p className="leading-relaxed mb-8">The current CCNA exam covers several major domains.</p>

            <div className="space-y-6">
              {[
                { title: "1. Network Fundamentals", items: ["Network components", "Routers", "Layer 2 switches", "Layer 3 switches", "Firewalls", "Access points", "Controllers", "Servers", "Endpoints", "Network topologies", "WAN", "LAN", "Cloud", "Cabling", "TCP/IP", "IPv4", "IPv6"] },
                { title: "2. Network Access", items: ["VLANs", "Trunking", "802.1Q", "Spanning Tree Protocol", "EtherChannel", "Wireless concepts", "Device management"] },
                { title: "3. IP Connectivity", items: ["Routing concepts", "Static routes", "Default routes", "IPv4 routing", "IPv6 routing", "OSPF", "Routing tables", "Administrative distance", "Metrics"] },
                { title: "4. IP Services", items: ["DHCP", "DNS", "NAT", "NTP", "SNMP", "Syslog", "QoS", "SSH", "Network management"] },
                { title: "5. Security Fundamentals", items: ["Security concepts", "Device hardening", "Access control", "Authentication", "Authorization", "Accounting", "WPA/WPA2/WPA3", "VPN concepts", "Threat awareness"] },
                { title: "6. Automation and Programmability", items: ["REST APIs", "JSON", "Automation", "Software-defined networking", "Network management", "Configuration management", "Ansible", "Terraform", "AI and machine learning in network operations"], note: "Cisco's CCNA v1.1 update specifically added AI and machine-learning concepts to network operations and updated the automation/configuration-management content." },
              ].map((topic) => (
                <div key={topic.title} className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{topic.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-3">
                    {topic.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {topic.note && <p className="leading-relaxed text-sm">{topic.note}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: CCNA v1.1 vs v2.0 */}
          <section id="ccna-v2" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              CCNA v1.1 vs CCNA v2.0
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>This is particularly important for anyone preparing for Cisco certification in 2026.</p>
              <p className="text-slate-900 font-medium">Cisco has announced a <strong className="text-slate-900">CCNA v2.0 refresh</strong>.</p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-3">Current CCNA</h3>
                  <p className="text-sm font-semibold text-slate-900 mb-2">200-301 CCNA v1.1</p>
                  <p className="text-sm">The current exam remains available until:</p>
                  <p className="text-sm font-bold text-sky-600 mt-2">February 2, 2027</p>
                </div>
                <div className="p-5 rounded-lg bg-sky-50 border border-sky-200">
                  <h3 className="text-base font-bold text-slate-900 mb-3">New CCNA</h3>
                  <p className="text-sm font-semibold text-slate-900 mb-2">CCNA v2.0</p>
                  <p className="text-sm">Testing begins:</p>
                  <p className="text-sm font-bold text-sky-600 mt-2">February 3, 2027</p>
                </div>
              </div>

              <p className="text-slate-900 font-medium mt-6">Cisco says the refreshed exam will place greater emphasis on:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Practical assessments", "Troubleshooting", "Security", "AI", "Practical networking skills"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-slate-900 font-medium mt-4">Cisco has also stated that the new version builds on the networking fundamentals candidates are already learning in the current exam.</p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Should You Wait for CCNA v2.0?</h3>
              <ul className="space-y-2">
                {[
                  "If you are already preparing for the current CCNA, Cisco recommends continuing and completing the current exam rather than unnecessarily delaying certification.",
                  "If you are just beginning your studies and your exam date will be after February 3, 2027, you should prepare using the updated v2.0 objectives.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Cisco's current guidance states that candidates studying for the existing exam can continue because the foundational skills transfer to the refreshed certification.</p>
            </div>
          </section>

          {/* Section 9: CCNP */}
          <section id="ccnp" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is CCNP Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">CCNP</strong> stands for <strong className="text-slate-900">Cisco Certified Network Professional</strong>.
              </p>
              <p>CCNP certifications are designed for professionals who have developed stronger networking skills and want to specialize in a particular technology area.</p>
              <p className="text-slate-900 font-medium">Popular CCNP tracks include:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["CCNP Enterprise", "CCNP Security", "CCNP Data Center", "CCNP Collaboration", "CCNP Service Provider", "CCNP Automation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 10: CCNP Enterprise */}
          <section id="ccnp-enterprise" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              CCNP Enterprise Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p><strong className="text-slate-900">CCNP Enterprise</strong> is one of the most popular Cisco professional certifications.</p>
              <p className="text-slate-900 font-medium">To earn CCNP Enterprise, candidates generally need:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900">1 Core Exam + 1 Concentration Exam</p>
              </div>
              <p className="text-slate-900 font-medium">The core exam is:</p>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <p className="font-bold text-slate-900">350-401 ENCOR – Implementing and Operating Cisco Enterprise Network Core Technologies</p>
              </div>
              <p className="text-slate-900 font-medium">Concentration options include exams such as:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["300-410 ENARSI", "300-415 ENSDWI", "300-420 ENSLD", "300-440 ENCC", "300-445 ENNA"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Cisco's current exam catalog confirms these exams as part of the CCNP Enterprise pathway.</p>
            </div>
          </section>

          {/* Section 11: CCNP Cost */}
          <section id="ccnp-cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              CCNP Exam Cost
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-900 font-medium">Cisco's current exam pricing lists:</p>
              <ul className="space-y-2">
                {["CCNP core exam: US$400", "CCNP concentration exam: US$300"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-900 font-medium mt-4">Therefore, a typical CCNP certification requiring one core and one concentration exam has exam fees totaling:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900 text-lg">US$700</p>
              </div>
              <p>before applicable taxes or other training costs.</p>
              <p>Cisco's exam pricing page lists these current professional-level exam prices.</p>
            </div>
          </section>

          {/* Section 12: CCIE */}
          <section id="ccie" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              What Is CCIE Certification?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">CCIE – Cisco Certified Internetwork Expert</strong> is an expert-level Cisco certification.
              </p>
              <p>CCIE is designed for highly experienced networking professionals who want to demonstrate advanced technical expertise.</p>
              <p>Depending on the track, CCIE certification involves both knowledge assessment and hands-on practical skills.</p>
              <p>The CCIE practical lab exam is considerably more demanding than a typical associate-level certification exam.</p>
              <p>Cisco currently lists the CCIE Lab exam fee at <strong className="text-slate-900">US$1,600</strong>, before applicable taxes.</p>
            </div>
          </section>

          {/* Section 13: Cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Cost
            </h2>
            <p className="leading-relaxed mb-6">Cisco exam costs vary according to certification level and exam type.</p>
            <p className="leading-relaxed mb-4">A simplified overview of current Cisco pricing is:</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Certification Level</th>
                    <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Example</th>
                    <th className="text-right px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Current Exam Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { level: "Entry", example: "CCST", price: "$125" },
                    { level: "Associate", example: "CCNA", price: "$300" },
                    { level: "Professional Core", example: "CCNP Core", price: "$400" },
                    { level: "Professional Concentration", example: "CCNP Concentration", price: "$300" },
                    { level: "Expert", example: "CCDE Written", price: "$450" },
                    { level: "Expert", example: "CCIE Lab", price: "$1,600" },
                    { level: "Specialist", example: "Specialist Exams", price: "$300" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900">{row.level}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{row.example}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-right text-slate-600">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-6">
              Cisco states that prices are in US dollars plus applicable tax and that pricing varies by exam type.
            </p>
            <div className="mt-4 p-4 rounded-lg bg-amber-50 border-l-4 border-amber-500">
              <p className="text-xs text-amber-900">
                <strong>Important:</strong> Training costs are separate from exam fees.
              </p>
            </div>
          </section>

          {/* Section 14: Expire */}
          <section id="expire" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Does Cisco Certification Expire?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Cisco certifications generally have a <strong className="text-slate-900">three-year validity period</strong>.</p>
              <p className="text-slate-900 font-medium">Cisco provides multiple recertification options, including:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Taking another qualifying certification exam", "Earning Continuing Education credits", "Combining eligible activities"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Cisco states that certification holders can use the Continuing Education Program to work toward recertification.</p>
            </div>
          </section>

          {/* Section 15: Prerequisites */}
          <section id="prerequisites" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Prerequisites
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Prerequisites depend on the certification.</p>
              <div className="space-y-4">
                {[
                  { cert: "CCNA", desc: "There are no formal prerequisites for CCNA. Cisco's current CCNA page explicitly lists prerequisites as none." },
                  { cert: "CCNP", desc: "Cisco does not require a formal prerequisite certification to take the CCNP exams. However, professional-level exams are designed for candidates with stronger networking knowledge and experience." },
                  { cert: "CCIE", desc: "There are no formal prerequisites for taking the CCIE certification exams, but extensive practical networking experience is strongly recommended." },
                ].map((item) => (
                  <div key={item.cert} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.cert}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 16: Who Should Get */}
          <section id="who-should-get" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Who Should Get Cisco Certification?
            </h2>
            <p className="leading-relaxed mb-6">Cisco certification can benefit a wide range of IT professionals.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Network Engineers", desc: "Cisco certifications are directly relevant to network engineering careers." },
                { title: "Network Administrators", desc: "CCNA and CCNP can help administrators strengthen routing, switching, security, and troubleshooting skills." },
                { title: "System Administrators", desc: "Understanding networking can be extremely valuable for system administrators." },
                { title: "Cloud Engineers", desc: "Cloud networking relies heavily on networking fundamentals." },
                { title: "Cybersecurity Professionals", desc: "Networking knowledge is essential for understanding security architecture, traffic flows, attacks, and defensive controls." },
                { title: "DevOps Engineers", desc: "Modern DevOps environments require networking, automation, APIs, cloud infrastructure, and troubleshooting." },
                { title: "Network Automation Engineers", desc: "Cisco certification increasingly incorporates automation and programmability concepts." },
                { title: "IT Students", desc: "CCNA can provide a structured introduction to professional networking." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 17: Career Benefits */}
          <section id="career-benefits" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Career Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "1. Validate Networking Knowledge", desc: "Certification demonstrates that you have passed a standardized Cisco examination." },
                { title: "2. Strengthen Your Resume", desc: "Cisco certifications are widely recognized by employers and IT professionals." },
                { title: "3. Build Networking Fundamentals", desc: "CCNA provides a foundation that can support careers in networking, cloud, cybersecurity, and automation." },
                { title: "4. Prepare for Advanced Certifications", desc: "CCNA knowledge provides a strong foundation for professional-level Cisco certifications." },
                { title: "5. Develop Specialized Skills", desc: "CCNP allows professionals to specialize in enterprise networking, security, automation, data center, collaboration, or service provider technologies." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 18: Job Opportunities */}
          <section id="job-opportunities" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Job Opportunities
            </h2>
            <p className="leading-relaxed mb-6">Cisco certifications can complement roles such as:</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Network Engineer",
                "Network Administrator",
                "Network Support Engineer",
                "NOC Engineer",
                "Infrastructure Engineer",
                "Systems Administrator",
                "Cloud Network Engineer",
                "Security Engineer",
                "Network Security Engineer",
                "Network Automation Engineer",
                "IT Support Engineer",
                "Technical Support Engineer",
                "DevOps Engineer",
                "Infrastructure Architect",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">Job requirements vary according to the employer, location, and experience level.</p>
          </section>

          {/* Section 19: Worth It */}
          <section id="worth-it" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Is CCNA, CCNP & CCIE Worth It?
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Is CCNA Worth It?</h3>
                <p className="leading-relaxed text-sm mb-4">
                  For people interested in networking, <strong className="text-slate-900">CCNA can be an excellent starting certification</strong>.
                </p>
                <p className="text-slate-900 font-medium text-sm mb-2">It covers a broad foundation of:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {["Networking", "Routing", "Switching", "IP connectivity", "Security", "Automation"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm mb-3">
                  Cisco itself describes CCNA as a broad foundation that can support careers across networking, security, software development, and related IT areas.
                </p>
                <p className="text-slate-900 font-medium text-sm mb-2">CCNA can also be useful for professionals who want to move into:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Cloud", "Cybersecurity", "DevOps", "Network automation", "Infrastructure engineering"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Is CCNP Worth It?</h3>
                <p className="leading-relaxed text-sm mb-4">
                  CCNP is generally more appropriate for professionals who already understand networking fundamentals and want to develop professional-level skills.
                </p>
                <p className="text-slate-900 font-medium text-sm mb-2">It can be particularly valuable for:</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {["Network engineers", "Senior network administrators", "Infrastructure engineers", "Enterprise networking professionals", "Network security professionals", "Network automation engineers"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed text-sm">CCNP requires more advanced preparation than CCNA, especially for the core examination.</p>
              </div>

              <div className="p-6 rounded-lg bg-sky-50 border border-sky-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Is CCIE Worth It?</h3>
                <p className="leading-relaxed text-sm mb-4">
                  CCIE is designed for experienced professionals who want to demonstrate expert-level Cisco networking capabilities.
                </p>
                <p className="leading-relaxed text-sm mb-4">
                  It requires significantly more preparation, practical experience, and investment than CCNA or CCNP.
                </p>
                <p className="leading-relaxed text-sm">
                  For professionals targeting senior engineering, architecture, consulting, or highly specialized networking roles, CCIE can be a powerful credential.
                </p>
              </div>
            </div>
          </section>

          {/* Section 20: How to Prepare */}
          <section id="how-to-prepare" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Prepare for Cisco Certification
            </h2>

            <div className="space-y-4">
              {[
                { step: "Step 1", title: "Choose the Right Certification", desc: "Start by identifying your career goal. For beginners: CCNA. For experienced enterprise network engineers: CCNP Enterprise. For advanced professionals: CCIE. For cybersecurity: Cisco cybersecurity certifications. For automation: Cisco DevNet / CCNP Automation pathways." },
                { step: "Step 2", title: "Study the Official Exam Topics", desc: "Always begin with Cisco's official exam topics. Exam objectives tell you what skills the certification is designed to assess. Cisco provides official exam topic information and learning resources for its certification exams." },
                { step: "Step 3", title: "Build a Home Lab", desc: "Hands-on practice is extremely important for networking. You can use Cisco Modeling Labs, physical Cisco equipment, virtual labs, network simulators, GNS3, or EVE-NG. Cisco specifically recommends Cisco Modeling Labs as a way to design, build, and troubleshoot real network environments." },
                { step: "Step 4", title: "Practice Configuration", desc: "For CCNA, practice VLANs, trunking, STP, EtherChannel, static routing, OSPF, DHCP, NAT, IPv6, ACLs, SSH, and wireless concepts." },
                { step: "Step 5", title: "Practice Troubleshooting", desc: "Don't only learn how to configure a network. Learn how to troubleshoot it. Practice problems involving incorrect VLANs, trunk mismatches, routing failures, DNS issues, DHCP failures, ACL problems, NAT problems, STP issues, and interface errors." },
                { step: "Step 6", title: "Practice Automation", desc: "Modern Cisco certification increasingly includes automation and programmability. Learn the basics of REST APIs, JSON, Python, Ansible, Terraform, Infrastructure as Code, and controller-based networking." },
                { step: "Step 7", title: "Take Practice Exams", desc: "Practice exams can help identify weak areas. Cisco offers practice-exam resources through Cisco U. for certification preparation." },
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

          {/* Section 21: Resources */}
          <section id="resources" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Best Resources for Cisco Certification Preparation
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Cisco Learning Network", desc: "Cisco's certification community provides learning resources, discussions, and exam preparation information." },
                { title: "Cisco U.", desc: "Cisco U. provides guided learning paths and certification preparation." },
                { title: "Cisco Networking Academy", desc: "Cisco Networking Academy provides networking education and learning resources." },
                { title: "Cisco Modeling Labs", desc: "Cisco Modeling Labs is useful for building virtual network environments and practicing configuration and troubleshooting." },
                { title: "Official Cisco Exam Topics", desc: "Always use the current official exam topics as your preparation checklist." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 22: Online Exam */}
          <section id="online-exam" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Can You Take Cisco Certification Exams Online?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Yes.</p>
              <p>Cisco states that associate, professional, and expert written exams are offered both <strong className="text-slate-900">online and in person</strong>.</p>
              <p>Cisco uses <strong className="text-slate-900">Pearson VUE</strong> as its authorized exam delivery partner.</p>
              <p>Candidates should verify current technical and identification requirements before scheduling an online examination.</p>
            </div>
          </section>

          {/* Section 23: Registration */}
          <section id="registration" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              How to Register for a Cisco Certification Exam
            </h2>
            <p className="leading-relaxed mb-6">The general process is:</p>
            <ol className="space-y-2">
              {[
                "Choose your Cisco certification.",
                "Identify the required exam.",
                "Create or sign in to your Cisco account.",
                "Register for the exam.",
                "Select online or testing-center delivery where available.",
                "Choose your date and time.",
                "Complete the required identity verification.",
                "Take the examination.",
                "Receive your exam result.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="leading-relaxed mt-4">
              Cisco provides official exam-registration instructions and works with Pearson VUE for secure proctored testing.
            </p>
          </section>

          {/* Section 24: Voucher */}
          <section id="voucher" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Exam Voucher: What Is It?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                A <strong className="text-slate-900">Cisco exam voucher</strong> is a prepaid authorization that can be used toward an eligible Cisco certification examination.
              </p>
              <p className="text-slate-900 font-medium">Depending on the voucher and program, the voucher may have:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["A specific exam restriction", "Expiration date", "Regional restrictions", "Terms and conditions"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-900 font-medium">Before purchasing a Cisco exam voucher, confirm:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Exam code",
                  "Certification",
                  "Voucher validity",
                  "Country eligibility",
                  "Expiration date",
                  "Redemption instructions",
                  "Whether taxes are included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Never assume that every Cisco voucher can be used for every Cisco exam.</p>
            </div>
          </section>

          {/* Section 25: Techcyfy Voucher */}
          <section id="voucher-techcyfy" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Voucher from Techcyfy
            </h2>
            <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-slate-50 border border-sky-200">
              <p className="leading-relaxed text-sm mb-4">
                Planning to take a <strong className="text-slate-900">Cisco certification exam</strong>? Techcyfy helps IT professionals explore Cisco exam voucher options.
              </p>
              <p className="leading-relaxed text-sm font-medium text-slate-900 mb-4">
                Depending on availability, candidates may be interested in:
              </p>
              <ul className="space-y-2 mb-6">
                {["CCNA", "CCNP", "CCIE", "Cisco cybersecurity", "Cisco DevNet", "Cisco specialist certifications"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed text-sm font-semibold text-slate-900 mb-4">
                Contact Techcyfy for current Cisco exam voucher availability and pricing.
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
                  <strong>Important:</strong> Cisco exam prices, certification requirements, exam versions, voucher availability, and policies can change. Always verify the current information with Cisco before purchasing or scheduling an exam.
                </p>
              </div>
            </div>
          </section>

          {/* Section 26: For Beginners */}
          <section id="for-beginners" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification for Beginners
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>If you are completely new to networking, you don't need to start with CCNP or CCIE.</p>
              <p className="text-slate-900 font-medium">A practical path is:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900">Networking Fundamentals → CCNA → Hands-On Experience → CCNP</p>
              </div>
              <p className="text-slate-900 font-medium">Start by learning:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "OSI model",
                  "TCP/IP",
                  "Ethernet",
                  "IPv4",
                  "IPv6",
                  "Subnetting",
                  "VLANs",
                  "Routing",
                  "Switching",
                  "Wireless",
                  "Security",
                  "Automation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Then move toward the CCNA exam.</p>
            </div>
          </section>

          {/* Section 27: For Engineers */}
          <section id="for-engineers" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification for Network Engineers
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Experienced network engineers can choose a specialized Cisco path.</p>
              <p className="text-slate-900 font-medium">For example:</p>

              <div className="space-y-4">
                {[
                  { title: "Enterprise Networking", path: "CCNA → CCNP Enterprise → CCIE Enterprise Infrastructure" },
                  { title: "Security", path: "CCNA → CCNP Security → Advanced Security" },
                  { title: "Automation", path: "CCNA → Automation/DevNet Skills → CCNP Automation" },
                  { title: "Data Center", path: "Networking Fundamentals → CCNA → CCNP Data Center" },
                  { title: "Service Provider", path: "Networking Fundamentals → CCNA → CCNP Service Provider" },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm font-medium text-sky-700">{item.path}</p>
                  </div>
                ))}
              </div>

              <p>Your ideal path depends on your current experience and career objectives.</p>
            </div>
          </section>

          {/* Section 28: vs CompTIA */}
          <section id="vs-comptia" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification vs CompTIA Network+
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Both Cisco certifications and CompTIA certifications can be useful, but they have different focuses.</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Certification</th>
                      <th className="text-left px-4 py-3 font-bold text-slate-900 border-b border-slate-200">Main Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cert: "Cisco CCNA", focus: "Networking and Cisco technologies" },
                      { cert: "CompTIA Network+", focus: "Vendor-neutral networking" },
                      { cert: "Cisco CCNP", focus: "Advanced professional networking" },
                      { cert: "Cisco CCIE", focus: "Expert-level networking" },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-900">{row.cert}</td>
                        <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>If your goal is specifically to build a career around enterprise networking and Cisco technologies, CCNA is a natural choice.</p>
              <p>If you want a broader vendor-neutral introduction to networking, Network+ may also be worth considering.</p>
            </div>
          </section>

          {/* Section 29: vs AWS */}
          <section id="vs-aws" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification vs AWS Certification
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>These certifications focus on different areas.</p>
              <p><strong className="text-slate-900">Cisco certifications</strong> primarily emphasize networking and related infrastructure technologies.</p>
              <p><strong className="text-slate-900">AWS certifications</strong> focus on cloud computing and Amazon Web Services.</p>
              <p>However, the two skill sets complement each other.</p>
              <p className="text-slate-900 font-medium">For example:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="font-bold text-slate-900">CCNA + AWS</p>
              </div>
              <p>can provide a strong foundation for cloud networking.</p>
            </div>
          </section>

          {/* Section 30: Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Common Cisco Certification Exam Mistakes
            </h2>
            <div className="space-y-4">
              {[
                { title: "Mistake 1: Studying Only Theory", desc: "Networking is practical. Build labs and configure devices." },
                { title: "Mistake 2: Ignoring Subnetting", desc: "Subnetting remains an important networking skill." },
                { title: "Mistake 3: Avoiding Troubleshooting", desc: "Learn how to identify and fix network problems." },
                { title: "Mistake 4: Using Outdated Exam Material", desc: "Cisco regularly updates its certification exams. Always check the current exam version." },
                { title: "Mistake 5: Relying on Exam Dumps", desc: "Avoid unauthorized or leaked exam questions. Use official exam topics, training, labs, and legitimate practice tests." },
                { title: "Mistake 6: Ignoring Automation", desc: "Modern Cisco certifications increasingly include automation, APIs, programmability, and AI-related networking concepts." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg bg-red-50 border border-red-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 31: Checklist */}
          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Cisco Certification Preparation Checklist
            </h2>
            <p className="leading-relaxed mb-6">Before taking a Cisco certification exam, make sure you can:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Explain the OSI and TCP/IP models",
                "Understand IPv4 and IPv6",
                "Perform subnetting",
                "Configure VLANs",
                "Configure trunking",
                "Understand STP",
                "Configure routing",
                "Understand OSPF",
                "Configure DHCP",
                "Understand NAT",
                "Configure ACLs",
                "Secure network devices",
                "Understand wireless networking",
                "Troubleshoot network problems",
                "Understand automation concepts",
                "Work with REST APIs",
                "Understand JSON",
                "Practice with network labs",
                "Review the official Cisco exam topics",
                "Complete practice exams",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-sm">
                  <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 32: FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Frequently Asked Questions About Cisco Certification
            </h2>
            <div className="space-y-3">
              {[
                { q: "What is Cisco Certification?", a: "Cisco Certification is a professional certification program that validates networking, security, automation, and other IT technology skills." },
                { q: "What is the best Cisco certification for beginners?", a: "CCNA is one of the most popular starting points for candidates pursuing professional networking careers." },
                { q: "What is CCNA?", a: "CCNA stands for Cisco Certified Network Associate. It validates foundational networking knowledge, including network fundamentals, network access, IP connectivity, IP services, security, and automation." },
                { q: "How much does the CCNA exam cost?", a: "Cisco currently lists the 200-301 CCNA exam at US$300, before applicable taxes." },
                { q: "How long is the CCNA exam?", a: "The current 200-301 CCNA exam is 120 minutes." },
                { q: "Does CCNA have prerequisites?", a: "No. Cisco currently lists no formal prerequisites for CCNA." },
                { q: "How long is Cisco certification valid?", a: "Cisco certifications generally remain active for three years, subject to Cisco's current certification and recertification policies." },
                { q: "What is CCNP?", a: "CCNP stands for Cisco Certified Network Professional. It is a professional-level Cisco certification available across several technology tracks." },
                { q: "What is CCIE?", a: "CCIE stands for Cisco Certified Internetwork Expert. It is an expert-level certification designed for highly experienced networking professionals." },
                { q: "How much does CCNP certification cost?", a: "Cisco currently lists professional-level core exams at US$400 and concentration exams at US$300. A typical core + concentration combination therefore has exam fees of US$700 before taxes." },
                { q: "How much does CCIE cost?", a: "Cisco currently lists the CCIE Lab exam at US$1,600, before applicable taxes." },
                { q: "Can I take Cisco exams online?", a: "Yes. Cisco states that associate, professional, and expert written exams are available online and in person through its authorized testing arrangements." },
                { q: "Is CCNA still worth it in 2026?", a: "Yes. Cisco continues to position CCNA as a foundational networking certification. The current CCNA v1.1 remains available until February 2, 2027, and the refreshed v2.0 exam begins February 3, 2027." },
                { q: "Should I wait for CCNA v2.0?", a: "If you are already studying for the current CCNA, Cisco recommends continuing toward the current exam rather than unnecessarily waiting. If your planned exam date is after February 3, 2027, prepare against the v2.0 objectives." },
                { q: "What is a Cisco exam voucher?", a: "A Cisco exam voucher is a prepaid authorization that can be redeemed toward an eligible Cisco certification exam, subject to its terms and conditions." },
                { q: "Where can I buy a Cisco exam voucher?", a: "Cisco exams can be purchased through official Cisco/Pearson VUE channels and authorized providers. Techcyfy can also help candidates check current Cisco voucher availability and pricing." },
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

          {/* Section 33: Verdict */}
          <section id="verdict" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Final Verdict: Which Cisco Certification Should You Choose?
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Your ideal Cisco certification depends on your experience and career goals.</p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Beginner", answer: "CCNA" },
                  { title: "Experienced Network Engineer", answer: "CCNP" },
                  { title: "Senior/Expert Network Engineer", answer: "CCIE" },
                  { title: "Cybersecurity Professional", answer: "Cisco Cybersecurity certifications" },
                  { title: "Automation Professional", answer: "Cisco automation/DevNet/CCNP Automation pathways" },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm font-semibold text-sky-600">{item.answer}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-900 font-medium mt-4">A strong networking career progression can look like:</p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="text-sm font-semibold text-slate-900">Networking Fundamentals → CCNA → Hands-On Experience → CCNP → Specialization → CCIE</p>
              </div>
              <p>The most important thing is to combine certification with real technical skills.</p>
              <p>Build labs, configure networks, troubleshoot real problems, learn automation, and understand how modern networks connect with cloud and cybersecurity.</p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Conclusion
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong className="text-slate-900">Cisco Certification</strong> remains a strong option for IT professionals who want to build careers in networking, infrastructure, cybersecurity, cloud networking, and automation.
              </p>
              <p>For beginners, <strong className="text-slate-900">CCNA</strong> provides a broad networking foundation.</p>
              <p>For experienced professionals, <strong className="text-slate-900">CCNP</strong> offers deeper specialization.</p>
              <p>For highly experienced engineers, <strong className="text-slate-900">CCIE</strong> provides an expert-level challenge focused heavily on practical skills.</p>
              <p>
                Cisco's certification ecosystem is also evolving. The upcoming <strong className="text-slate-900">CCNA v2.0</strong>, launching February 3, 2027, introduces a stronger emphasis on practical assessments, troubleshooting, security, and AI while building on the networking fundamentals of the current exam.
              </p>
              <p className="text-slate-900 font-medium">
                Whether you are preparing for CCNA, CCNP, CCIE, Cisco Cybersecurity, DevNet, or another Cisco certification, the best preparation strategy is:
              </p>
              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="text-sm font-semibold text-slate-900">Official Exam Topics + Hands-On Labs + Practice Questions + Real Networking Experience</p>
              </div>
            </div>
          </section>

          {/* Official Resources */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3">Official Cisco Resources</h3>
            <p className="text-sm leading-relaxed mb-3">
              For the latest certification information, exam pricing, exam versions, registration requirements, and certification policies, always check Cisco's official resources.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                "Cisco Certification Overview",
                "Cisco Certification Exams",
                "Cisco CCNA",
                "Cisco CCNP",
                "Cisco CCIE",
                "Cisco Learning Network",
                "Cisco U.",
                "Cisco Networking Academy",
                "Cisco Modeling Labs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0 text-xs" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Cisco's official exam catalog and certification pages should be treated as the authoritative source for current exam requirements and pricing.
            </p>
          </section>

          {/* CTA Section */}
          <section className="p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Ready to Start Your Cisco Certification Journey?
            </h2>
            <p className="mb-6">
              Explore <strong className="text-slate-900">Techcyfy</strong> for more certification guides, networking resources, and technology career guides.
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

          {/* Related Articles */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Related Techcyfy Articles — Cisco SEO Topic Cluster</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              {[
                "CCNA Certification: Complete 200-301 Exam Guide",
                "CCNA Exam Cost and Voucher Guide",
                "CCNA v1.1 vs v2.0: Complete Comparison",
                "CCNA v2.0 Exam Guide",
                "CCNP Enterprise Certification Guide",
                "CCNP ENCOR 350-401 Exam Guide",
                "CCNP Enterprise Exam Cost",
                "CCNP vs CCNA: Which Should You Choose?",
                "CCIE Certification Guide",
                "CCIE Enterprise Infrastructure Guide",
                "Cisco Certification Path for Beginners",
                "Best Cisco Certifications for Network Engineers",
                "Cisco Exam Voucher Guide",
                "Cisco CCNA vs CompTIA Network+",
                "Cisco CCNA vs AWS Certification",
                "Cisco Certification for Cybersecurity",
                "Cisco Network Automation Certification Guide",
                "Cisco Certification Salary and Career Guide",
                "How to Prepare for CCNA 200-301",
                "Best CCNA Practice Labs and Study Resources",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600"
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

export default CiscoCertification;