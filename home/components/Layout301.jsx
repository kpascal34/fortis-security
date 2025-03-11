"use client"

import { Button } from "@relume_io/relume-ui"
import { RxChevronRight } from "react-icons/rx"

export function Layout301() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="text-center text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Comprehensive Security Solutions Tailored for Your Peace of Mind
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4 lg:gap-y-16">
          <div className="text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Medium length section heading goes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Medium length section heading goes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Medium length section heading goes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Medium length section heading goes here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

