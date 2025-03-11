import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="w-full px-6 py-40 flex flex-col items-center text-center">
      <div className="grid gap-16 md:grid-cols-2 items-center text-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10 text-center">
            About
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Fortis Security is a leading service provider dedicated to delivering exceptional protection and peace of mind to our clients. With years of experience and a dedicated team of professionals, we ensure the highest security standards across all our services.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We are committed to offering competitive wages that reflect our employees' hard work and expertise while upholding the highest safety standards for the properties we protect and the clients we serve. We achieve this by utilising cutting-edge security technologies and proven techniques. Our collaborative environment encourages open communication and feedback between our staff and clients.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our primary goal is to deliver outstanding service through our dedicated team, which is trained in industry best practices and participates in continuous professional development opportunities. Investing in our employees ensures they are well-equipped to adapt to the evolving security landscape and provide top-tier service to our clientele. At Fortis Security, a secure environment is built on mutual respect, dedication, and a commitment to excellence.
          </p>
        </div>
        <div className="relative h-[600px] rounded-lg overflow-hidden mt-10">
          <Image
            src="/corporate-security.jpg"
            alt="Fortis Security Team"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3 mt-10">
        <div className="flex items-start gap-4 justify-center">
          <div className="rounded-lg bg-[#3D5B6E] p-2">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
            <h3 className="font-semibold text-gray-900">Professional Excellence</h3>
            <p className="text-gray-600">Highly trained and certified security personnel</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center">
          <div className="rounded-lg bg-[#3D5B6E] p-2">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
            <p className="text-gray-600">Round-the-clock security services and support</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center">
          <div className="rounded-lg bg-[#3D5B6E] p-2">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Experienced Team</h3>
            <p className="text-gray-600">Years of industry expertise and knowledge</p>
          </div>
        </div>
      </div>
    </main>
  )
} 