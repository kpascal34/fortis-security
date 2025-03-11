import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
      <main className="max-w-7xl mx-auto px-4 py-24 bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: [12-02-25]</p>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Introduction</h2>
          <p className="text-gray-600">Fortis Security ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security services, visit our website, or interact with our business in any way.</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Information We Collect</h2>
          <h3 className="text-2xl font-semibold mt-2">Personal Information</h3>
          <p className="text-gray-600">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Name, address, and contact details</li>
            <li>Employment information and professional credentials</li>
            <li>Payment and billing information</li>
            <li>Emergency contact information</li>
            <li>Identification documents</li>
            <li>Security clearance information where applicable</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">Automatically Collected Information</h3>
          <p className="text-gray-600">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>IP addresses and device information</li>
            <li>Browser type and settings</li>
            <li>Website usage data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">Security Footage and Access Logs</h3>
          <p className="text-gray-600">In providing our security services, we may collect:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>CCTV footage from client premises</li>
            <li>Access control logs</li>
            <li>Incident reports</li>
            <li>Security check records</li>
          </ul>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How We Use Your Information</h2>
          <p className="text-gray-600">We use the collected information for the following purposes:</p>
          <h3 className="text-2xl font-semibold mt-2">Service Delivery</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Providing and managing security services</li>
            <li>Processing and fulfilling service requests</li>
            <li>Maintaining client and visitor logs</li>
            <li>Managing emergency responses</li>
            <li>Conducting security assessments</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">Business Operations</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Processing payments and managing accounts</li>
            <li>Communicating about services and updates</li>
            <li>Improving our services</li>
            <li>Training and quality assurance</li>
            <li>Compliance with legal obligations</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">Security and Safety</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Protecting client premises and assets</li>
            <li>Preventing and investigating security incidents</li>
            <li>Maintaining safety and security records</li>
            <li>Emergency response coordination</li>
          </ul>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Information Sharing and Disclosure</h2>
          <p className="text-gray-600">We may share your information with:</p>
          <h3 className="text-2xl font-semibold mt-2">Service Providers</h3>
          <p className="text-gray-600">We may share information with trusted third-party service providers who assist us in operating our business, conducting our services, or servicing you.</p>
          <h3 className="text-2xl font-semibold mt-2">Legal Requirements</h3>
          <p className="text-gray-600">We may disclose information:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights or property</li>
            <li>To prevent or investigate possible wrongdoing</li>
            <li>To protect personal safety or public safety</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">Business Transfers</h3>
          <p className="text-gray-600">If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Data Security</h2>
          <p className="text-gray-600">We implement appropriate technical and organisational measures to maintain the security of your information, including:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Physical security controls</li>
            <li>Encryption of digital data</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Staff training on data protection</li>
          </ul>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Rights and Choices</h2>
          <p className="text-gray-600">You have certain rights regarding your personal information:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your information (where applicable)</li>
            <li>Objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cookie Policy</h2>
          <p className="text-gray-600">Our website uses cookies and similar tracking technologies to improve user experience and analyse website traffic. You can control cookie preferences through your browser settings.</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Children's Privacy</h2>
          <p className="text-gray-600">Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">International Data Transfers</h2>
          <p className="text-gray-600">We may transfer your information to countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Changes to This Policy</h2>
          <p className="text-gray-600">We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last Updated" date.</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
          <p className="text-gray-600">If you have questions or concerns about this Privacy Policy or our privacy practices, please get in touch with us at:</p>
          <p className="text-gray-600">Fortis Security<br />Email: [privacy@fortissecurity.com]<br />Phone: [07762853255]</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Regulatory Compliance</h2>
          <p className="text-gray-600">This Privacy Policy is designed to comply with applicable data protection laws and regulations, including:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>Data Protection Act 2018</li>
            <li>Privacy and Electronic Communications Regulations (PECR)</li>
          </ul>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Information</h2>
          <h3 className="text-2xl font-semibold mt-2">Retention Periods</h3>
          <p className="text-gray-600">We retain personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless a more extended retention period is required by law.</p>
          <h3 className="text-2xl font-semibold mt-2">Security Incident Response</h3>
          <p className="text-gray-600">If a security incident affects your personal information, we will notify you and the relevant authorities as required by applicable law.</p>
          <h3 className="text-2xl font-semibold mt-2">Complaints</h3>
          <p className="text-gray-600">If you believe we have not handled your personal information according to applicable law, you can complain to a supervisory authority.</p>
          <p className="text-gray-600">Using our services or website, you acknowledge that you have read and understood this Privacy Policy.</p>
        </div>
      </main>
      <Footer />
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </>
  );
};

export default PrivacyPolicy; 