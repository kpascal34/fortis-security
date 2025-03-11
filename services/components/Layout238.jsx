"use client"

import { Button } from "@relume_io/relume-ui"
import { RxChevronRight } from "react-icons/rx"

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Comprehensive Security Solutions Tailored to Your Unique Needs
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" alt="Relume logo" className="size-12" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Explore Our Key Security Services for Ultimate Protection
            </h3>
            <p>Our diverse range of security services ensures safety and peace of mind.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" alt="Relume logo" className="size-12" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Door Supervision: Professional Security for Your Venue and Events
            </h3>
            <p>Our trained door supervisors maintain order and enhance safety at your premises.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" alt="Relume logo" className="size-12" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Manned Guarding: Reliable Protection Around the Clock
            </h3>
            <p>Our manned guarding services provide 24/7 security for your assets and people.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

