import React, { useState } from 'react';

const FortinetVouchers = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Certification data from the text
  const certifications = [
    // NSE 1-3 (Foundational)
    {
      id: 'nse1',
      name: 'NSE 1 in Cybersecurity',
      level: 'NSE 1',
      code: 'NSE 1',
      voucherSku: 'N/A',
      description:
        'The entry point into the Fortinet cybersecurity certification pathway. Designed to provide foundational knowledge for people beginning their cybersecurity journey.',
      topics: [
        'Cybersecurity fundamentals',
        'Common cyber threats',
        'Security concepts',
        'Digital security',
        'Network security awareness',
        'Cybersecurity careers',
        'Basic security practices',
      ],
      suitable: ['Students', 'Beginners', 'IT professionals', 'Career changers', 'Entry-level cybersecurity candidates'],
      format: 'Online course assessment',
    },
    {
      id: 'nse2',
      name: 'NSE 2 in Cybersecurity',
      level: 'NSE 2',
      code: 'NSE 2',
      voucherSku: 'N/A',
      description:
        'Introduces candidates to next-generation firewall concepts and foundational Fortinet security technologies.',
      topics: [
        'Next-generation firewalls',
        'Network security',
        'Security policies',
        'Firewall concepts',
        'Security technologies',
        'Fortinet security solutions',
      ],
      format: 'Online course assessment',
    },
    {
      id: 'nse3',
      name: 'NSE 3 in Cybersecurity / FortiGate Operator',
      level: 'NSE 3',
      code: 'NSE 3',
      voucherSku: 'N/A',
      description:
        'Focuses on fundamental FortiGate operation. Validates high-level FortiGate operation, including fundamental configuration and monitoring tasks.',
      suitable: [
        'Network administrators',
        'Security administrators',
        'Junior network engineers',
        'IT support professionals',
        'FortiGate beginners',
      ],
      format: 'Online assessment',
    },

    // NSE 4
    {
      id: 'nse4',
      name: 'NSE 4 FortiOS / FortiOS Administrator',
      level: 'NSE 4',
      code: 'NSE 4',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      description:
        'One of the most important Fortinet certifications for professionals who administer FortiGate and FortiOS environments.',
      topics: [
        'FortiGate administration',
        'FortiOS configuration',
        'Firewall policies',
        'Network security',
        'VPN',
        'Routing',
        'Security profiles',
        'Authentication',
        'High availability',
        'Troubleshooting',
        'Monitoring',
      ],
      suitable: [
        'Network security administrators',
        'Network engineers',
        'Security engineers',
        'FortiGate administrators',
        'Firewall administrators',
        'Cybersecurity professionals',
      ],
      note: 'Prerequisite for several higher-level NSE 5 certification tracks.',
    },

    // NSE 5 - Secure Networking
    {
      id: 'nse5-fortiswitch',
      name: 'NSE 5 - FortiSwitch Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Secure Networking',
      description:
        'Focuses on deploying, configuring, managing, and troubleshooting FortiSwitch environments.',
      topics: [
        'FortiSwitch deployment',
        'FortiLink',
        'VLANs',
        'Switching',
        'Network security',
        'Switch management',
        'Troubleshooting',
      ],
    },
    {
      id: 'nse5-sdwan',
      name: 'NSE 5 - SD-WAN Core Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Secure Networking',
      description: 'Focuses on SD-WAN administration and secure network connectivity.',
      topics: [
        'SD-WAN',
        'WAN optimization',
        'SD-WAN policies',
        'Network performance',
        'Traffic steering',
        'Monitoring',
        'Troubleshooting',
      ],
    },
    {
      id: 'nse5-wireless',
      name: 'NSE 5 - Secure Wireless LAN Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Secure Networking',
      description: 'Validates skills related to Fortinet secure wireless networking.',
      note: 'Secure Wireless LAN 7.6 Administrator released May 2026; previous 7.4 version last delivery August 31, 2026.',
    },

    // NSE 5 - SASE
    {
      id: 'nse5-sase',
      name: 'NSE 5 - FortiSASE and SD-WAN 26 Core Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'SASE',
      description:
        'The current SASE-focused NSE 5 exam released in July 2026. Covers FortiSASE, secure internet access, SaaS security, SD-WAN, endpoint security, security policies, cloud-delivered security, and remote-user security.',
      topics: [
        'FortiSASE',
        'Secure internet access',
        'SaaS security',
        'SD-WAN',
        'Endpoint security',
        'Security policies',
        'Cloud-delivered security',
        'Remote-user security',
      ],
    },

    // NSE 5 - Cloud Security
    {
      id: 'nse5-fortiweb',
      name: 'NSE 5 - FortiWeb Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Cloud Security',
      description:
        'Focuses on web application security and application-layer protection.',
      topics: [
        'Web application firewall',
        'Application security',
        'API security',
        'Bot protection',
        'SSL/TLS',
        'Web application monitoring',
        'Threat protection',
      ],
    },
    {
      id: 'nse5-fortiappsec',
      name: 'NSE 5 - FortiAppSec Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Cloud Security',
      description:
        'Focuses on application security technologies and cloud-based application protection. Released August 27, 2026.',
    },
    {
      id: 'nse5-fortiadc',
      name: 'NSE 5 - FortiADC Administrator',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Cloud Security',
      description:
        'Focuses on application delivery controller technologies and related application availability and performance capabilities. Availability planned for Q3 2026.',
    },

    // NSE 5 - Security Operations
    {
      id: 'nse5-fortianalyzer',
      name: 'NSE 5 - FortiAnalyzer Analyst',
      level: 'NSE 5',
      code: 'NSE 5',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Security Operations',
      description:
        'Focuses on centralized logging, event analysis, security monitoring, reporting, and security operations.',
      topics: [
        'FortiAnalyzer',
        'Log analysis',
        'Event management',
        'Security incidents',
        'Reports',
        'Threat analysis',
        'Security operations',
      ],
    },

    // NSE 6 - Secure Networking
    {
      id: 'nse6-fortimanager',
      name: 'NSE 6 - FortiManager Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Secure Networking',
      description:
        'Focuses on centralized FortiGate management, configuration management, policy management, device management, templates, SD-WAN management, and automation. Released July 15, 2026.',
      topics: [
        'Centralized FortiGate management',
        'Configuration management',
        'Policy management',
        'Device management',
        'Templates',
        'SD-WAN management',
        'Automation',
      ],
    },
    {
      id: 'nse6-fortinac',
      name: 'NSE 6 - FortiNAC Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Secure Networking',
      description:
        'Focuses on network access control, device visibility, endpoint security, network segmentation, authentication, and access policies. Updated July 2026.',
    },
    {
      id: 'nse6-fortivoice',
      name: 'NSE 6 - FortiVoice Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Secure Networking',
      description: 'Focuses on FortiVoice administration. Availability planned for Q3 2026.',
    },

    // NSE 6 - SASE
    {
      id: 'nse6-forticlient',
      name: 'NSE 6 - FortiClient EMS Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'SASE',
      description:
        'Focuses on endpoint management, FortiClient EMS, endpoint security, policy management, device management, and security posture.',
    },
    {
      id: 'nse6-fortidlp',
      name: 'NSE 6 - FortiDLP Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'SASE',
      description:
        'Focuses on data loss prevention and protection of sensitive organizational data. Released May 2026.',
    },
    {
      id: 'nse6-fortiedr',
      name: 'NSE 6 - FortiEDR Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'SASE',
      description: 'Focuses on endpoint detection and response capabilities.',
    },

    // NSE 6 - Cloud Security
    {
      id: 'nse6-forticnapp',
      name: 'NSE 6 - FortiCNAPP Analyst',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Cloud Security',
      description:
        'Focuses on cloud-native application protection and cloud security posture. Released May 28, 2026.',
    },
    {
      id: 'nse6-fortiddos',
      name: 'NSE 6 - FortiDDoS Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Cloud Security',
      description:
        'Focuses on DDoS protection, network availability, traffic analysis, attack mitigation, and security monitoring. Updated August 14, 2026.',
    },
    {
      id: 'nse6-fortimail',
      name: 'NSE 6 - FortiMail Administrator',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Cloud Security',
      description:
        'Focuses on email security, anti-spam, malware protection, email filtering, security policies, and email threat detection.',
    },

    // NSE 6 - Security Operations
    {
      id: 'nse6-fortindr',
      name: 'NSE 6 - FortiNDR Cloud Analyst',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Security Operations',
      description:
        'Focuses on network detection and response, threat detection, network analytics, investigation, and security monitoring.',
    },
    {
      id: 'nse6-fortisoar',
      name: 'NSE 6 - FortiSOAR Analyst',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Security Operations',
      description:
        'Focuses on security orchestration, automation, incident response, playbooks, security workflows, and SOC operations. Released August 8, 2026.',
    },
    {
      id: 'nse6-fortisiem',
      name: 'NSE 6 - FortiSIEM Analyst',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Security Operations',
      description:
        'Focuses on SIEM, security monitoring, event analysis, incident detection, log management, and SOC operations. Released February 2026.',
    },
    {
      id: 'nse6-fortirecon',
      name: 'NSE 6 - FortiRecon Analyst',
      level: 'NSE 6',
      code: 'NSE 6',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200',
      track: 'Security Operations',
      description:
        'Focuses on digital risk protection, external attack surface, threat intelligence, brand protection, and security monitoring.',
    },

    // NSE 7
    {
      id: 'nse7-secure-networking',
      name: 'NSE 7 - Secure Networking 7.6 Architect',
      level: 'NSE 7',
      code: 'NSE 7',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200 (until Nov 2, 2026) / $400 after',
      questions: '40–50 questions',
      duration: '60–70 minutes',
      description:
        'Evaluates advanced expertise in designing, administering, and supporting secure SD-WAN and enterprise security infrastructure using multiple FortiGate devices.',
      topics: [
        'Security Fabric',
        'SD-WAN',
        'FortiManager',
        'FortiAnalyzer',
        'Routing',
        'BGP',
        'OSPF',
        'IPsec VPN',
        'SSL inspection',
        'Security profiles',
        'Enterprise firewall',
        'Network troubleshooting',
      ],
      note: 'Remote OnVUE delivery will end September 21, 2026. After this date, NSE 7 exams available only at Pearson VUE-authorized testing centers.',
    },
    {
      id: 'nse7-sase',
      name: 'NSE 7 - SASE 26 Architect',
      level: 'NSE 7',
      code: 'NSE 7',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200 (until Nov 2, 2026) / $400 after',
      description:
        'Focuses on advanced SASE architecture and secure access.',
      topics: [
        'FortiSASE',
        'SD-WAN',
        'Secure internet access',
        'SaaS security',
        'Remote access',
        'Zero Trust',
        'Security policies',
        'SASE architecture',
        'Network security',
      ],
    },
    {
      id: 'nse7-public-cloud',
      name: 'NSE 7 - Public Cloud Security 7.6.4 Architect',
      level: 'NSE 7',
      code: 'NSE 7',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200 (until Nov 2, 2026) / $400 after',
      questions: '35–40 questions',
      duration: '75 minutes',
      description:
        'Validates advanced expertise in integrating Fortinet security solutions within public cloud environments.',
      topics: [
        'AWS',
        'Microsoft Azure',
        'FortiGate',
        'FortiWeb',
        'FortiCNAPP',
        'Terraform',
        'Ansible',
        'Azure Bicep',
        'AWS CloudFormation',
        'Cloud networking',
        'Cloud security monitoring',
      ],
    },
    {
      id: 'nse7-security-ops',
      name: 'NSE 7 - Security Operations 7.6 Architect',
      level: 'NSE 7',
      code: 'NSE 7',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200 (until Nov 2, 2026) / $400 after',
      questions: '35–40 questions',
      duration: '75 minutes',
      description:
        'Focuses on designing and operating a Fortinet SOC using FortiSIEM and FortiSOAR.',
      topics: [
        'SOC architecture',
        'Threat detection',
        'Incident analysis',
        'Threat hunting',
        'FortiSIEM',
        'FortiSOAR',
        'Security automation',
        'Playbooks',
        'Incident response',
        'Security operations',
      ],
    },

    // NSE 8
    {
      id: 'nse8-written',
      name: 'NSE 8 Written Exam',
      level: 'NSE 8',
      code: 'NSE 8',
      voucherSku: 'NSE-EX-FTE4',
      description:
        'The written component of Fortinet\'s highest technical certification level. Evaluates network security architecture, complex configuration, troubleshooting, Fortinet security technologies, and security design scenarios.',
      note: 'Requires both written and practical components for full NSE 8 certification.',
    },
    {
      id: 'nse8-practical',
      name: 'NSE 8 Practical Exam',
      level: 'NSE 8',
      code: 'NSE 8',
      voucherSku: 'NSE-EX-FTE8',
      fee: '$800',
      description:
        'The hands-on component of Fortinet\'s highest technical certification level. Involves a complex network topology and multiple Fortinet products.',
      note: 'Requires both written and practical components for full NSE 8 certification.',
    },

    // Industry Certifications
    {
      id: 'ot-security',
      name: 'OT Security Architect',
      level: 'Industry',
      code: 'Industry',
      voucherSku: 'NSE-EX-FTE2',
      fee: '$200 (until Nov 2, 2026) / $400 after',
      description:
        'Focuses on cybersecurity for operational technology environments.',
      topics: [
        'OT security',
        'Industrial networks',
        'Critical infrastructure',
        'Network segmentation',
        'Industrial cybersecurity',
        'Threat detection',
        'Security architecture',
      ],
    },
    {
      id: 'mssp-security',
      name: 'MSSP Security',
      level: 'Industry',
      code: 'Industry',
      voucherSku: 'Coming Soon',
      description: 'Currently listed as coming soon in Fortinet\'s purchasing information. Not available for purchase yet.',
      status: 'Coming Soon',
    },
  ];

  // Career recommendation table
  const careerRecommendations = [
    { goal: 'Cybersecurity beginner', cert: 'NSE 1 / NSE 2' },
    { goal: 'FortiGate fundamentals', cert: 'NSE 3' },
    { goal: 'FortiGate administration', cert: 'NSE 4 FortiOS' },
    { goal: 'Secure networking', cert: 'NSE 5 Secure Networking' },
    { goal: 'SASE', cert: 'NSE 5 SASE' },
    { goal: 'Cloud security', cert: 'NSE 5 Cloud Security' },
    { goal: 'Security operations', cert: 'NSE 5 Security Operations' },
    { goal: 'Advanced Fortinet administration', cert: 'NSE 6' },
    { goal: 'Cloud security architecture', cert: 'NSE 7 Public Cloud Security' },
    { goal: 'SASE architecture', cert: 'NSE 7 SASE' },
    { goal: 'Network security architecture', cert: 'NSE 7 Secure Networking' },
    { goal: 'SOC architecture', cert: 'NSE 7 Security Operations' },
    { goal: 'Expert cybersecurity', cert: 'NSE 8 Cybersecurity Expert' },
    { goal: 'OT cybersecurity', cert: 'OT Security Industry Certification' },
  ];

  const faqs = [
    { q: 'What is a Fortinet certification?', a: 'A Fortinet certification validates technical knowledge and skills related to Fortinet cybersecurity technologies and solutions.' },
    { q: 'What are the Fortinet NSE certification levels?', a: 'The current Fortinet program includes NSE 1 through NSE 8, along with Industry Certifications.' },
    { q: 'What is the Fortinet NSE 4 exam?', a: 'NSE 4 FortiOS is the Fortinet certification level focused on FortiOS and FortiGate administration.' },
    { q: 'What is the Fortinet NSE 5 certification?', a: 'NSE 5 focuses on specialized Fortinet technologies across Secure Networking, SASE, Cloud Security, and Security Operations.' },
    { q: 'What is the Fortinet NSE 6 certification?', a: 'NSE 6 validates advanced product-specific Fortinet administration skills.' },
    { q: 'What is the Fortinet NSE 7 certification?', a: 'NSE 7 is Fortinet\'s advanced architecture level and currently includes Public Cloud Security, SASE, Secure Networking, and Security Operations architecture exams.' },
    { q: 'What is Fortinet NSE 8?', a: 'NSE 8 is Fortinet\'s expert-level cybersecurity certification and requires written and practical assessments.' },
    { q: 'What is the Fortinet NSE 4 exam code?', a: 'The Fortinet exam level is NSE 4, while Fortinet\'s purchasing documentation identifies NSE-EX-FTE2 as the exam voucher SKU for the NSE 4 FortiOS exam.' },
    { q: 'Where can I buy a Fortinet exam voucher?', a: 'You can contact Techcyfy to check current Fortinet certification exam voucher availability and pricing.' },
    { q: 'Can Fortinet exams be taken online?', a: 'Fortinet offers online-proctored options for many NSE exams. However, NSE 7 remote OnVUE delivery will end September 21, 2026.' },
    { q: 'Are Fortinet NSE exams changing in 2026?', a: 'Yes. Fortinet significantly updated its NSE Certification Program on July 15, 2026, including new levels, tracks, exams, industry certifications, and recertification rules.' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Fortinet Certification Exam Vouchers 2026
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Complete NSE Exam List, Codes &amp; Discounted Vouchers
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <span className="font-medium">Looking for Fortinet certification exam vouchers at competitive prices?</span>{' '}
            Techcyfy provides information and voucher options for Fortinet NSE certification exams, including NSE 4, NSE 5,
            NSE 6, NSE 7, NSE 8, and Fortinet industry certifications.
          </p>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
            <span className="font-semibold">⚠️ Important:</span> Fortinet certification names, exam versions, product
            versions, requirements, and availability can change. Always verify the latest Fortinet Training Institute
            exam information before purchasing or scheduling an examination.
          </div>
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            <span className="font-semibold">📢 Fortinet Program Update:</span> The Fortinet certification program underwent
            a major update on <strong>July 15, 2026</strong>, expanding from five levels to eight levels with new tracks,
            comprehensive NSE 7 exams, industry certifications, and updated recertification rules.
          </div>
        </header>

        {/* Quick Reference: All Certifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fortinet NSE Certification Levels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {['NSE 1', 'NSE 2', 'NSE 3', 'NSE 4', 'NSE 5', 'NSE 6', 'NSE 7', 'NSE 8', 'Industry'].map((level) => (
              <div key={level} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-blue-600">{level}</span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-700">
                  {level === 'NSE 1' && 'Cybersecurity Fundamentals'}
                  {level === 'NSE 2' && 'NGFW Fundamentals'}
                  {level === 'NSE 3' && 'FortiGate Operation'}
                  {level === 'NSE 4' && 'FortiOS Administration'}
                  {level === 'NSE 5' && 'Specialized Products'}
                  {level === 'NSE 6' && 'Advanced Administration'}
                  {level === 'NSE 7' && 'Advanced Architecture'}
                  {level === 'NSE 8' && 'Expert Cybersecurity'}
                  {level === 'Industry' && 'Specialized Domains'}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: NSE 1–3 are foundational assessments. NSE 4–7 use voucher SKU <strong>NSE-EX-FTE2</strong>.
            NSE 8 uses <strong>NSE-EX-FTE4</strong> (written) and <strong>NSE-EX-FTE8</strong> (practical).
          </p>
        </section>

        {/* Career Recommendation Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Which Fortinet Certification Should You Choose?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Career Goal</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Recommended Fortinet Certification</th>
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

        {/* Pricing Note */}
        <section className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800">Fortinet Exam Voucher Prices</h3>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>• <strong>NSE 4–6 exams:</strong> USD $200* (until November 2, 2026)</li>
            <li>• <strong>NSE 7 exams:</strong> USD $400* (beginning November 2, 2026; $200* until then)</li>
            <li>• <strong>NSE 8 Practical Exam:</strong> USD $800*</li>
            <li>• <strong>NSE 8 Recertification Exam:</strong> USD $400*</li>
          </ul>
          <p className="text-xs text-gray-500 mt-1">*Prices subject to Fortinet policies and applicable taxes. Verify latest price before purchase.</p>
        </section>

        {/* Certification Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Fortinet Certifications</h2>
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
                          cert.level === 'NSE 1' || cert.level === 'NSE 2' || cert.level === 'NSE 3'
                            ? 'bg-green-100 text-green-700'
                            : cert.level === 'NSE 4'
                            ? 'bg-blue-100 text-blue-700'
                            : cert.level === 'NSE 5'
                            ? 'bg-cyan-100 text-cyan-700'
                            : cert.level === 'NSE 6'
                            ? 'bg-purple-100 text-purple-700'
                            : cert.level === 'NSE 7'
                            ? 'bg-orange-100 text-orange-700'
                            : cert.level === 'NSE 8'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {cert.level}
                      </span>
                      {cert.track && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {cert.track}
                        </span>
                      )}
                      {cert.status === 'Coming Soon' && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                      {cert.voucherSku !== 'N/A' && cert.voucherSku !== 'Coming Soon' && (
                        <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">SKU: {cert.voucherSku}</span>
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

                    {cert.questions && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Exam Format:</h4>
                        <p className="text-sm text-gray-600">{cert.questions} questions</p>
                      </div>
                    )}

                    {cert.format && (
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Format:</h4>
                        <p className="text-sm text-gray-600">{cert.format}</p>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Techcyfy for Fortinet Certification Vouchers?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Competitive Pricing – Explore competitive pricing for eligible Fortinet vouchers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Multiple Fortinet Exams – Across NSE certification levels
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Easy Ordering – Simply provide the Fortinet exam name
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Professional Assistance – Get help finding the right certification path
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span> Updated Certification Information – Stay current with Fortinet program changes
            </li>
          </ul>
        </section>

        {/* Steps to Buy */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Buy a Fortinet Exam Voucher from Techcyfy</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Choose Your Fortinet Exam</span> – Select the exact exam you want to take (e.g., NSE 4 FortiOS, NSE 5 FortiSwitch Administrator, NSE 6 FortiManager Administrator, NSE 7 Secure Networking 7.6 Architect, NSE 8 Cybersecurity Expert).
            </li>
            <li>
              <span className="font-medium">Contact Techcyfy</span> – Send Techcyfy the exact exam name.
            </li>
            <li>
              <span className="font-medium">Check Current Voucher Availability</span> – Techcyfy can provide the latest available voucher option and pricing.
            </li>
            <li>
              <span className="font-medium">Verify the Voucher Details</span> – Confirm the exam name, validity period, redemption requirements, and applicable conditions.
            </li>
            <li>
              <span className="font-medium">Schedule Your Exam</span> – Use the eligible voucher according to Fortinet's current examination registration process.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions About Fortinet Certification Exams</h2>
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
          <h2 className="text-xl font-bold text-gray-900">Start Your Fortinet Certification Journey</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you are beginning with <strong>NSE 1</strong>, building FortiGate skills through <strong>NSE 4</strong>,
            specializing in secure networking through <strong>NSE 5</strong>, advancing into product-specific security
            administration with <strong>NSE 6</strong>, designing enterprise security architectures through <strong>NSE 7</strong>,
            or pursuing expert-level cybersecurity with <strong>NSE 8</strong>, Fortinet provides certification paths for
            cybersecurity professionals at different experience levels.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Looking for a Fortinet certification exam voucher? Send Techcyfy the exact certification or exam name
            (e.g., NSE 4 FortiOS, NSE 5 FortiSwitch Administrator, NSE 7 Secure Networking 7.6 Architect) and ask for
            the latest voucher availability and pricing.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            Techcyfy — Your IT Certification Voucher Partner
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FortinetVouchers;