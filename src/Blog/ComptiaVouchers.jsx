import React, { useState } from 'react';

const ComptiaVouchers = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Full certification data from the text
  const certifications = [
    {
      id: 'techplus',
      name: 'CompTIA Tech+',
      code: 'FC0-U71',
      category: 'IT Fundamentals',
      level: 'Beginner',
      description:
        'Designed for people who want to develop a basic understanding of modern technology and IT concepts before progressing into more specialized certifications.',
      topics: [
        'Computing',
        'Hardware',
        'Software',
        'Networking',
        'Cybersecurity',
        'Cloud computing',
        'Data',
        'IT infrastructure',
        'Emerging technologies',
        'Basic troubleshooting concepts',
      ],
      pathway: 'Tech+ → A+ → Network+ / Security+ → Advanced Certification',
    },
    {
      id: 'aplus',
      name: 'CompTIA A+',
      code: '220-1201 & 220-1202',
      category: 'IT Support',
      level: 'Entry-level',
      description:
        'A foundational IT certification designed for technical support and IT operations careers. Requires two exams.',
      core1: '220-1201 – Mobile devices, Networking, Hardware, Virtualization, Cloud computing, Hardware/Network troubleshooting',
      core2: '220-1202 – Operating systems, Security, Software troubleshooting, Operational procedures, IT support, System configuration',
      careers: [
        'IT Support Specialist',
        'Help Desk Technician',
        'Desktop Support Technician',
        'Technical Support Specialist',
        'IT Technician',
        'Field Service Technician',
      ],
    },
    {
      id: 'networkplus',
      name: 'CompTIA Network+',
      code: 'N10-009',
      category: 'Networking',
      level: 'Intermediate',
      description:
        'Validates foundational and practical networking knowledge across modern IT environments.',
      topics: [
        'Networking concepts',
        'Network infrastructure',
        'Network operations',
        'Network security',
        'Network troubleshooting',
        'Wireless networking',
        'Routing and switching',
        'Virtual networking',
        'Cloud networking',
        'Network monitoring',
      ],
      recommended: [
        'Network technicians',
        'Network administrators',
        'IT support professionals',
        'System administrators',
        'Junior network engineers',
        'Cybersecurity professionals',
      ],
    },
    {
      id: 'securityplus',
      name: 'CompTIA Security+',
      code: 'SY0-701',
      category: 'Cybersecurity',
      level: 'Intermediate',
      description:
        'One of the most recognized vendor-neutral cybersecurity certifications. Covers fundamental security concepts and practical cybersecurity skills.',
      topics: [
        'General security concepts',
        'Threats and vulnerabilities',
        'Security architecture',
        'Security operations',
        'Identity and access management',
        'Cryptography',
        'Network security',
        'Incident response',
        'Risk management',
        'Governance',
        'Compliance',
        'Security controls',
      ],
      recommended: [
        'Cybersecurity analysts',
        'Security administrators',
        'SOC analysts',
        'Network security professionals',
        'IT administrators',
        'Security engineers',
        'Entry-level cybersecurity professionals',
      ],
      pathway: 'A+ → Network+ → Security+ → CySA+ / PenTest+ → SecurityX',
    },
    {
      id: 'linuxplus',
      name: 'CompTIA Linux+',
      code: 'XK0-006',
      category: 'Linux / Infrastructure',
      level: 'Intermediate',
      description:
        'Validates practical Linux administration and troubleshooting skills.',
      topics: [
        'Linux system management',
        'Linux security',
        'System configuration',
        'Networking',
        'Shell scripting',
        'Troubleshooting',
        'Containers',
        'Virtualization',
        'System maintenance',
        'Linux automation',
      ],
      ideal: [
        'Linux administrators',
        'System administrators',
        'Cloud engineers',
        'DevOps professionals',
        'Infrastructure engineers',
        'Cybersecurity professionals',
      ],
    },
    {
      id: 'serverplus',
      name: 'CompTIA Server+',
      code: 'SK0-005',
      category: 'Server Infrastructure',
      level: 'Intermediate',
      description:
        'Focuses on server hardware, administration, security, troubleshooting, and disaster recovery.',
      topics: [
        'Server hardware',
        'Server installation',
        'Server management',
        'Virtualization',
        'Storage',
        'Networking',
        'Security',
        'Troubleshooting',
        'Disaster recovery',
        'Business continuity',
      ],
    },
    {
      id: 'cloudplus',
      name: 'CompTIA Cloud+',
      code: 'CV0-004',
      category: 'Cloud Infrastructure',
      level: 'Intermediate',
      description:
        'Focuses on deploying, managing, securing, and troubleshooting cloud infrastructure.',
      topics: [
        'Cloud architecture',
        'Cloud deployment',
        'Virtualization',
        'Cloud security',
        'Resource management',
        'High availability',
        'Disaster recovery',
        'Cloud troubleshooting',
        'Infrastructure operations',
      ],
      recommended: [
        'Cloud administrators',
        'Cloud engineers',
        'Systems administrators',
        'Infrastructure engineers',
        'DevOps professionals',
        'IT professionals',
      ],
    },
    {
      id: 'cloudessentials',
      name: 'CompTIA Cloud Essentials+',
      code: 'CLO-002',
      category: 'Cloud Fundamentals / Business',
      level: 'Beginner',
      description:
        'Focuses on cloud concepts from both technical and business perspectives.',
      topics: [
        'Cloud technologies',
        'Cloud concepts',
        'Cloud services',
        'Business principles',
        'Risk management',
        'Governance',
        'Cloud security',
        'Migration',
        'Cost considerations',
      ],
    },
    {
      id: 'dataplus',
      name: 'CompTIA Data+',
      code: 'DA0-001',
      category: 'Data Analytics',
      level: 'Intermediate',
      description: 'Validates foundational data analytics skills.',
      topics: [
        'Data concepts',
        'Data mining',
        'Data analysis',
        'Data visualization',
        'Statistical concepts',
        'Data quality',
        'Data governance',
        'Reporting',
        'Business decision-making',
      ],
      ideal: [
        'Data analysts',
        'Business analysts',
        'Reporting professionals',
        'Data professionals',
        'IT professionals working with business data',
      ],
    },
    {
      id: 'projectplus',
      name: 'CompTIA Project+',
      code: 'PK0-005',
      category: 'Project Management',
      level: 'Intermediate',
      description:
        'Designed for IT and technology professionals who need project-management knowledge.',
      topics: [
        'Project fundamentals',
        'Project lifecycle',
        'Planning',
        'Project execution',
        'Risk management',
        'Communication',
        'Change management',
        'Documentation',
        'Project closure',
        'Project governance',
      ],
      recommended: [
        'IT project coordinators',
        'Project managers',
        'IT professionals',
        'Team leaders',
        'Business professionals managing technical projects',
      ],
    },
    {
      id: 'cysaplus',
      name: 'CompTIA CySA+',
      code: 'CS0-003',
      category: 'Cybersecurity Analytics',
      level: 'Advanced',
      description:
        'Cybersecurity Analyst – focuses on security analytics, threat detection, vulnerability management, and incident response.',
      topics: [
        'Security operations',
        'Threat detection',
        'Vulnerability management',
        'Security analytics',
        'Incident response',
        'Threat intelligence',
        'Security monitoring',
        'Reporting',
        'Risk management',
      ],
      careers: [
        'SOC Analyst',
        'Cybersecurity Analyst',
        'Security Operations Analyst',
        'Threat Analyst',
        'Vulnerability Analyst',
        'Security Engineer',
      ],
    },
    {
      id: 'pentestplus',
      name: 'CompTIA PenTest+',
      code: 'PT0-003',
      category: 'Penetration Testing / Cybersecurity',
      level: 'Advanced',
      description: 'Focuses on penetration testing and vulnerability assessment.',
      topics: [
        'Planning penetration tests',
        'Reconnaissance',
        'Vulnerability scanning',
        'Exploitation',
        'Web application testing',
        'Network attacks',
        'Cloud testing',
        'Wireless testing',
        'Reporting',
        'Remediation',
        'Communication',
      ],
      recommended: [
        'Penetration testers',
        'Security analysts',
        'Vulnerability analysts',
        'Security consultants',
        'Ethical hackers',
        'Cybersecurity professionals',
      ],
    },
    {
      id: 'securityx',
      name: 'CompTIA SecurityX',
      code: 'CAS-005',
      category: 'Advanced Cybersecurity',
      level: 'Advanced',
      description:
        "CompTIA's advanced cybersecurity certification – the current successor to the CASP+ branding. Intended for experienced cybersecurity professionals working with enterprise security architecture and advanced security operations.",
      topics: [
        'Security architecture',
        'Enterprise security',
        'Security engineering',
        'Risk management',
        'Governance',
        'Security operations',
        'Incident response',
        'Cryptography',
        'Compliance',
        'Advanced security technologies',
      ],
      recommended: [
        'Senior security engineers',
        'Security architects',
        'Cybersecurity managers',
        'Enterprise security professionals',
        'Senior security analysts',
      ],
    },
    {
      id: 'cloudnetx',
      name: 'CompTIA CloudNetX',
      code: 'CNX-001',
      category: 'Cloud + Networking',
      level: 'Advanced',
      description:
        'Focuses on the convergence of networking and cloud infrastructure.',
      topics: [
        'Cloud networking',
        'Network architecture',
        'Hybrid infrastructure',
        'Cloud connectivity',
        'Network security',
        'Infrastructure design',
        'Automation',
        'Troubleshooting',
        'Cloud operations',
      ],
    },
    {
      id: 'secaiplus',
      name: 'CompTIA SecAI+',
      code: 'SAI-001',
      category: 'AI + Cybersecurity',
      level: 'Advanced',
      description:
        'Addresses the growing intersection between artificial intelligence and cybersecurity.',
      topics: [
        'AI security',
        'AI risk',
        'Cybersecurity applications of AI',
        'Secure AI implementation',
        'AI governance',
        'Threat detection',
        'Responsible AI',
        'Security operations',
      ],
      recommended: [
        'Cybersecurity professionals',
        'Security engineers',
        'AI security professionals',
        'Security analysts',
        'Technology leaders',
        'IT professionals working with AI',
      ],
      note: 'Verify current availability before listing SecAI+ as an immediately purchasable exam voucher.',
    },
  ];

  // Career recommendation table data
  const careerRecommendations = [
    { goal: 'New to IT', cert: 'Tech+' },
    { goal: 'IT support', cert: 'A+' },
    { goal: 'Networking', cert: 'Network+' },
    { goal: 'Cybersecurity', cert: 'Security+' },
    { goal: 'Linux administration', cert: 'Linux+' },
    { goal: 'Server administration', cert: 'Server+' },
    { goal: 'Cloud infrastructure', cert: 'Cloud+' },
    { goal: 'Cloud fundamentals', cert: 'Cloud Essentials+' },
    { goal: 'Data analytics', cert: 'Data+' },
    { goal: 'IT project management', cert: 'Project+' },
    { goal: 'Security analytics', cert: 'CySA+' },
    { goal: 'Penetration testing', cert: 'PenTest+' },
    { goal: 'Advanced cybersecurity', cert: 'SecurityX' },
    { goal: 'Cloud + networking', cert: 'CloudNetX' },
    { goal: 'AI + cybersecurity', cert: 'SecAI+' },
  ];

  const faqs = [
    { q: 'What is a CompTIA exam voucher?', a: 'A CompTIA exam voucher is a payment instrument that can be used toward an eligible CompTIA certification examination under the applicable voucher terms.' },
    { q: 'What is the CompTIA A+ exam code?', a: 'The current A+ certification uses two exams: 220-1201 and 220-1202.' },
    { q: 'What is the CompTIA Network+ exam code?', a: 'The current Network+ examination is N10-009.' },
    { q: 'What is the CompTIA Security+ exam code?', a: 'The current Security+ examination is SY0-701.' },
    { q: 'Which CompTIA certification is best for beginners?', a: 'CompTIA Tech+ is a suitable starting point for candidates who are completely new to IT. Candidates seeking an IT-support career can then consider A+.' },
    { q: 'Which CompTIA certification is best for cybersecurity?', a: 'For foundational cybersecurity, Security+ is a strong starting point. Candidates with more experience can progress toward CySA+, PenTest+, and SecurityX.' },
    { q: 'Can CompTIA exams be taken online?', a: 'CompTIA offers online testing options for eligible examinations, subject to current testing policies and availability.' },
    { q: 'How long are CompTIA certifications valid?', a: 'Many CompTIA professional certifications operate under a three-year renewal cycle, while some certifications have different renewal rules.' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            CompTIA Certification Exam Vouchers 2026
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Complete Exam List, Codes, Prices &amp; Certification Guide
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <span className="font-medium">Looking for genuine CompTIA certification exam vouchers at competitive prices?</span>{' '}
            Techcyfy helps IT professionals, cybersecurity specialists, network engineers, cloud professionals,
            data analysts, and technology students find the right CompTIA certification exam voucher for their career goals.
          </p>
        </header>

        {/* Quick Reference: All Codes */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complete CompTIA Exam Code List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-700">{cert.name}:</span>
                <span className="text-blue-600 font-mono">{cert.code}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Recommendation Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Which CompTIA Certification Should You Choose?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Your Career Goal</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Recommended Certification</th>
                </tr>
              </thead>
              <tbody>
                {careerRecommendations.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2">{item.goal}</td>
                    <td className="border border-gray-300 px-4 py-2 font-medium text-blue-700">{item.cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Certification Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">All CompTIA Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="flex flex-wrap items-start justify-between cursor-pointer"
                  onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-blue-600 font-mono">{cert.code}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700">{cert.category}</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700">{cert.level}</span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm mt-1">
                    {activeCert === cert.id ? '▼' : '▶'}
                  </span>
                </div>

                {activeCert === cert.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                    <p className="text-gray-700">{cert.description}</p>

                    {cert.topics && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Key Topics:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {cert.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cert.recommended && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Recommended for:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {cert.recommended.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cert.ideal && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Ideal for:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {cert.ideal.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cert.careers && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Career Opportunities:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {cert.careers.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cert.pathway && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Recommended Pathway:</h4>
                        <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded inline-block">
                          {cert.pathway}
                        </p>
                      </div>
                    )}

                    {cert.core1 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Core 1 (220-1201):</h4>
                        <p className="text-sm text-gray-600">{cert.core1}</p>
                      </div>
                    )}
                    {cert.core2 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Core 2 (220-1202):</h4>
                        <p className="text-sm text-gray-600">{cert.core2}</p>
                      </div>
                    )}

                    {cert.note && (
                      <p className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                        ⚠️ {cert.note}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Voucher Guide */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">CompTIA Exam Voucher Guide</h2>
          <p className="text-gray-700 mb-3">
            A CompTIA exam voucher is a payment instrument that can be used toward an eligible CompTIA certification
            examination under the applicable voucher terms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Exact certification name</li>
              <li>Exact exam code</li>
              <li>Current exam version</li>
              <li>Voucher expiration date</li>
              <li>Exam delivery options</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Testing-center availability</li>
              <li>Online-proctoring availability</li>
              <li>Voucher redemption conditions</li>
              <li>Country or region restrictions</li>
              <li>Current CompTIA pricing</li>
            </ul>
          </div>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
            <span className="font-semibold">Example:</span> If you want to take{' '}
            <span className="font-medium">CompTIA Security+</span>, make sure you are purchasing a voucher for{' '}
            <span className="font-mono">SY0-701</span> rather than an older Security+ examination version.
          </div>
        </section>

        {/* Why Techcyfy */}
        <section className="mb-10 border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Buy CompTIA Exam Vouchers from Techcyfy?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Competitive Pricing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Multiple Certification Options
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Easy Ordering Process
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Professional Support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Current Exam Information
            </li>
          </ul>
        </section>

        {/* Steps to Buy */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Buy a CompTIA Exam Voucher from Techcyfy</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Select Your Certification</span> – Choose your CompTIA certification (e.g., A+, Network+, Security+, CySA+, PenTest+, SecurityX).
            </li>
            <li>
              <span className="font-medium">Confirm the Exam Code</span> – Verify the current exam code (e.g., Security+ — SY0-701).
            </li>
            <li>
              <span className="font-medium">Contact Techcyfy</span> – Send the certification name and exam code to Techcyfy.
            </li>
            <li>
              <span className="font-medium">Confirm Voucher Details</span> – Check price, validity, exam eligibility, redemption terms, and delivery method.
            </li>
            <li>
              <span className="font-medium">Schedule Your Exam</span> – Redeem the eligible voucher according to the applicable CompTIA examination process and schedule your test.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
          <h2 className="text-xl font-bold text-gray-900">Ready to Take Your CompTIA Certification Exam?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you're starting your IT career with <strong>Tech+ or A+</strong>, building networking skills with{' '}
            <strong>Network+</strong>, entering cybersecurity with <strong>Security+</strong>, advancing with{' '}
            <strong>CySA+</strong>, specializing with <strong>PenTest+</strong>, or pursuing{' '}
            <strong>SecurityX</strong>, Techcyfy can help you explore available CompTIA exam voucher options.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Choose your CompTIA certification, confirm the current exam code, and contact Techcyfy for the latest voucher availability and pricing.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            Techcyfy — IT Certification Exam Vouchers Made Simple
            <br />
            <span className="italic">Explore. Choose. Certify.</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ComptiaVouchers;