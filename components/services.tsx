"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Services() {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
      <section id="services" className="max-w-6xl mx-auto px-4 py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">Our Services</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 justify-items-center">
          {/* Door Supervision Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm w-full"
          >
            <div className="relative h-48">
              <Image
                src="/Door-Sup.jpg"
                alt="Door Supervision"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Door Supervision</h3>
              <p className="text-gray-600 flex-grow">Professional door supervisors ensuring venue safety and security with expert crowd management.</p>
              <Link 
                href="/door-supervisors" 
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-[#3D5B6E] text-white rounded-md hover:bg-[#2D4A5D] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Manned Guarding Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm w-full"
          >
            <div className="relative h-48">
              <Image
                src="/venue-security.jpg"
                alt="Manned Guarding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manned Guarding</h3>
              <p className="text-gray-600 flex-grow">24/7 professional security personnel protecting your premises with vigilant monitoring and patrol services.</p>
              <Link 
                href="/manned-guarding" 
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-[#3D5B6E] text-white rounded-md hover:bg-[#2D4A5D] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Event Security Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm w-full"
          >
            <div className="relative h-48">
              <Image
                src="/patrol-service.jpg"
                alt="Event Security"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Security</h3>
              <p className="text-gray-600 flex-grow">Comprehensive security solutions for events of all sizes, ensuring smooth operations and attendee safety.</p>
              <Link 
                href="/event-security" 
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-[#3D5B6E] text-white rounded-md hover:bg-[#2D4A5D] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </>
  )
}

