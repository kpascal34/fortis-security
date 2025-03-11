import Image from "next/image"
import Link from "next/link"

export default function RiskAssessmentsPage() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Comprehensive discussion to understand your security needs and concerns.",
    },
    {
      number: "02",
      title: "Site Survey",
      description: "Detailed inspection of your premises to identify potential vulnerabilities.",
    },
    {
      number: "03",
      title: "Risk Analysis",
      description: "In-depth analysis of security risks and threat assessment.",
    },
    {
      number: "04",
      title: "Recommendations",
      description: "Customised security solutions and implementation strategies.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 pt-16">
            Security Risk Assessments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            At Fortis Security, our Risk Assessment service offers comprehensive evaluations to identify vulnerabilities and develop strong protection strategies. We analyse your security needs from all angles to create practical solutions safeguarding your assets, personnel, and operations.
          </p>
          <Link href="/contact">
            <button className="bg-[#57ADCF] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2D4A5D] transition-colors">
              Schedule Assessment
            </button>
          </Link>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="absolute -top-4 left-6 bg-[#3D5B6E] text-white text-xl font-bold py-2 px-4 rounded">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-2 mb-20">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/event-crowd-control.jpg"
              alt="Risk Assessment Process"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Risk Assessment Services
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#57ADCF] p-2">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Physical Security Assessment</h3>
                  <p className="text-gray-600">Evaluation of physical security measures and infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#57ADCF] p-2">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Security Protocols Review</h3>
                  <p className="text-gray-600">Analysis of existing security procedures and policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#57ADCF] p-2">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Risk Analysis Reports</h3>
                  <p className="text-gray-600">Detailed documentation of findings and recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-lg p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Assess Your Security Risks?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our expert team will help you identify and address security vulnerabilities in your organisation.
            </p>
            <Link href="/contact">
              <button className="bg-[#57ADCF] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 