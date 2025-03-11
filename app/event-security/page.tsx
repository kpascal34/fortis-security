import Image from "next/image"
import Link from "next/link"

export default function EventSecurityPage() {
  const services = [
    {
      title: "Event Planning",
      description: "Comprehensive security planning and risk assessment for your event.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Crowd Management",
      description: "Expert crowd control and management for events of all sizes.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Access Control",
      description: "Secure entry and exit management with advanced access control systems.",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Emergency Response",
      description: "Rapid response protocols and emergency management procedures.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 pt-16">
            Event Security Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Professional security services for events of all sizes. From concerts and festivals to corporate events and private parties.
          </p>
          <Link href="/contact">
            <button className="bg-[#3D5B6E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2D4A5D] transition-colors">
              Request a Quote
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="rounded-lg bg-[#3D5B6E] p-3 inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/patrol-service.jpg"
              alt="Event Security Services"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Event Security?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 mt-1"
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
                <div>
                  <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                  <p className="text-gray-600">Highly trained security professionals with extensive event experience.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 mt-1"
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
                <div>
                  <h3 className="font-semibold text-gray-900">Customized Solutions</h3>
                  <p className="text-gray-600">Tailored security plans to meet your specific event requirements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-blue-600 mt-1"
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
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock support and monitoring throughout your event.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
} 