import { Navigation } from "./Navigation"
import React, { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Load Tawk.to script
    var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/67b0bd2ab09408190f0fb1e4/1ik565rbm';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      if (s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow bg-white">
        {children}
      </div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Fortis Security</h3>
              <p className="text-gray-400">
                Professional security services for all your protection needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/door-supervisors" className="text-gray-400 hover:text-white">
                    Door Supervision
                  </a>
                </li>
                <li>
                  <a href="/event-security" className="text-gray-400 hover:text-white">
                    Event Security
                  </a>
                </li>
                <li>
                  <a href="/manned-guarding" className="text-gray-400 hover:text-white">
                    Manned Guarding
                  </a>
                </li>
                <li>
                  <a href="/risk-assessments" className="text-gray-400 hover:text-white">
                    Risk Assessments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Yorkshire & Greater Manchester</li>
                <li>info@fortissecured.co.uk</li>
                <li>077762 853255‬</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fortis Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col space-y-2">
          <a href="mailto:info@fortissecured.co.uk" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
            </svg>
          </a>
          <a href="tel:077762853255" className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a href="https://wa.me/077762853255" className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1EBE56] transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.24 7.76a6 6 0 11-8.48 8.48l-3.52 1.04 1.04-3.52a6 6 0 018.48-8.48z" />
            </svg>
          </a>
          <button className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4v8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
} 