import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Manned Guarding",
      description: "Professional security personnel providing 24/7 protection for your premises.",
      icon: (
        <svg
          className="h-8 w-8 text-[#57ADCF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      link: "/manned-guarding",
      image: "/venue-security.jpg",
    },
    {
      title: "Door Supervision",
      description: "Licensed door supervisors for venues and events management.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      link: "/door-supervisors",
      image: "/Door-Sup.jpg",
    },
    {
      title: "Event Security",
      description: "Comprehensive security solutions for events of all sizes.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
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
      ),
      link: "/event-security",
      image: "/patrol-service.jpg",
    },
    {
      title: "Risk Assessment",
      description: "Expert security risk assessment and consultation services.",
      icon: (
        <svg
          className="h-8 w-8 text-white"
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
      ),
      link: "/risk-assessments",
      image: "/event-crowd-control.jpg",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Fortis Security, we provide tailored security services to meet your needs. Our experienced team ensures that each solution offers the best security and peace of mind.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="group block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-56 w-full mb-2 group-hover:bg-blue-700 transition-colors">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                className="object-cover rounded-lg"
              />
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
            <Link 
              href={service.link} 
              className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-[#3D5B6E] text-white rounded-md hover:bg-[#2D4A5D] transition-colors"
            >
              Learn More
            </Link>
          </Link>
        ))}
      </div>
    </main>
  )
} 