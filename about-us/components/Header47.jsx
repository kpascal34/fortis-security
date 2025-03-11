"use client"

import { Button } from "@relume_io/relume-ui"

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Welcome</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">Our Commitment to Safety</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              At Fortis Security, we take pride in our dedication to providing exceptional security services tailored to
              your needs. Our mission is to create a safe and secure environment for all our clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Contact Us" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

