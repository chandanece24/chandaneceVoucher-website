import React, { useState } from 'react';

const GoogleCloudVouchers = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Certification data from the text
  const certifications = [
    // Foundational
    {
      id: 'cloud-digital-leader',
      name: 'Cloud Digital Leader',
      level: 'Foundational',
      fee: '$99',
      duration: '90 minutes',
      description:
        'Designed for professionals who want to demonstrate foundational knowledge of cloud computing and Google Cloud. Covers digital transformation, Google Cloud products and services, data transformation, AI, infrastructure modernization, application modernization, cloud security, cloud operations, and business use cases.',
      suitable: [
        'Students',
        'Business professionals',
        'IT professionals',
        'Project managers',
        'Sales professionals',
        'Cloud beginners',
        'Professionals working with technical teams',
      ],
      note: 'No technical prerequisites listed by Google Cloud.',
    },
    {
      id: 'genai-leader',
      name: 'Generative AI Leader',
      level: 'Foundational',
      fee: '$99',
      duration: '90 minutes',
      description:
        'A Google Cloud certification focused on business-level understanding of generative artificial intelligence. Suitable for people in any job role, with or without hands-on technical experience.',
      topics: [
        'Generative AI fundamentals',
        'Google Cloud generative AI offerings',
        'Improving generative AI model output',
        'Business strategies for generative AI',
        'Responsible AI concepts',
        'AI adoption',
      ],
      suitable: [
        'Business leaders',
        'Product managers',
        'Technology professionals',
        'AI-curious professionals',
        'Consultants',
        'Project managers',
        'Non-technical professionals',
      ],
    },

    // Associate
    {
      id: 'associate-cloud-engineer',
      name: 'Associate Cloud Engineer',
      level: 'Associate',
      fee: '$125',
      duration: '2 hours',
      format: '50–60 multiple-choice and multiple-select questions',
      experience: '6+ months hands-on Google Cloud experience',
      validity: '3 years',
      description:
        'One of the most popular Google Cloud certifications for cloud infrastructure professionals. Deploys and secures applications, services, and infrastructure, monitors multiple projects, and maintains enterprise solutions.',
      topics: [
        'Set up a cloud solution environment',
        'Plan and implement cloud solutions',
        'Operate cloud solutions',
        'Configure access and security',
      ],
      suitable: [
        'Cloud engineers',
        'System administrators',
        'Infrastructure engineers',
        'DevOps professionals',
        'IT administrators',
        'Cloud support engineers',
      ],
    },
    {
      id: 'associate-workspace-admin',
      name: 'Associate Google Workspace Administrator',
      level: 'Associate',
      description:
        'Validates skills required to manage and secure Google Workspace environments. Responsible for daily management including user accounts, Gmail, Drive, security, compliance, organizational units, groups, permissions, endpoints, and troubleshooting.',
      topics: [
        'User account management',
        'Google Workspace services',
        'Data governance',
        'Compliance',
        'Security policies',
        'Access controls',
        'Endpoint management',
        'Troubleshooting',
      ],
      suitable: [
        'IT administrators',
        'System administrators',
        'Help desk professionals',
        'Technical support engineers',
        'Collaboration engineers',
      ],
      experience: 'Approximately 6 months of Google Workspace Super Admin experience',
    },
    {
      id: 'associate-data-practitioner',
      name: 'Associate Data Practitioner',
      level: 'Associate',
      description:
        'Designed for professionals working with data on Google Cloud. Assesses skills in preparing and ingesting data, data analysis, data visualization, data pipeline orchestration, and data management.',
      topics: [
        'Preparing and ingesting data',
        'Data analysis',
        'Data visualization',
        'Data pipeline orchestration',
        'Data management',
      ],
      suitable: [
        'Data analysts',
        'Junior data engineers',
        'Data professionals',
        'Analytics professionals',
        'AI/ML professionals',
        'Cloud professionals working with data',
      ],
      experience: '6+ months experience working with data on Google Cloud',
    },

    // Professional
    {
      id: 'professional-cloud-architect',
      name: 'Professional Cloud Architect',
      level: 'Professional',
      description:
        'Designed for professionals who design and manage secure, scalable, reliable, and cost-effective cloud architectures. Assesses capabilities including cloud solution architecture, infrastructure provisioning, security and compliance, technical optimization, business-process optimization, architecture implementation, and operational excellence.',
      topics: [
        'Cloud solution architecture',
        'Infrastructure provisioning',
        'Security and compliance',
        'Technical optimization',
        'Business-process optimization',
        'Architecture implementation',
        'Operational excellence',
      ],
      suitable: [
        'Cloud architects',
        'Solutions architects',
        'Enterprise architects',
        'Cloud engineers',
        'Senior infrastructure engineers',
        'Cloud consultants',
      ],
    },
    {
      id: 'professional-cloud-developer',
      name: 'Professional Cloud Developer',
      level: 'Professional',
      description:
        'Validates advanced skills in building and configuring scalable and secure cloud-native applications. Assesses the ability to design scalable applications, build and test applications, configure applications for deployment, and integrate applications with Google Cloud services.',
      topics: [
        'Design scalable applications',
        'Build and test applications',
        'Configure applications for deployment',
        'Integrate applications with Google Cloud services',
      ],
      suitable: [
        'Software developers',
        'Full-stack developers',
        'Backend developers',
        'Cloud developers',
        'Application engineers',
        'DevOps developers',
      ],
      note: 'Google Cloud also incorporates AI-powered development capabilities and generative AI APIs into the current role description.',
    },
    {
      id: 'professional-data-engineer',
      name: 'Professional Data Engineer',
      level: 'Professional',
      description:
        'Validates advanced skills for designing, building, deploying, and managing data processing systems on Google Cloud.',
      topics: [
        'Data architecture',
        'Data pipelines',
        'Data processing',
        'Data storage',
        'Data security',
        'Data governance',
        'Analytics',
        'Machine learning integration',
      ],
      suitable: ['Experienced data engineers', 'Cloud data professionals'],
    },
    {
      id: 'professional-cloud-database-engineer',
      name: 'Professional Cloud Database Engineer',
      level: 'Professional',
      description:
        'Focuses on designing, creating, managing, and troubleshooting Google Cloud database solutions. Validates the ability to design scalable and highly available database solutions, manage multiple database solutions, migrate data solutions, and deploy scalable and highly available databases.',
      topics: [
        'Design scalable and highly available database solutions',
        'Manage multiple database solutions',
        'Migrate data solutions',
        'Deploy scalable and highly available databases',
      ],
      suitable: [
        'Database administrators',
        'Database engineers',
        'Cloud database engineers',
        'Data architects',
        'Cloud architects',
      ],
    },
    {
      id: 'professional-cloud-devops-engineer',
      name: 'Professional Cloud DevOps Engineer',
      level: 'Professional',
      description:
        'Validates advanced capabilities related to development, deployment, reliability, automation, monitoring, and cloud operations.',
      topics: [
        'CI/CD',
        'Automation',
        'Infrastructure',
        'Deployment',
        'Reliability engineering',
        'Monitoring',
        'Observability',
        'Performance optimization',
        'Incident management',
      ],
      suitable: [
        'DevOps engineers',
        'SRE professionals',
        'Cloud engineers',
        'Platform engineers',
      ],
    },
    {
      id: 'professional-cloud-security-engineer',
      name: 'Professional Cloud Security Engineer',
      level: 'Professional',
      description:
        'Focuses on designing, developing, and managing secure solutions on Google Cloud.',
      topics: [
        'Identity and access management',
        'Network security',
        'Data protection',
        'Security architecture',
        'Compliance',
        'Security monitoring',
        'Infrastructure security',
        'Cloud governance',
      ],
      suitable: [
        'Cloud security engineers',
        'Cybersecurity professionals',
        'Security architects',
        'Cloud architects',
        'Security consultants',
      ],
    },
    {
      id: 'professional-cloud-network-engineer',
      name: 'Professional Cloud Network Engineer',
      level: 'Professional',
      description:
        'Validates advanced networking skills on Google Cloud. Assesses capabilities including designing VPC networks, implementing VPC networks, managed network services, hybrid connectivity, multi-cloud connectivity, network monitoring, network troubleshooting, and cloud network security.',
      topics: [
        'Designing VPC networks',
        'Implementing VPC networks',
        'Managed network services',
        'Hybrid connectivity',
        'Multi-cloud connectivity',
        'Network monitoring',
        'Network troubleshooting',
        'Cloud network security',
      ],
      suitable: [
        'Network engineers',
        'Cloud network engineers',
        'Network architects',
        'Infrastructure engineers',
        'Cloud security engineers',
      ],
    },
    {
      id: 'professional-ml-engineer',
      name: 'Professional Machine Learning Engineer',
      level: 'Professional',
      description:
        'Validates advanced skills for designing, deploying, operating, and optimizing AI and machine learning solutions on Google Cloud.',
      topics: [
        'AI solution architecture',
        'Machine learning models',
        'Data and model management',
        'Model serving',
        'ML pipelines',
        'Automation',
        'MLOps',
        'Monitoring',
        'Generative AI',
      ],
      suitable: [
        'Machine learning engineers',
        'AI engineers',
        'Data scientists',
        'ML developers',
        'MLOps engineers',
        'AI architects',
      ],
      note: 'Google Cloud has updated this examination to reflect current AI and Google Cloud platform changes, including generative AI capabilities.',
    },
    {
      id: 'professional-security-ops-engineer',
      name: 'Professional Security Operations Engineer',
      level: 'Professional',
      description:
        'Focused on detecting, investigating, and responding to security threats. Covers platform operations, data management, threat hunting, detection engineering, incident response, and observability.',
      topics: [
        'Platform operations',
        'Data management',
        'Threat hunting',
        'Detection engineering',
        'Incident response',
        'Observability',
      ],
      suitable: [
        'Security operations engineers',
        'SOC professionals',
        'Threat hunters',
        'Detection engineers',
        'Incident responders',
        'Cloud security engineers',
      ],
      experience: '3+ years security industry experience, including at least 1 year using Google Cloud security tooling',
    },
    {
      id: 'professional-agentic-architect',
      name: 'Professional Agentic Architect — Beta',
      level: 'Professional',
      status: 'Beta',
      fee: '$120',
      duration: '3 hours',
      format: 'Approximately 80 multiple-choice questions',
      betaOpens: 'September 3, 2026',
      description:
        'A new Google Cloud Professional certification for professionals designing and managing autonomous AI-driven agentic workflows.',
      topics: [
        'Building agents with low-code tools',
        'Coding agents',
        'Custom agents',
        'Agentic workflow evaluation',
        'Agentic workflow deployment',
        'Security',
        'Governance',
        'Scalability',
        'Reliability',
        'Performance',
        'Cost optimization',
      ],
      note: 'Google Cloud states that vouchers are accepted for beta exam attempts.',
    },
  ];

  // Career recommendation table
  const careerRecommendations = [
    { goal: 'Google Cloud beginner', cert: 'Cloud Digital Leader' },
    { goal: 'Business + cloud knowledge', cert: 'Cloud Digital Leader' },
    { goal: 'Generative AI fundamentals', cert: 'Generative AI Leader' },
    { goal: 'Cloud engineering', cert: 'Associate Cloud Engineer' },
    { goal: 'Google Workspace administration', cert: 'Associate Google Workspace Administrator' },
    { goal: 'Data fundamentals', cert: 'Associate Data Practitioner' },
    { goal: 'Cloud architecture', cert: 'Professional Cloud Architect' },
    { goal: 'Cloud development', cert: 'Professional Cloud Developer' },
    { goal: 'Data engineering', cert: 'Professional Data Engineer' },
    { goal: 'Database engineering', cert: 'Professional Cloud Database Engineer' },
    { goal: 'DevOps / SRE', cert: 'Professional Cloud DevOps Engineer' },
    { goal: 'Cloud security', cert: 'Professional Cloud Security Engineer' },
    { goal: 'Cloud networking', cert: 'Professional Cloud Network Engineer' },
    { goal: 'Machine learning / AI', cert: 'Professional Machine Learning Engineer' },
    { goal: 'Security operations / SOC', cert: 'Professional Security Operations Engineer' },
    { goal: 'Agentic AI architecture', cert: 'Professional Agentic Architect — Beta' },
  ];

  const faqs = [
    { q: 'What is a Google Cloud certification exam voucher?', a: 'A Google Cloud exam voucher is a payment option that can be applied toward an eligible Google Cloud certification examination according to its terms.' },
    { q: 'Where can I buy a discounted Google Cloud exam voucher?', a: 'You can contact Techcyfy to check current Google Cloud certification voucher availability and pricing.' },
    { q: 'Does Google Cloud use exam codes like AZ-900 or SAA-C03?', a: 'Google Cloud\'s official certification pages generally identify exams by their certification names rather than a universal alphanumeric exam-code system.' },
    { q: 'What is the Associate Cloud Engineer exam?', a: 'Associate Cloud Engineer is an Associate-level certification that validates practical skills for deploying, securing, monitoring, and maintaining Google Cloud solutions.' },
    { q: 'What is the Professional Cloud Architect certification?', a: 'Professional Cloud Architect validates advanced skills in designing, provisioning, implementing, and managing Google Cloud architectures.' },
    { q: 'Which Google Cloud certification is best for beginners?', a: 'Cloud Digital Leader is designed for foundational cloud knowledge and has no technical prerequisites.' },
    { q: 'Which Google Cloud certification is best for cybersecurity?', a: 'Professional Cloud Security Engineer is designed for cloud security, while Professional Security Operations Engineer focuses on security operations.' },
    { q: 'What is Professional Agentic Architect?', a: 'A new Google Cloud Professional certification being introduced as a beta examination in September 2026, focusing on designing and managing autonomous AI agent workflows.' },
    { q: 'Can I use a voucher for a Google Cloud beta exam?', a: 'Google Cloud states that vouchers are accepted for Professional Agentic Architect beta attempts.' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Google Cloud Exam Vouchers: Complete Guide to Discounted Google Cloud Certification Vouchers

          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Complete Exam List, Certification Guide &amp; Discounted Vouchers
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <span className="font-medium">Looking for discounted Google Cloud certification exam vouchers?</span>{' '}
            Techcyfy helps IT professionals, cloud engineers, developers, data professionals, cybersecurity specialists,
            AI engineers, network engineers, system administrators, and business professionals find Google Cloud
            certification voucher options.
          </p>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
            <span className="font-semibold">⚠️ Important:</span> Google Cloud updates certification exams and certification
            paths regularly. Always verify the current certification status, exam requirements, and voucher terms before
            purchasing or scheduling an exam.
          </div>
        </header>

        {/* Quick Reference: All Certifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complete Google Cloud Certification List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center gap-2 text-sm">
                <span className="text-gray-700 truncate">{cert.name}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${cert.level === 'Foundational'
                      ? 'bg-blue-100 text-blue-700'
                      : cert.level === 'Associate'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                >
                  {cert.level}
                </span>
                {cert.status === 'Beta' && (
                  <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded flex-shrink-0">Beta</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: Google Cloud identifies exams by certification name rather than alphanumeric codes.
          </p>
        </section>

        {/* Career Recommendation Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Which Google Cloud Certification Should You Choose?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Career Goal</th>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Google Cloud Certifications</h2>
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
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${cert.level === 'Foundational'
                            ? 'bg-blue-100 text-blue-700'
                            : cert.level === 'Associate'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-purple-100 text-purple-700'
                          }`}
                      >
                        {cert.level}
                      </span>
                      {cert.status === 'Beta' && (
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Beta</span>
                      )}
                    </div>
                    {cert.fee && (
                      <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                        <span>Fee: {cert.fee}</span>
                        {cert.duration && <span>Duration: {cert.duration}</span>}
                      </div>
                    )}
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

                    {cert.suitable && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Suitable for:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                          {cert.suitable.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cert.experience && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Recommended Experience:</h4>
                        <p className="text-sm text-gray-600">{cert.experience}</p>
                      </div>
                    )}

                    {cert.format && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Exam Format:</h4>
                        <p className="text-sm text-gray-600">{cert.format}</p>
                      </div>
                    )}

                    {cert.validity && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Certification Validity:</h4>
                        <p className="text-sm text-gray-600">{cert.validity}</p>
                      </div>
                    )}

                    {cert.betaOpens && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Beta Opens:</h4>
                        <p className="text-sm text-gray-600">{cert.betaOpens}</p>
                      </div>
                    )}

                    {cert.note && (
                      <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200">
                        ℹ️ {cert.note}
                      </p>
                    )}

                    <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Looking for a {cert.name} voucher?</span>{' '}
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Techcyfy for Google Cloud Exam Vouchers?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Competitive Voucher Pricing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Multiple Google Cloud Certifications
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Easy Exam Selection
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Professional Support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Current Certification Information
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">
            Always verify the certification status and exam requirements with Google Cloud before purchase.
          </p>
        </section>

        {/* Steps to Buy */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Buy a Google Cloud Certification Exam Voucher</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Choose Your Certification</span> – Select the Google Cloud certification that matches your career goal (e.g., Associate Cloud Engineer, Professional Cloud Architect).
            </li>
            <li>
              <span className="font-medium">Contact Techcyfy</span> – Send the exact certification name to Techcyfy.
            </li>
            <li>
              <span className="font-medium">Check Current Voucher Availability</span> – Techcyfy can check the available voucher option and current pricing.
            </li>
            <li>
              <span className="font-medium">Review Voucher Terms</span> – Verify certification name, exam eligibility, voucher validity, expiration date, restrictions, and redemption conditions.
            </li>
            <li>
              <span className="font-medium">Schedule Your Google Cloud Exam</span> – After obtaining an eligible voucher, follow Google's official certification registration process.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions About Google Cloud Exam Vouchers</h2>
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
          <h2 className="text-xl font-bold text-gray-900">Start Your Google Cloud Certification Journey</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you are starting with <strong>Cloud Digital Leader</strong>, developing practical cloud engineering
            skills with <strong>Associate Cloud Engineer</strong>, designing enterprise architectures with{' '}
            <strong>Professional Cloud Architect</strong>, or building AI solutions with{' '}
            <strong>Professional Machine Learning Engineer</strong>, Google Cloud offers certification paths for a wide
            range of technology careers.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Looking for a specific Google Cloud voucher? Send Techcyfy the <strong>Google Cloud Certification Name</strong>{' '}
            (e.g., Professional Cloud Architect, Associate Cloud Engineer) and ask for the latest voucher availability and pricing.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            Techcyfy — Your IT Certification Voucher Partner
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GoogleCloudVouchers;