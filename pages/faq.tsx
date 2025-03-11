import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is Fortis Security?",
      answer: "Fortis Security is a leading professional services provider dedicated to ensuring safety and security across Yorkshire and Greater Manchester. With a strong focus on customised security solutions, we cater to a diverse clientele, including businesses, events, residential properties, and public institutions. Our team consists of highly trained security professionals committed to upholding the highest standards of protection, reliability, and response to any security challenges our clients may face."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly extend our security services across Yorkshire and Greater Manchester. This includes major urban centres such as Leeds, Sheffield, York, Bradford, Manchester, and Bolton and their surrounding regions. If you are unsure about the coverage specific to your location, we encourage you to contact our customer service team for clarity and assistance."
    },
    {
      question: "What sets Fortis Security apart from other security companies?",
      answer: "At Fortis Security, our distinction lies in our unwavering commitment to client security and our staff's wellbeing. We pride ourselves on offering competitive pricing while ensuring fair wages for our security personnel. This focus on employee satisfaction translates to lower turnover rates and a more dedicated team, resulting in superior security service for our clients. All our security officers undergo rigorous vetting processes, receive professional training, and participate in continuous education on the latest security practices and technologies to stay at the forefront of the industry."
    },
    {
      question: "What security services does Fortis Security offer?",
      answer: "We offer a comprehensive suite of security services tailored to meet the diverse needs of our clients, including: Static Security Guards, Mobile Patrol Services, Event Security, Retail Security, Construction Site Security, Corporate Building Security, Residential Security, CCTV Monitoring, Access Control Systems, Security Risk Assessments, and Emergency Response."
    },
    {
      question: "Do you provide temporary or one-off security services?",
      answer: "Yes, we understand that security needs are not always permanent, so we offer flexible and temporary security solutions. These include one-time event security, short-term coverage for construction sites, and emergency security solutions to address unforeseen circumstances. We aim to create a customised plan that meets your short-term security requirements."
    },
    {
      question: "Can you provide security personnel for events?",
      answer: "Absolutely. Our event security services are fully customisable and cater to events of all scales, ranging from intimate corporate meetings to large public festivals. Our event security personnel are extensively trained in vital areas such as crowd management, access control, conflict resolution, and emergency protocols, ensuring they can effectively manage any situation during your event."
    },
    {
      question: "Do you offer 24/7 security coverage?",
      answer: "Yes, we provide continuous security coverage 24 hours a day, seven days a week. Our dedicated team operates on a carefully managed shift system to ensure uninterrupted protection for properties and businesses that require a consistent security presence, allowing our clients to have peace of mind at all times."
    },
    {
      question: "Are your security officers licensed and insured?",
      answer: "Our security officers possess valid Security Industry Authority (SIA) licenses and regularly train to maintain and enhance their skills. Fortis Security also holds comprehensive public liability insurance, ensuring that we fully comply with all regulations governing security services in the UK and protect our clients and personnel."
    },
    {
      question: "What training do your security personnel receive?",
      answer: "Our security officers undergo extensive initial training covering critical aspects of security work, including conflict management, emergency response procedures, first aid, customer service excellence, and detailed situation reporting. Beyond initial training, we offer ongoing refresher courses and specialised training tailored to specific client needs or particular security environments, enabling our security staff to handle unique challenges effectively."
    },
    {
      question: "How quickly can you deploy security personnel?",
      answer: "We typically arrange for deployment within 24 to 48 hours of the agreement for standard security contracts. In addition, our rapid response team is on standby for unforeseen emergencies and can be mobilised immediately. If you have urgent security needs, we encourage you to contact us directly for immediate assistance."
    },
    {
      question: "Do your security officers wear uniforms?",
      answer: "Yes, our security officers are easily identifiable in professional uniforms unless the situation necessitates plainclothes security for specific assignments. Our uniforms are designed to project an authoritative and professional image, ensuring that our officers are readily recognised by staff, visitors, and customers, which enhances the overall security presence."
    },
    {
      question: "How do you determine what security services we need?",
      answer: "We begin every engagement with a comprehensive security assessment of your property or event. One of our experienced security consultants will visit your site, engage with you to discuss your concerns and requirements, identify any potential vulnerabilities, and recommend tailored security measures. This consultative approach ensures you receive security services precisely aligned with your needs and risks."
    },
    {
      question: "What is the pricing structure for your services?",
      answer: "Our pricing structure is competitive and crystal clear, with rates provided upon request. We create customised quotes based on several factors, including: The number of security personnel needed for your assignment, The hours of coverage required, Any specialised services or equipment that may be necessary, Location-specific factors and our findings from the risk assessment. Please get in touch with us directly for a detailed quote tailored to your specific security needs."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We understand that every client has unique needs, so we offer flexibility regarding contract duration. From long-term agreements for ongoing security solutions to short-term arrangements for temporary needs, we can accommodate various client preferences to ensure your security needs are effectively met."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24 bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">Frequently Asked Questions</h1>
        </div>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer" onClick={() => toggleFAQ(index)}>
                {faq.question}
              </h2>
              {openIndex === index && <p className="text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ; 