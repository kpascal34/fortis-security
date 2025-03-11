"use client"

import { Button } from "@relume_io/relume-ui"
import { RxChevronRight } from "react-icons/rx"

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Excellence</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why Choose Fortis Security for Your Needs
            </h1>
            <p className="md:text-md">
              At Fortis Security, we pride ourselves on our extensive certifications and rigorous training programs that
              ensure our team is always at the forefront of industry standards. Our wealth of experience in diverse
              security environments allows us to tailor our services to meet your specific requirements.
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
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

