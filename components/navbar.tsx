"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto px-1">
        <div className="flex justify-end items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    pathname === link.href
                      ? "bg-[#3D5B6E] text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <Link
                href="/login"
                className="px-4 py-2 rounded-md text-sm font-medium bg-[#57ADCF] text-white hover:bg-[#4899B9] transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors ml-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute right-0 left-0 bg-gray-900 shadow-lg transition-all duration-200 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${
                    pathname === link.href
                      ? "bg-[#3D5B6E] text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium bg-[#57ADCF] text-white hover:bg-[#4899B9] transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

