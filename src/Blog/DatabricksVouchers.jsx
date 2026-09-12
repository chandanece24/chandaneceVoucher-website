import React, { useState } from 'react';

const DatabricksVouchers = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Certification data from the text
  const certifications = [
    {
      id: 'data-analyst-associate',
      name: 'Databricks Certified Data Analyst Associate',
      level: 'Associate',
      code: 'No public code',
      description:
        'Validates foundational data analysis skills using Databricks SQL and related capabilities. The role uses Databricks SQL to complete introductory data analysis tasks.',
      topics: [
        'SQL analytics',
        'Data querying',
        'Data visualization',
        'Dashboards',
        'Data exploration',
        'Databricks SQL',
        'Analytical workflows',
      ],
      suitable: [
        'Data analysts',
        'Business analysts',
        'BI professionals',
        'SQL developers',
        'Junior data professionals',
        'Analytics professionals',
      ],
    },
    {
      id: 'data-engineer-associate',
      name: 'Databricks Certified Data Engineer Associate',
      level: 'Associate',
      code: 'PR000054',
      fee: '$200',
      duration: '90 minutes',
      questions: '45 scored questions',
      experience: '6 months hands-on Databricks experience',
      validity: '2 years',
      description:
        'Validates foundational data engineering skills using the Databricks Data Intelligence Platform. Assesses foundational data engineering tasks including the Databricks workspace, architecture, data ingestion, data loading, data transformation and modeling, PySpark, Lakeflow Jobs, CI/CD, troubleshooting, monitoring, optimization, governance, and security.',
      topics: [
        'Databricks Data Intelligence Platform',
        'Data ingestion',
        'Data loading',
        'ETL',
        'PySpark',
        'Data transformation',
        'Data modeling',
        'Lakeflow Jobs',
        'CI/CD',
        'Monitoring',
        'Troubleshooting',
        'Optimization',
        'Governance',
        'Security',
      ],
      suitable: [
        'Data engineers',
        'Junior data engineers',
        'Cloud engineers',
        'ETL developers',
        'Analytics engineers',
        'Big data professionals',
      ],
      note: 'Exam guide updated May 4, 2026. Recertification required every 2 years.',
    },
    {
      id: 'data-engineer-professional',
      name: 'Databricks Certified Data Engineer Professional',
      level: 'Professional',
      code: 'No public code',
      description:
        'Designed for advanced data engineering professionals who work with complex data engineering workloads on Databricks. Assesses advanced data engineering tasks using Databricks.',
      topics: [
        'Advanced data engineering',
        'Production data pipelines',
        'Data transformation',
        'Performance optimization',
        'Data governance',
        'Security',
        'CI/CD',
        'Workflow orchestration',
        'Advanced Spark',
        'Lakehouse architecture',
      ],
      suitable: [
        'Senior data engineers',
        'Lead data engineers',
        'Data platform engineers',
        'Cloud data engineers',
        'Big data engineers',
        'Analytics platform engineers',
      ],
      note: 'Check official exam page for current version as of June 2026.',
    },
    {
      id: 'ml-associate',
      name: 'Databricks Certified Machine Learning Associate',
      level: 'Associate',
      code: 'No public code',
      description:
        'Validates foundational machine learning skills using Databricks. Assesses the ability to use Databricks to perform basic machine learning tasks.',
      topics: [
        'Machine learning workflows',
        'Data preparation',
        'Model development',
        'Model evaluation',
        'Model deployment',
        'Databricks Machine Learning',
        'ML lifecycle management',
      ],
      suitable: [
        'Junior ML engineers',
        'Data scientists',
        'ML developers',
        'AI engineers',
        'Data analysts moving into ML',
        'Cloud professionals entering machine learning',
      ],
    },
    {
      id: 'ml-professional',
      name: 'Databricks Certified Machine Learning Professional',
      level: 'Professional',
      code: 'No public code',
      description:
        'Validates advanced machine learning skills using Databricks. Assesses advanced machine learning tasks performed in production using Databricks Machine Learning.',
      topics: [
        'Advanced machine learning',
        'Model development',
        'Model deployment',
        'ML pipelines',
        'Production ML',
        'MLOps',
        'Model monitoring',
        'Feature engineering',
        'Machine learning optimization',
        'Large-scale ML workloads',
      ],
      suitable: [
        'Machine learning engineers',
        'Senior data scientists',
        'ML platform engineers',
        'MLOps engineers',
        'AI engineers',
        'Machine learning architects',
      ],
    },
    {
      id: 'genai-associate',
      name: 'Databricks Certified Generative AI Engineer Associate',
      level: 'Associate',
      code: 'No public code',
      description:
        'Assesses the ability to design, build, and deploy Generative AI solutions with Databricks.',
      topics: [
        'Generative AI',
        'Large language models',
        'Retrieval-augmented generation',
        'AI application development',
        'Prompt engineering',
        'Model evaluation',
        'AI application deployment',
        'Governance',
        'Responsible AI',
      ],
      suitable: [
        'Generative AI engineers',
        'AI developers',
        'ML engineers',
        'Data scientists',
        'Full-stack AI developers',
        'Cloud AI professionals',
      ],
    },
    {
      id: 'spark-developer',
      name: 'Databricks Certified Associate Developer for Apache Spark',
      level: 'Associate',
      code: 'No public code',
      description:
        'Focuses on fundamental Spark development skills. Assesses understanding of the Spark DataFrame API.',
      topics: [
        'Apache Spark',
        'Spark DataFrame API',
        'Data manipulation',
        'Data transformations',
        'Spark sessions',
        'Data processing',
        'PySpark concepts',
      ],
      suitable: [
        'Spark developers',
        'Data engineers',
        'Big data developers',
        'PySpark developers',
        'Data platform professionals',
      ],
    },
  ];

  // Career recommendation table
  const careerRecommendations = [
    { goal: 'Data analytics', cert: 'Data Analyst Associate' },
    { goal: 'Data engineering', cert: 'Data Engineer Associate' },
    { goal: 'Advanced data engineering', cert: 'Data Engineer Professional' },
    { goal: 'Machine learning', cert: 'Machine Learning Associate' },
    { goal: 'Advanced machine learning', cert: 'Machine Learning Professional' },
    { goal: 'Generative AI', cert: 'Generative AI Engineer Associate' },
    { goal: 'Apache Spark development', cert: 'Associate Developer for Apache Spark' },
  ];

  const faqs = [
    { q: 'What is a Databricks certification exam voucher?', a: 'A Databricks certification exam voucher is a payment or discount mechanism that can be used toward an eligible Databricks certification exam according to the applicable voucher terms.' },
    { q: 'Where can I buy a Databricks exam voucher?', a: 'You can contact Techcyfy to check current Databricks certification voucher availability and pricing.' },
    { q: 'What Databricks certifications are currently available?', a: 'The current catalog includes Associate and Professional certifications covering data analytics, data engineering, machine learning, generative AI, and Apache Spark.' },
    { q: 'What is the Databricks Data Engineer Associate certification?', a: 'It is an Associate-level certification that validates foundational data engineering skills using the Databricks Data Intelligence Platform.' },
    { q: 'What is the Databricks Data Engineer Associate exam code?', a: 'PR000054 has appeared as the Webassessor exam code in Databricks Community posts. Verify before displaying as official.' },
    { q: 'How long is the Databricks Data Engineer Associate certification valid?', a: 'The current exam guide states the certification is valid for two years and requires recertification every two years.' },
    { q: 'Does Databricks update its certification exams?', a: 'Yes. Databricks updates exam guides when certification content changes. The Data Engineer Associate guide was updated May 4, 2026.' },
    { q: 'Are Databricks certification vouchers discounted?', a: 'Databricks states that discounted certification vouchers are reserved for certain events, beta exams, partner organizations, or pre-purchased credits.' },
    { q: 'Which Databricks certification is best for data engineers?', a: 'Data Engineer Associate is recommended for foundational skills, while Data Engineer Professional is for advanced production workloads.' },
    { q: 'Which Databricks certification is best for machine learning engineers?', a: 'Machine Learning Associate is for foundational skills, while Machine Learning Professional is for advanced production ML workloads.' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Databricks Certification Exam Vouchers 2026
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Complete Certification List, Exam Guide &amp; Discounted Vouchers
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <span className="font-medium">Looking for Databricks certification exam vouchers at competitive prices?</span>{' '}
            Techcyfy helps data engineers, data analysts, machine learning professionals, AI engineers, developers, and
            cloud professionals find Databricks certification exam voucher options.
          </p>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
            <span className="font-semibold">⚠️ Important:</span> Databricks periodically updates certification exams and
            exam guides. Always verify the current exam version, certification requirements, voucher terms, and registration
            information before purchasing or scheduling an examination.
          </div>
        </header>

        {/* Quick Reference: All Certifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complete Databricks Certification List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center gap-2 text-sm">
                <span className="text-gray-700 truncate">{cert.name}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${
                    cert.level === 'Associate'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {cert.level}
                </span>
                {cert.code !== 'No public code' && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-mono flex-shrink-0">
                    {cert.code}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: Databricks primarily uses certification names rather than standardized alphanumeric exam codes.
          </p>
        </section>

        {/* Career Recommendation Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Which Databricks Certification Should You Choose?</h2>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Databricks Certifications</h2>
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
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          cert.level === 'Associate'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {cert.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                      {cert.code !== 'No public code' && (
                        <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">Code: {cert.code}</span>
                      )}
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

                    {cert.questions && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Exam Format:</h4>
                        <p className="text-sm text-gray-600">{cert.questions}</p>
                      </div>
                    )}

                    {cert.validity && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Certification Validity:</h4>
                        <p className="text-sm text-gray-600">{cert.validity}</p>
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

        {/* Voucher Guide */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Databricks Exam Voucher Guide</h2>
          <p className="text-gray-700 mb-3">
            A Databricks certification exam voucher can help eligible candidates pay for a Databricks certification
            examination according to the voucher's terms and conditions.
          </p>
          <p className="text-gray-600 mb-3">
            Databricks states that discounted certification vouchers are generally associated with{' '}
            <strong>Databricks events, beta exams, partner organizations, or pre-purchased credits</strong>.
          </p>
          <p className="text-gray-600">
            Because voucher eligibility and availability can vary, candidates should verify the applicable terms before purchasing.
          </p>
          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
            <span className="font-semibold">Looking for a Databricks certification voucher?</span> Techcyfy can help you
            check current availability for certifications such as Data Engineer Associate, Data Engineer Professional,
            Data Analyst Associate, Machine Learning Associate, Machine Learning Professional, Generative AI Engineer Associate,
            and Associate Developer for Apache Spark.
          </div>
        </section>

        {/* Why Techcyfy */}
        <section className="mb-10 border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Techcyfy for Databricks Exam Vouchers?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Competitive Pricing – Explore available voucher options
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Multiple Certification Options – Across data engineering, analytics, ML, GenAI, and Spark
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Easy Voucher Inquiry – Send the exact certification name
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Professional Support – Get help finding the right certification
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Current Certification Information – Stay up to date with exam changes
            </li>
          </ul>
        </section>

        {/* Steps to Buy */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Buy a Databricks Certification Exam Voucher</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Choose Your Certification</span> – Select the certification that matches your career goal (e.g., Databricks Certified Data Engineer Associate, Databricks Certified Machine Learning Professional).
            </li>
            <li>
              <span className="font-medium">Contact Techcyfy</span> – Send the exact Databricks certification name.
            </li>
            <li>
              <span className="font-medium">Check Current Availability</span> – Ask Techcyfy for the latest voucher availability and pricing.
            </li>
            <li>
              <span className="font-medium">Verify Voucher Terms</span> – Confirm certification name, voucher eligibility, expiration date, redemption conditions, restrictions, and current exam version.
            </li>
            <li>
              <span className="font-medium">Register for the Examination</span> – Databricks provides certification registration information through its certification ecosystem.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions About Databricks Exam Vouchers</h2>
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
          <h2 className="text-xl font-bold text-gray-900">Start Your Databricks Certification Journey</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you are beginning your career in <strong>data analytics</strong>, developing your skills as a{' '}
            <strong>data engineer</strong>, advancing into <strong>professional data engineering</strong>, building{' '}
            <strong>machine learning solutions</strong>, developing <strong>generative AI applications</strong>, or working
            with <strong>Apache Spark</strong>, Databricks provides certification paths for a wide range of modern data and
            AI roles.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Looking for a specific Databricks voucher? Send Techcyfy the exact{' '}
            <strong>Databricks Certification Name</strong> (e.g., Databricks Certified Data Engineer Associate, Databricks
            Certified Machine Learning Professional) and ask for the latest voucher availability and price.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            Techcyfy — Your IT Certification Voucher Partner
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DatabricksVouchers;