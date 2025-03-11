"use client"

import { Button } from "@relume_io/relume-ui"
import { RxChevronRight } from "react-icons/rx"

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Secure</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Comprehensive Event Security Solutions Tailored for You
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Our event security services ensure a safe and enjoyable experience for all attendees. With expert crowd
              management and proactive risk mitigation strategies, we are committed to protecting your event from
              potential threats. Trust our dedicated team to handle every aspect of security, allowing you to focus on
              your event's success.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button title="Sign Up" variant="link" size="link" iconRight={<RxChevronRight />}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  )
}

