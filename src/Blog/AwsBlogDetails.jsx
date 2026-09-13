import React, { useState } from 'react';
import SEO from "../components/SEO"
const AwsVouchers = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Certification data from the text
  const certifications = [
    // Foundational
    {
      id: 'cloud-practitioner',
      name: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C02',
      level: 'Foundational',
      fee: '$100',
      duration: '90 minutes',
      description:
        'Designed for individuals who want to demonstrate broad knowledge of AWS Cloud, independent of a specific technical job role. Covers cloud concepts, AWS global infrastructure, security and compliance, AWS technologies and services, cloud economics, billing and pricing, and AWS support.',
      domains: ['Cloud Concepts', 'Security and Compliance', 'Cloud Technology and Services', 'Billing, Pricing, and Support'],
      suitable: [
        'IT beginners',
        'Students',
        'Business professionals',
        'Non-technical professionals',
        'Career changers',
        'Cloud beginners',
      ],
      pathway: 'Cloud Practitioner → Associate Certification → Professional/Specialty Certification',
    },
    {
      id: 'ai-practitioner',
      name: 'AWS Certified AI Practitioner',
      code: 'AIF-C01',
      level: 'Foundational',
      description:
        'Validates foundational knowledge of artificial intelligence, machine learning, generative AI, foundation models, AI use cases, responsible AI, and AWS AI services.',
      suitable: [
        'AI beginners',
        'Business professionals',
        'Developers',
        'Product professionals',
        'IT professionals',
        'Cloud professionals',
      ],
    },

    // Associate
    {
      id: 'solutions-architect-associate',
      name: 'AWS Certified Solutions Architect – Associate',
      code: 'SAA-C03',
      level: 'Associate',
      fee: '$150',
      duration: '130 minutes',
      description:
        'One of the most popular AWS certifications for cloud professionals. Validates skills in designing distributed systems and AWS solutions using the AWS Well-Architected Framework.',
      topics: [
        'AWS architecture',
        'Compute',
        'Storage',
        'Databases',
        'Networking',
        'Security',
        'High availability',
        'Disaster recovery',
        'Scalability',
        'Cost optimization',
        'Serverless architecture',
        'Containers',
        'Cloud migration',
      ],
      suitable: [
        'Cloud engineers',
        'Solutions architects',
        'System administrators',
        'DevOps professionals',
        'Software developers',
        'IT professionals',
      ],
      pathway: 'Cloud Practitioner → SAA-C03 → SAP-C02/SAP-C03',
    },
    {
      id: 'developer-associate',
      name: 'AWS Certified Developer – Associate',
      code: 'DVA-C02 → DVA-C03',
      level: 'Associate',
      fee: '$150',
      duration: '130 minutes',
      description:
        'Validates skills in AWS application development, deployment, testing, troubleshooting, optimization, AWS services, security, CI/CD, databases, and serverless applications.',
      topics: [
        'AWS application development',
        'Deployment',
        'Testing',
        'Troubleshooting',
        'Optimization',
        'AWS services',
        'Security',
        'CI/CD',
        'Databases',
        'Serverless applications',
      ],
      suitable: [
        'AWS developers',
        'Software developers',
        'Cloud developers',
        'DevOps engineers',
        'Application developers',
        'Backend developers',
      ],
      note: 'DVA-C03 registration opens October 27, 2026. Last day for DVA-C02 is November 30, 2026. DVA-C03 GA begins December 1, 2026.',
      dates: {
        registration: 'October 27, 2026',
        lastDay: 'November 30, 2026',
        ga: 'December 1, 2026',
      },
    },
    {
      id: 'cloudops-engineer',
      name: 'AWS Certified CloudOps Engineer – Associate',
      code: 'SOA-C03',
      level: 'Associate',
      fee: '$150',
      duration: '130 minutes',
      description:
        'Validates technical skills for deploying, managing, and operating workloads on AWS. Positions toward professionals performing systems-administrator and cloud operations responsibilities.',
      topics: [
        'Deployment',
        'AWS operations',
        'Monitoring',
        'Security',
        'Networking',
        'Troubleshooting',
        'Infrastructure management',
        'Automation',
        'Reliability',
        'Business continuity',
      ],
      suitable: [
        'Cloud administrators',
        'System administrators',
        'Cloud operations engineers',
        'DevOps professionals',
        'Infrastructure engineers',
      ],
    },
    {
      id: 'data-engineer-associate',
      name: 'AWS Certified Data Engineer – Associate',
      code: 'DEA-C01',
      level: 'Associate',
      fee: '$150',
      duration: '130 minutes',
      description:
        'Validates skills in implementing data pipelines and data stores on AWS.',
      topics: [
        'Data ingestion',
        'Data transformation',
        'Data pipelines',
        'Data stores',
        'Data security',
        'Data monitoring',
        'Data quality',
        'Cost optimization',
        'Performance optimization',
      ],
      suitable: [
        'Data engineers',
        'Cloud data professionals',
        'Analytics engineers',
        'Data platform engineers',
        'Developers working with AWS data services',
      ],
    },
    {
      id: 'ml-engineer-associate',
      name: 'AWS Certified Machine Learning Engineer – Associate',
      code: 'MLA-C01 → MLA-C02',
      level: 'Associate',
      fee: '$150 ($75 beta for ME1-C02)',
      duration: '130 minutes (170 minutes beta)',
      description:
        'Designed for professionals who build and operationalize ML and generative AI solutions in production.',
      topics: [
        'Generative AI',
        'Foundation models',
        'Large language models',
        'Amazon Bedrock',
        'RAG architectures',
        'Agentic AI',
        'Responsible AI',
        'Traditional machine learning',
        'ML operations',
      ],
      suitable: [
        'Machine learning engineers',
        'MLOps engineers',
        'Data engineers',
        'Data scientists',
        'LLMOps engineers',
        'AI developers',
        'ML architects',
      ],
      note: 'MLA-C02 beta registration opened September 1, 2026. MLA-C01 available until September 28, 2026. Standard MLA-C02 expected in early 2027.',
      beta: {
        code: 'ME1-C02',
        fee: '$75',
        duration: '170 minutes',
        questions: '85',
      },
    },

    // Professional
    {
      id: 'solutions-architect-professional',
      name: 'AWS Certified Solutions Architect – Professional',
      code: 'SAP-C02 → SAP-C03',
      level: 'Professional',
      fee: '$300',
      duration: '180 minutes',
      description:
        'Designed for experienced cloud professionals performing complex technical tasks. SAP-C03 expands the role to include modern cloud-native architecture, GenAI and agentic architectures, resilience, DevSecOps automation, and post-quantum cryptography.',
      domains: [
        'Cloud-native architecture design and implementation',
        'Security, compliance, and governance',
        'Cost-optimized architecture design',
        'Resilience, migration, and business continuity',
        'Operational excellence and automation',
      ],
      suitable: [
        'Senior solutions architects',
        'Cloud architects',
        'Enterprise architects',
        'Cloud engineers',
        'Technical leads',
      ],
      dates: {
        registration: 'October 27, 2026',
        lastDay: 'November 16, 2026',
        ga: 'November 17, 2026',
      },
    },
    {
      id: 'devops-engineer',
      name: 'AWS Certified DevOps Engineer – Professional',
      code: 'DOP-C02',
      level: 'Professional',
      fee: '$300',
      duration: '180 minutes',
      description:
        'Validates advanced skills in provisioning, operating, and managing distributed application systems on AWS.',
      topics: [
        'CI/CD',
        'Infrastructure as code',
        'Monitoring',
        'Logging',
        'Deployment automation',
        'Security',
        'Reliability',
        'Incident response',
        'Automation',
        'Cloud operations',
      ],
      suitable: [
        'DevOps engineers',
        'Cloud engineers',
        'Platform engineers',
        'SRE professionals',
        'Senior developers',
        'Infrastructure engineers',
      ],
    },
    {
      id: 'genai-developer',
      name: 'AWS Certified Generative AI Developer – Professional',
      code: 'AIP-C01',
      level: 'Professional',
      fee: '$300',
      duration: '180 minutes',
      description:
        'Validates advanced technical skills for designing, implementing, and deploying generative AI solutions on AWS.',
      topics: [
        'Generative AI applications',
        'Foundation models',
        'Amazon Bedrock',
        'AI application development',
        'Model integration',
        'Security',
        'Responsible AI',
        'Deployment',
        'Monitoring',
        'Optimization',
      ],
      suitable: [
        'AI developers',
        'Generative AI engineers',
        'Cloud developers',
        'ML engineers',
        'Software engineers',
        'AI solution architects',
      ],
    },

    // Specialty
    {
      id: 'security-specialty',
      name: 'AWS Certified Security – Specialty',
      code: 'SCS-C03',
      level: 'Specialty',
      fee: '$300',
      duration: '170 minutes',
      description:
        'Validates expertise in securing AWS workloads and applications.',
      domains: [
        { name: 'Detection', weight: '16%' },
        { name: 'Incident Response', weight: '14%' },
        { name: 'Infrastructure Security', weight: '18%' },
        { name: 'Identity and Access Management', weight: '20%' },
        { name: 'Data Protection', weight: '18%' },
        { name: 'Security Foundations and Governance', weight: '14%' },
      ],
      topics: [
        'IAM',
        'Data protection',
        'Encryption',
        'Network security',
        'Infrastructure security',
        'Security monitoring',
        'Incident response',
        'Governance',
        'Compliance',
        'Vulnerability management',
      ],
      suitable: [
        'Cloud security engineers',
        'Security engineers',
        'Cybersecurity professionals',
        'Security architects',
        'SOC professionals',
        'AWS administrators',
      ],
    },
    {
      id: 'networking-specialty',
      name: 'AWS Certified Advanced Networking – Specialty',
      code: 'ANS-C01',
      level: 'Specialty',
      fee: '$300',
      duration: '170 minutes',
      description:
        'Validates advanced skills in designing and implementing AWS and hybrid IT network architectures.',
      topics: [
        'AWS networking',
        'Hybrid connectivity',
        'Network architecture',
        'Routing',
        'DNS',
        'Network security',
        'Automation',
        'High availability',
        'Troubleshooting',
        'Large-scale networking',
      ],
      suitable: [
        'Network engineers',
        'Cloud network engineers',
        'Network architects',
        'Solutions architects',
        'Infrastructure engineers',
      ],
    },
  ];

  // Career recommendation table
  const careerRecommendations = [
    { goal: 'New to AWS', cert: 'Cloud Practitioner – CLF-C02' },
    { goal: 'AI fundamentals', cert: 'AI Practitioner – AIF-C01' },
    { goal: 'Cloud architecture', cert: 'Solutions Architect – Associate – SAA-C03' },
    { goal: 'AWS development', cert: 'Developer – Associate – DVA-C02/DVA-C03' },
    { goal: 'Cloud operations', cert: 'CloudOps Engineer – Associate – SOA-C03' },
    { goal: 'AWS data engineering', cert: 'Data Engineer – Associate – DEA-C01' },
    { goal: 'Machine learning', cert: 'ML Engineer – Associate – MLA-C01/MLA-C02' },
    { goal: 'Senior architecture', cert: 'Solutions Architect – Professional – SAP-C02/SAP-C03' },
    { goal: 'AWS DevOps', cert: 'DevOps Engineer – Professional – DOP-C02' },
    { goal: 'Generative AI development', cert: 'Generative AI Developer – Professional – AIP-C01' },
    { goal: 'AWS security', cert: 'Security – Specialty – SCS-C03' },
    { goal: 'Advanced networking', cert: 'Advanced Networking – Specialty – ANS-C01' },
  ];

  const faqs = [
    { q: 'What is an AWS exam voucher?', a: 'An AWS exam voucher is a payment voucher that can be used toward an eligible AWS Certification exam according to the voucher\'s terms and conditions.' },
    { q: 'What is the AWS Cloud Practitioner exam code?', a: 'The current AWS Cloud Practitioner exam is CLF-C02.' },
    { q: 'What is the AWS AI Practitioner exam code?', a: 'The AWS AI Practitioner exam code is AIF-C01.' },
    { q: 'What is the AWS Solutions Architect Associate exam code?', a: 'The current exam code is SAA-C03.' },
    { q: 'What is the AWS Developer Associate exam code?', a: 'The current exam is DVA-C02, with DVA-C03 scheduled to become generally available on December 1, 2026.' },
    { q: 'What is the AWS CloudOps Engineer Associate exam code?', a: 'The exam code is SOA-C03.' },
    { q: 'What is the AWS Data Engineer Associate exam code?', a: 'The exam code is DEA-C01.' },
    { q: 'What is the AWS Machine Learning Engineer Associate exam code?', a: 'The current exam is MLA-C01, while MLA-C02 is the updated exam currently entering beta.' },
    { q: 'What is the AWS Solutions Architect Professional exam code?', a: 'The current exam is SAP-C02. AWS has announced SAP-C03, with general availability beginning November 17, 2026.' },
    { q: 'What is the AWS DevOps Engineer Professional exam code?', a: 'The current exam code is DOP-C02.' },
    { q: 'What is the AWS Generative AI Developer Professional exam code?', a: 'The exam code is AIP-C01.' },
    { q: 'What is the AWS Security Specialty exam code?', a: 'The current Security – Specialty exam is SCS-C03.' },
    { q: 'What is the AWS Advanced Networking Specialty exam code?', a: 'The exam code is ANS-C01.' },
    { q: 'Which AWS certification is best for beginners?', a: 'AWS Certified Cloud Practitioner — CLF-C02 is designed to validate broad AWS Cloud knowledge and can be a suitable starting point for beginners.' },
    { q: 'Which AWS certification is best for cybersecurity?', a: 'AWS Certified Security – Specialty (SCS-C03) is designed specifically around securing AWS workloads and applications.' },
    { q: 'How long is an AWS certification valid?', a: 'AWS certifications generally have a three-year validity period, with recertification options depending on the certification.' },
  ];

  return (


    <>
      <SEO
        title="AWS Exam Vouchers"
        description="Learn about AWS certification exam vouchers, available AWS exams, voucher options and certification resources."
        keywords="AWS exam voucher, AWS certification voucher, AWS voucher price, AWS certification"
        canonicalUrl="https://techcyfy.com/blog/aws-exam-vouchers"
      />
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              <h1>
                AWS Exam Vouchers: Complete Guide to Discounted AWS Certification Vouchers
              </h1>
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Complete AWS Exam List, Codes, Costs &amp; Certification Guide
            </p>
            <p className="text-sm text-gray-500 mt-3">
              <span className="font-medium">Looking for AWS certification exam vouchers at competitive prices?</span>{' '}
              Techcyfy helps IT professionals, cloud engineers, developers, architects, DevOps professionals, data engineers,
              cybersecurity specialists, and technology students explore AWS certification exam voucher options for globally
              recognized AWS certifications.
            </p>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
              <span className="font-semibold">⚠️ 2026 Update:</span> AWS is currently updating several certification exams.
              Candidates should verify the exact exam code and availability before purchasing or scheduling an exam. AWS has
              announced updates to <strong>MLA-C02, SAP-C03, and DVA-C03</strong>.
            </div>
          </header>

          {/* Quick Reference: All Exam Codes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AWS Certification Exam Codes at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-center gap-2 text-sm">
                  <span className="font-mono font-bold text-blue-600">{cert.code}</span>
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-700 truncate">{cert.name.replace('AWS Certified ', '')}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${cert.level === 'Foundational'
                      ? 'bg-blue-100 text-blue-700'
                      : cert.level === 'Associate'
                        ? 'bg-green-100 text-green-700'
                        : cert.level === 'Professional'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                  >
                    {cert.level}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Career Recommendation Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Which AWS Certification Should You Choose?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Career Goal</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Recommended AWS Certification</th>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">All AWS Certifications</h2>
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
                        <span className="font-mono text-blue-600 text-sm font-semibold">{cert.code}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${cert.level === 'Foundational'
                            ? 'bg-blue-100 text-blue-700'
                            : cert.level === 'Associate'
                              ? 'bg-green-100 text-green-700'
                              : cert.level === 'Professional'
                                ? 'bg-purple-100 text-purple-700'
                                : 'bg-orange-100 text-orange-700'
                            }`}
                        >
                          {cert.level}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                        {cert.fee && <span>Fee: {cert.fee}</span>}
                        {cert.duration && <span>Duration: {cert.duration}</span>}
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm mt-1">
                      {activeCert === cert.id ? '▼' : '▶'}
                    </span>
                  </div>

                  {activeCert === cert.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                      <p className="text-gray-700">{cert.description}</p>

                      {cert.domains && (
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">Exam Domains:</h4>
                          {typeof cert.domains[0] === 'string' ? (
                            <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                              {cert.domains.map((domain, i) => (
                                <li key={i}>{domain}</li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                              {cert.domains.map((domain, i) => (
                                <li key={i}>
                                  {domain.name} — <span className="font-medium">{domain.weight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

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
                          <h4 className="font-semibold text-gray-800 text-sm">Recommended for:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            {cert.suitable.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {cert.pathway && (
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">Career Pathway:</h4>
                          <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded inline-block">
                            {cert.pathway}
                          </p>
                        </div>
                      )}

                      {cert.dates && (
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">Important Dates:</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Registration opens: <strong>{cert.dates.registration}</strong></p>
                            <p>• Last day for current exam: <strong>{cert.dates.lastDay}</strong></p>
                            <p>• New exam GA: <strong>{cert.dates.ga}</strong></p>
                          </div>
                        </div>
                      )}

                      {cert.beta && (
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">Beta Information:</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>• Beta Exam Code: <strong className="font-mono">{cert.beta.code}</strong></p>
                            <p>• Beta Fee: <strong>{cert.beta.fee}</strong></p>
                            <p>• Beta Duration: <strong>{cert.beta.duration}</strong></p>
                            <p>• Beta Questions: <strong>{cert.beta.questions}</strong></p>
                          </div>
                        </div>
                      )}

                      {cert.note && (
                        <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-200">
                          ℹ️ {cert.note}
                        </p>
                      )}

                      <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Looking for a {cert.code} voucher?</span>{' '}
                          Contact Techcyfy to check current discounted voucher availability.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Voucher Guide */}
          <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">What Is an AWS Exam Voucher?</h2>
            <p className="text-gray-700 mb-3">
              An <strong>AWS exam voucher</strong> is a payment voucher that can be used toward an eligible AWS Certification
              exam according to the voucher's terms and conditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Certification name</li>
                <li>Exam code</li>
                <li>Current exam version</li>
                <li>Voucher validity</li>
                <li>Country/region restrictions</li>
              </ul>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Redemption conditions</li>
                <li>Exam delivery options</li>
                <li>Testing availability</li>
                <li>Expiration date</li>
              </ul>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              AWS also provides an official exam-voucher system for organizations and teams, including online purchasing and
              voucher management.
            </p>
          </section>

          {/* Why Techcyfy */}
          <section className="mb-10 border border-gray-200 rounded-lg p-6 bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Techcyfy for AWS Exam Vouchers?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span> Competitive AWS Voucher Pricing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span> Multiple AWS Certifications – Cloud Practitioner, Solutions Architect, Developer, Security, DevOps, AI &amp; more
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span> Easy Ordering – Tell Techcyfy the certification name and exam code
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span> Professional Assistance – Get guidance on certification pathways
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span> Exam-Code Verification – AWS periodically updates exam versions
              </li>
            </ul>
          </section>

          {/* Steps to Buy */}
          <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Buy an AWS Certification Exam Voucher</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Select Your AWS Certification</span> – Choose the certification that matches your career goal (e.g., AWS Certified Security – Specialty).
              </li>
              <li>
                <span className="font-medium">Confirm the Exam Code</span> – Verify the current exam code (e.g., SCS-C03).
              </li>
              <li>
                <span className="font-medium">Contact Techcyfy</span> – Provide the AWS certification name and exam code.
              </li>
              <li>
                <span className="font-medium">Confirm Voucher Details</span> – Verify price, validity, redemption terms, certification, exam code, region, and delivery method.
              </li>
              <li>
                <span className="font-medium">Schedule Your AWS Exam</span> – After receiving an eligible voucher, follow the applicable AWS Certification process to redeem the voucher and schedule your exam.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions About AWS Certification Exams</h2>
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
            <h2 className="text-xl font-bold text-gray-900">Ready to Take Your AWS Certification Exam?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Whether you're starting your cloud journey with <strong>AWS Certified Cloud Practitioner</strong>, building
              architecture skills with <strong>SAA-C03</strong>, developing cloud applications with{' '}
              <strong>DVA-C02/DVA-C03</strong>, advancing into DevOps with <strong>DOP-C02</strong>, specializing in
              security with <strong>SCS-C03</strong>, or developing expertise in AI and machine learning, Techcyfy can help
              you explore available AWS exam voucher options.
            </p>
            <p className="text-gray-700 mt-4 font-medium">
              Choose your AWS certification, verify the current exam code, and contact Techcyfy for the latest voucher
              availability and pricing.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              Techcyfy — Your Certification Voucher Partner
              <br />
              <span className="italic">Explore. Prepare. Certify.</span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AwsVouchers;