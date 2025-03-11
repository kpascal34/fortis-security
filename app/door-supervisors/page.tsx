import Image from "next/image"
import Link from "next/link"

export default function DoorSupervisorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Professional Door Supervision Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert Vigilance. Uncompromised Safety. Your Venue, Secured.
            </p>
            <Link href="/contact">
              <button className="bg-[#3D5B6E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2D4A5D] transition-colors">
                Get a Quote
              </button>
            </Link>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/Door-Sup.jpg"
              alt="Door Supervision Services"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="rounded-lg bg-[#57ADCF] p-2 inline-block mb-4">
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed Personnel</h3>
            <p className="text-gray-600">All our door supervisors are SIA licensed and fully trained.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="rounded-lg bg-[#57ADCF] p-2 inline-block mb-4">
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
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
            <p className="text-gray-600">Quick deployment and immediate response to any situation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="rounded-lg bg-[#57ADCF] p-2 inline-block mb-4">
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
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Team</h3>
            <p className="text-gray-600">Experienced and courteous security professionals.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#3D5B6E] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Door Supervision Services?</h2>
          <p className="text-lg mb-8">Contact us today for a customized security solution.</p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
} 