"use client"
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi"

export function Contact18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">Email</h3>
            <p className="mb-5 md:mb-6">Get in touch with us for any inquiries or support.</p>
            <a className="underline" href="#">
              info@fortissecurity.co.uk
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">Phone</h3>
            <p className="mb-5 md:mb-6">Reach us anytime for immediate assistance and support.</p>
            <a className="underline" href="#">
              +44 (0) 1234 567890
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">Office</h3>
            <p className="mb-5 md:mb-6">Visit us at our headquarters for consultations and meetings.</p>
            <a className="underline" href="#">
              456 Security Lane, Leeds, LS1 2AB, UK
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

