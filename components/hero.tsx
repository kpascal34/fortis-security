"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const images = [
    {
      src: "/security-guard-entrance.jpg",
      alt: "Professional security guard at entrance"
    },
    {
      src: "/event-crowd-control.jpg",
      alt: "Event security team managing crowd control"
    },
    {
      src: "/surveillance-center.jpg",
      alt: "Modern surveillance monitoring center"
    },
    {
      src: "/venue-security.jpg",
      alt: "Professional venue security team"
    },
    {
      src: "/patrol-service.jpg",
      alt: "Security patrol service in action"
    },
    {
      src: "/corporate-security.jpg",
      alt: "Corporate security solutions"
    }
  ]

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="container relative pt-16 pb-24 md:pt-16 md:pb-32 mx-auto max-w-7xl">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-4"
          >
            <Image
              src="/Fortis-Security-Logo.png"
              alt="Fortis Security Logo"
              width={300}
              height={300}
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Your Trusted Partner in Security Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            At Fortis Security, we specialise in bespoke security services tailored to your needs. Operating across
            Yorkshire and Manchester, we ensure a safe environment for businesses and events.
          </motion.p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Facebook Logo */}
            <Link href="https://www.facebook.com/Fortissecured/" passHref>
              <Image src="/icons8-facebook.gif" alt="Facebook" width={40} height={40} />
            </Link>
            {/* Instagram Logo */}
            <Link href="https://www.instagram.com/fortis_security_/" passHref>
              <Image src="/icons8-instagram.gif" alt="Instagram" width={40} height={40} />
            </Link>
            {/* LinkedIn Logo */}
            <Link href="https://www.linkedin.com/company/fortis-security-group" passHref>
              <Image src="/icons8-linkedin-2.gif" alt="LinkedIn" width={40} height={40} />
            </Link>
          </div>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                variants={itemVariants}
                className="relative h-[240px] overflow-hidden rounded-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  className="object-cover"
                  priority
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}