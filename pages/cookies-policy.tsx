import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24 bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">Cookies Policy</h1>
          <p className="text-gray-600">Last Updated: [Date]</p>
        </div>
        <div className="space-y-8 text-gray-600">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms of Service</h2>
          <p><strong>Last Updated:</strong> [12-02-25]</p>
          <h3 className="text-2xl font-semibold mt-2">1. Introduction</h3>
          <p>These Terms of Service ("Terms") govern the use of the security services provided by Fortis Security ("Company," "we," "our," or "us"). By engaging our services, you agree to adhere to these Terms. Please read them carefully before proceeding with any service agreement.</p>
          <h3 className="text-2xl font-semibold mt-2">2. Service Agreement</h3>
          <h4 className="text-xl font-semibold mt-2">2.1 Service Provision</h4>
          <p>Fortis Security offers professional security services, including manned guarding, event security, door supervision, and risk assessment services. Your service agreement will delineate the specific services to be provided.</p>
          <h4 className="text-xl font-semibold mt-2">2.2 Service Standards</h4>
          <p>Our commitment is to deliver services with reasonable care and skill, adhering to industry standards and applicable regulations. Our security personnel are appropriately licensed and trained under relevant regulatory requirements.</p>
          <h4 className="text-xl font-semibold mt-2">2.3 Service Modifications</h4>
          <p>We reserve the right to modify our services with reasonable notice to accommodate evolving security needs, regulatory requirements, or operational circumstances.</p>
          <h3 className="text-2xl font-semibold mt-2">3. Client Obligations</h3>
          <h4 className="text-xl font-semibold mt-2">3.1 Cooperation</h4>
          <p>Clients are required to provide accurate information and reasonable cooperation necessary for the delivery of services, which includes:</p>
          <ul className="list-disc ml-6">
            <li>Providing access to relevant premises and facilities,</li>
            <li>Supplying necessary documentation and authorizations,</li>
            <li>Communicating security requirements promptly,</li>
            <li>Promptly notifying us of any security concerns or incidents.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-2">3.2 Safe Working Environment</h4>
          <p>Clients must ensure a safe working environment for our security personnel, following health and safety regulations.</p>
          <h4 className="text-xl font-semibold mt-2">3.3 Payment Terms</h4>
          <p>Clients agree to remit service payments according to the agreed rates and payment schedule. Unless specified otherwise in the service agreement, the payment terms are net 30 days.</p>
          <h3 className="text-2xl font-semibold mt-2">4. Liability and Insurance</h3>
          <h4 className="text-xl font-semibold mt-2">4.1 Insurance Coverage</h4>
          <p>We maintain comprehensive insurance coverage appropriate to our services, which includes:</p>
          <ul className="list-disc ml-6">
            <li>Public Liability Insurance,</li>
            <li>Professional Indemnity Insurance,</li>
            <li>Employer's Liability Insurance.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-2">4.2 Limitation of Liability</h4>
          <p>Our liability is limited to direct damages arising from our negligence and shall not exceed the greater of:</p>
          <ul className="list-disc ml-6">
            <li>The amount paid for our services in the twelve months preceding the incident or</li>
            <li>The amount covered by our relevant insurance policies.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-2">4.3 Exclusions</h4>
          <p>We are not liable for:</p>
          <ul className="list-disc ml-6">
            <li>Consequential or indirect losses,</li>
            <li>Losses arising from the client's failure to adhere to our security recommendations,</li>
            <li>Damages resulting from circumstances beyond our reasonable control.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">5. Confidentiality</h3>
          <h4 className="text-xl font-semibold mt-2">5.1 Information Protection</h4>
          <p>We shall maintain the confidentiality of all client information and implement appropriate measures to protect such information from unauthorized disclosure.</p>
          <h4 className="text-xl font-semibold mt-2">5.2 Data Protection</h4>
          <p>We process personal data per our Privacy Policy and applicable data protection laws.</p>
          <h3 className="text-2xl font-semibold mt-2">6. Term and Termination</h3>
          <h4 className="text-xl font-semibold mt-2">6.1 Duration</h4>
          <p>The service agreement will remain in effect for the period specified in your service contract or until terminated following these Terms.</p>
          <h4 className="text-xl font-semibold mt-2">6.2 Termination</h4>
          <p>Either party may terminate the agreement:</p>
          <ul className="list-disc ml-6">
            <li>With thirty days written notice,</li>
            <li>Immediately for a material breach of these Terms or</li>
            <li>Immediately if the other party becomes insolvent.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-2">6.3 Post-Termination</h4>
          <p>Upon termination:</p>
          <ul className="list-disc ml-6">
            <li>All outstanding payments shall become immediately due,</li>
            <li>We shall return any client property in our possession and</li>
            <li>Confidentiality obligations shall continue to apply.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">7. Force Majeure</h3>
          <p>Neither party shall be liable for any failure or delay in fulfilling their obligations if such failure or delay arises from circumstances beyond their reasonable control.</p>
          <h3 className="text-2xl font-semibold mt-2">8. Compliance with Laws</h3>
          <h4 className="text-xl font-semibold mt-2">8.1 Regulatory Compliance</h4>
          <p>We maintain all licenses and permissions required for our security services and adhere to applicable laws and regulations.</p>
          <h4 className="text-xl font-semibold mt-2">8.2 Anti-Bribery</h4>
          <p>Both parties agree to comply with applicable anti-bribery and anti-corruption laws.</p>
          <h3 className="text-2xl font-semibold mt-2">9. Intellectual Property</h3>
          <p>Fortis Security owns all intellectual property rights related to our security methodologies, procedures, and documentation.</p>
          <h3 className="text-2xl font-semibold mt-2">10. Dispute Resolution</h3>
          <h4 className="text-xl font-semibold mt-2">10.1 Governing Law</h4>
          <p>The laws of [Jurisdiction] govern these Terms.</p>
          <h4 className="text-xl font-semibold mt-2">10.2 Dispute Process</h4>
          <p>Any disputes shall be resolved through the following:</p>
          <ul className="list-disc ml-6">
            <li>Initial good faith negotiations,</li>
            <li>Mediation if negotiations fail, and</li>
            <li>Legal proceedings as a last resort.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-2">11. Amendments</h3>
          <p>We reserve the right to modify these Terms with reasonable notice. Continued use of our services following such modifications constitutes acceptance of the updated Terms.</p>
          <h3 className="text-2xl font-semibold mt-2">12. Severability</h3>
          <p>If any provision of these Terms is deemed unenforceable, the remaining provisions shall continue to be in full force and effect.</p>
          <h3 className="text-2xl font-semibold mt-2">13. Contact Information</h3>
          <p>For any inquiries regarding these Terms, please get in touch with us at:</p>
          <p>Fortis Security<br />Email: legal@fortissecurity.com<br />Phone: [07762853255]</p>
          <h3 className="text-2xl font-semibold mt-2">14. Acknowledgement</h3>
          <p>By engaging our services, you acknowledge that you have read, comprehended, and agree to be bound by these Terms of Service.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiesPolicy; 