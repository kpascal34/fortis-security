"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function About() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="Fortis Security Logo" className="w-[400px] h-auto object-contain" />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
            <p className="text-muted-foreground">
              At Fortis, we have extensive experience as a leading security company in Yorkshire and Greater Manchester. Our commitment to excellence distinguishes us in a competitive market and allows us to provide outstanding services.
            </p>
            <p className="text-muted-foreground">
              We aim to positively change the security sector by prioritising fair compensation and better working conditions for our staff. Our investment in training and ongoing support fosters a positive workplace culture, attracting and retaining top talent to benefit our clients and communities.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </>
  )
}

