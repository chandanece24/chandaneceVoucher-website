import React, { useState } from 'react';

const AzureVouchers = () => {
  const [activeExam, setActiveExam] = useState(null);

  // Full exam data from the text
  const exams = [
    {
      id: 'az-900',
      code: 'AZ-900',
      name: 'Microsoft Azure Fundamentals',
      level: 'Fundamentals',
      area: 'Cloud Fundamentals',
      status: 'Available',
      description:
        'One of the most popular entry-level Microsoft Azure certification exams. Designed for candidates who want to demonstrate foundational knowledge of cloud concepts, Azure services, Azure management, security, compliance, and pricing.',
      suitable: [
        'Beginners learning cloud computing',
        'Students entering the IT industry',
        'IT support professionals',
        'Business and technical professionals',
        'Professionals planning to pursue advanced Azure certifications',
      ],
    },
    {
      id: 'az-104',
      code: 'AZ-104',
      name: 'Microsoft Azure Administrator',
      level: 'Associate',
      area: 'Cloud Administration',
      status: 'Available',
      description:
        'Focuses on administering Microsoft Azure environments. Candidates should understand Azure identities and governance, storage, compute resources, networking, monitoring, and management.',
      suitable: [
        'Azure administrators',
        'Cloud administrators',
        'System administrators',
        'Infrastructure engineers',
        'IT professionals moving into cloud administration',
      ],
    },
    {
      id: 'az-305',
      code: 'AZ-305',
      name: 'Designing Microsoft Azure Infrastructure Solutions',
      level: 'Expert',
      area: 'Solutions Architecture',
      status: 'Available',
      description:
        'Designed for professionals who architect cloud and hybrid solutions on Microsoft Azure. Focuses on designing solutions involving compute, networking, storage, monitoring, security, identity, governance, business continuity, disaster recovery, and data platforms.',
      suitable: [
        'Experienced cloud engineers',
        'Solution architects',
        'Infrastructure professionals',
        'Senior IT professionals',
      ],
    },
    {
      id: 'az-400',
      code: 'AZ-400',
      name: 'Designing and Implementing Microsoft DevOps Solutions',
      level: 'Expert',
      area: 'DevOps',
      status: 'Available',
      description:
        'Focuses on designing and implementing DevOps practices across Microsoft technologies. Combines development and infrastructure expertise to enable continuous delivery of value.',
      topics: [
        'Continuous integration',
        'Continuous delivery',
        'Source control',
        'Automation',
        'Testing',
        'Deployment',
        'Monitoring',
        'Security',
        'Collaboration',
        'Azure DevOps',
        'GitHub',
      ],
    },
    {
      id: 'az-500',
      code: 'AZ-500',
      name: 'Microsoft Azure Security Engineer',
      level: 'Associate',
      area: 'Security',
      status: 'Verify current status',
      description:
        'Aimed at professionals working with Microsoft Azure security technologies. Covers identity and access management, platform protection, security operations, data security, network security, and security governance.',
    },
    {
      id: 'az-700',
      code: 'AZ-700',
      name: 'Designing and Implementing Microsoft Azure Networking Solutions',
      level: 'Associate',
      area: 'Networking',
      status: 'Verify current status',
      description:
        'Focuses on designing and implementing networking solutions in Microsoft Azure. Relevant to network engineers, cloud engineers, Azure administrators, infrastructure professionals, and network architects.',
    },
    {
      id: 'az-800',
      code: 'AZ-800',
      name: 'Administering Windows Server Hybrid Core Infrastructure',
      level: 'Associate',
      area: 'Hybrid Infrastructure',
      status: 'Available',
      description:
        'Part of the Windows Server Hybrid Administrator certification. Focuses on administering Windows Server hybrid core infrastructure.',
      note: 'Requires both AZ-800 and AZ-801 for certification.',
    },
    {
      id: 'az-801',
      code: 'AZ-801',
      name: 'Configuring Windows Server Hybrid Advanced Services',
      level: 'Associate',
      area: 'Hybrid Infrastructure',
      status: 'Available',
      description:
        'Part of the Windows Server Hybrid Administrator certification. Focuses on configuring Windows Server hybrid advanced services.',
      note: 'Requires both AZ-800 and AZ-801 for certification.',
    },
    {
      id: 'dp-900',
      code: 'DP-900',
      name: 'Microsoft Azure Data Fundamentals',
      level: 'Fundamentals',
      area: 'Data',
      status: 'Available',
      description:
        'An entry-level data certification designed for candidates who want to demonstrate foundational knowledge of data concepts and Microsoft Azure data services.',
      suitable: [
        'Cloud data professionals',
        'Database beginners',
        'Data analytics enthusiasts',
        'Data engineering aspirants',
        'Azure data services learners',
      ],
    },
    {
      id: 'dp-300',
      code: 'DP-300',
      name: 'Administering Microsoft Azure SQL Solutions',
      level: 'Associate',
      area: 'Database Administration',
      status: 'Verify current status',
      description:
        'Designed for professionals responsible for administering Microsoft Azure SQL solutions. Relevant to database administrators, SQL professionals, Azure database administrators, and cloud database engineers.',
    },
    {
      id: 'sc-900',
      code: 'SC-900',
      name: 'Microsoft Security, Compliance, and Identity Fundamentals',
      level: 'Fundamentals',
      area: 'Security Fundamentals',
      status: 'Available',
      description:
        'Introduces foundational concepts related to Microsoft security, compliance, and identity. Suitable for candidates who want to understand Microsoft\'s security and identity ecosystem before progressing toward more advanced security certifications.',
    },
    {
      id: 'sc-200',
      code: 'SC-200',
      name: 'Microsoft Security Operations Analyst',
      level: 'Associate',
      area: 'Security Operations',
      status: 'Verify current status',
      description:
        'Aimed at security operations professionals working with Microsoft security technologies. Covers security monitoring, threat detection, incident response, Microsoft Defender, and Microsoft Sentinel.',
    },
    {
      id: 'sc-300',
      code: 'SC-300',
      name: 'Microsoft Identity and Access Administrator',
      level: 'Associate',
      area: 'Identity & Access',
      status: 'Verify current status',
      description:
        'Focuses on identity and access administration within Microsoft\'s security ecosystem. Relevant to professionals working with Microsoft Entra ID, identity management, access management, authentication, authorization, and identity governance.',
    },
    {
      id: 'sc-400',
      code: 'SC-400',
      name: 'Microsoft Information Protection Administrator',
      level: 'Associate',
      area: 'Information Protection',
      status: 'Verify current status',
      description:
        'Focuses on information protection, governance, compliance, and data security capabilities within Microsoft\'s ecosystem.',
    },
    {
      id: 'sc-100',
      code: 'SC-100',
      name: 'Microsoft Cybersecurity Architect',
      level: 'Expert',
      area: 'Cybersecurity Architecture',
      status: 'Available',
      description:
        'Designed for experienced cybersecurity professionals who architect security solutions. Covers identity, devices, data, AI, applications, networks, infrastructure, DevOps, governance, risk, compliance, and security operations.',
      suitable: [
        'Experienced cybersecurity architects',
        'Senior security professionals',
        'Security solution designers',
      ],
    },
    {
      id: 'pl-900',
      code: 'PL-900',
      name: 'Microsoft Power Platform Fundamentals',
      level: 'Fundamentals',
      area: 'Low-Code / Business Applications',
      status: 'Verify current status',
      description:
        'Introduces the Microsoft Power Platform. Designed for candidates who want foundational knowledge of Microsoft\'s low-code and business application ecosystem.',
      suitable: [
        'Power Apps users',
        'Power Automate users',
        'Business process automation professionals',
        'Low-code solution builders',
      ],
    },
  ];

  // Retired exams
  const retiredExams = [
    {
      code: 'AZ-204',
      name: 'Developing Solutions for Microsoft Azure',
      retiredDate: 'July 31, 2026',
    },
    {
      code: 'AI-102',
      name: 'Designing and Implementing a Microsoft Azure AI Solution',
      retiredDate: 'June 30, 2026',
    },
    {
      code: 'AI-900',
      name: 'Microsoft Azure AI Fundamentals',
      retiredDate: 'June 30, 2026',
      note: 'Microsoft has introduced newer AI certification pathways. For example, AI-901 — Microsoft Azure AI Fundamentals is currently listed by Microsoft Learn.',
    },
  ];

  const faqs = [
    { q: 'What is a Microsoft Azure exam voucher?', a: 'A Microsoft Azure exam voucher is a prepaid or discounted payment option that can be used toward an eligible Microsoft certification examination, depending on the voucher\'s terms and conditions.' },
    { q: 'Where can I buy a discounted Azure exam voucher?', a: 'You can contact Techcyfy to check current Microsoft Azure exam voucher availability and pricing.' },
    { q: 'Which Azure certification should beginners take?', a: 'For many beginners, AZ-900 — Microsoft Azure Fundamentals is a suitable starting point because it introduces foundational Azure and cloud concepts.' },
    { q: 'What is the AZ-104 exam?', a: 'AZ-104 is the Microsoft Azure Administrator exam and focuses on administering and managing Azure environments.' },
    { q: 'What is the AZ-305 exam?', a: 'AZ-305 is the exam associated with the Microsoft Azure Solutions Architect Expert certification.' },
    { q: 'Is AZ-204 still available?', a: 'No. Microsoft retired AZ-204 on July 31, 2026.' },
    { q: 'Is AI-900 still available?', a: 'No. Microsoft lists AI-900 as retired on June 30, 2026. Candidates should check Microsoft\'s current Azure AI certification pathway instead.' },
    { q: 'Are Microsoft exam codes changed over time?', a: 'Yes. Microsoft periodically updates, replaces, or retires certification examinations. Always verify the current exam code and status before purchasing or scheduling an exam.' },
    { q: 'Can I request a specific Microsoft exam voucher?', a: 'Yes. Send Techcyfy the Microsoft certification exam name or exam code, and the team can check the current voucher availability and price.' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Microsoft Azure Certification Exam Vouchers 2026
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Exam Codes, Certifications &amp; Discounted Voucher Guide
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <span className="font-medium">Looking for Microsoft Azure certification exam vouchers at discounted prices?</span>{' '}
            Techcyfy helps IT professionals, students, developers, administrators, security specialists, and cloud engineers
            find certification exam voucher options for Microsoft Azure and other leading technology certifications.
          </p>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
            <span className="font-semibold">⚠️ Important:</span> Microsoft regularly updates, replaces, and retires
            certification exams. Always verify the current exam status on Microsoft Learn before purchasing or scheduling an exam.
          </div>
        </header>

        {/* Quick Reference: All Exam Codes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular Microsoft Azure Exam Codes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {exams.map((exam) => (
              <div key={exam.id} className="flex items-center gap-2 text-sm">
                <span className="font-mono font-bold text-blue-600">{exam.code}</span>
                <span className="text-gray-600">—</span>
                <span className="text-gray-700 truncate">{exam.name}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded ${
                    exam.status === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {exam.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Retired Exams Warning */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retired Microsoft Exams You Should Know About</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800 mb-3">
              Certification websites must be careful when listing Microsoft exam vouchers because Microsoft periodically retires examinations.
              Several exams appearing in older voucher lists are no longer current.
            </p>
            <div className="space-y-2">
              {retiredExams.map((exam, idx) => (
                <div key={idx} className="bg-white p-3 rounded border border-red-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-bold text-red-600">{exam.code}</span>
                    <span className="text-gray-700">—</span>
                    <span className="text-gray-700">{exam.name}</span>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Retired</span>
                    <span className="text-sm text-gray-500">({exam.retiredDate})</span>
                  </div>
                  {exam.note && <p className="text-sm text-gray-600 mt-1">{exam.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-sm text-red-700 mt-3 font-medium">
              ⚠️ This is why Techcyfy recommends checking the current exam code before purchasing a voucher.
            </p>
          </div>
        </section>

        {/* Certification Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Microsoft Azure Certifications</h2>
          <div className="space-y-4">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="flex flex-wrap items-start justify-between cursor-pointer"
                  onClick={() => setActiveExam(activeExam === exam.id ? null : exam.id)}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">{exam.code}</h3>
                      <span className="text-gray-700 text-lg font-medium">—</span>
                      <span className="text-lg font-medium text-gray-800">{exam.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700">{exam.level}</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700">{exam.area}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          exam.status === 'Available'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {exam.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm mt-1">
                    {activeExam === exam.id ? '▼' : '▶'}
                  </span>
                </div>

                {activeExam === exam.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                    <p className="text-gray-700">{exam.description}</p>

                    {exam.suitable && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Suitable for:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {exam.suitable.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exam.topics && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Key Areas:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {exam.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exam.note && (
                      <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200">
                        ℹ️ {exam.note}
                      </p>
                    )}

                    <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Looking for a {exam.code} voucher?</span>{' '}
                        Contact Techcyfy to check current discounted voucher availability.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Techcyfy */}
        <section className="mb-10 border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Techcyfy for Certification Exam Vouchers?</h2>
          <p className="text-gray-600 mb-4">Techcyfy is focused on helping IT professionals access certification exam voucher options at competitive prices.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Competitive Pricing – Find discounted certification voucher options
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Genuine Voucher Options – Focused on valid certification voucher solutions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Fast Response – Send the exam name or code and ask about current availability
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Multiple Certification Providers – Across major technology platforms
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Professional Support – Get assistance identifying the appropriate exam code and voucher option
            </li>
          </ul>
        </section>

        {/* Steps to Buy */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Buy a Microsoft Azure Exam Voucher</h2>
          <p className="text-gray-600 mb-4">Buying an Azure exam voucher through Techcyfy is simple:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Choose Your Exam</span> – Select the Microsoft certification exam you want to take (AZ-900, AZ-104, AZ-305, AZ-400, AZ-500, AZ-700, DP-900, DP-300, SC-900, SC-200, SC-300, SC-400, SC-100).
            </li>
            <li>
              <span className="font-medium">Send the Exam Code</span> – Contact Techcyfy with your exam name or exam code.
            </li>
            <li>
              <span className="font-medium">Check Current Availability</span> – Voucher availability, pricing, expiration conditions, and eligibility can vary by certification and voucher type.
            </li>
            <li>
              <span className="font-medium">Purchase Your Voucher</span> – After confirming the details, complete your order through Techcyfy.
            </li>
            <li>
              <span className="font-medium">Schedule Your Certification Exam</span> – Follow Microsoft's official certification and exam-scheduling process to book your examination.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions About Microsoft Azure Exam Vouchers</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-gray-800">{faq.q}</h4>
                <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="border-t border-gray-200 pt-6 text-center">
          <h2 className="text-xl font-bold text-gray-900">Start Your Microsoft Azure Certification Journey</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you are preparing for your first cloud certification with <strong>AZ-900</strong>, advancing toward
            expert-level roles with <strong>AZ-305</strong> or <strong>AZ-400</strong>, or pursuing security certifications
            like <strong>SC-100</strong>, there are Microsoft certification pathways for different career goals and experience levels.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Looking for a discounted Microsoft Azure exam voucher? Visit <strong>Techcyfy</strong> and send us your required
            exam name or exam code to check current voucher availability and pricing.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            Techcyfy — Your IT Certification Voucher Partner
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AzureVouchers;