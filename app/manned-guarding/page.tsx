import Image from "next/image"
import Link from "next/link"

export default function MannedGuardingPage() {
  const features = [
    {
      title: "24/7 Security Coverage",
      description: "Round-the-clock protection for your premises with trained security personnel.",
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Trained Professionals",
      description: "Highly skilled and licensed security guards with extensive experience.",
      icon: (
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
      ),
    },
    {
      title: "Advanced Monitoring",
      description: "State-of-the-art surveillance and reporting systems.",
      icon: (
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
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Manned Guarding Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Professional security personnel providing comprehensive protection for your premises, assets, and people. Our trained guards ensure the highest level of security 24/7.
            </p>
            <Link href="/contact">
              <button className="bg-[#3D5B6E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2D4A5D] transition-colors">
                Get Started
              </button>
            </Link>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/venue-security.jpg"
              alt="Manned Guarding Services"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
              <div className="rounded-lg bg-[#3D5B6E] p-2 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Manned Guarding Services Include
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#3D5B6E] p-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Access Control</h3>
                <p className="text-gray-600">Monitoring and controlling entry/exit points</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#3D5B6E] p-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Patrol Services</h3>
                <p className="text-gray-600">Regular security patrols of your premises</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#3D5B6E] p-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Incident Response</h3>
                <p className="text-gray-600">Swift and professional response to security incidents</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#3D5B6E] p-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Reporting</h3>
                <p className="text-gray-600">Detailed security reports and documentation</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#3D5B6E] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Premises?</h2>
          <p className="text-lg mb-8">Contact us today for a customised manned guarding solution.</p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
} 