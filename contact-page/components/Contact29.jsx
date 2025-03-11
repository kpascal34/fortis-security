"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui"

export function Contact29() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 flex max-w-lg flex-col justify-start md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Locations</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Locations</h2>
          <p className="md:text-md">Find our offices in Yorkshire and Manchester.</p>
        </div>
        <Tabs
          orientation="vertical"
          className="relative grid auto-cols-fr grid-cols-1 gap-12 md:grid-cols-[.5fr_1fr] md:gap-y-16 lg:gap-x-20 lg:gap-y-16"
        >
          <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <TabsTrigger
              value="tab-1"
              className="items-start justify-start border-0 border-l-2 border-border-primary border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
            >
              <div className="text-left">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Yorkshire</h3>
                <p className="inline-block whitespace-normal">123 Security Ave, Yorkshire, UK</p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>View Map</p>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="items-start justify-start border-0 border-l-2 border-border-primary border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
            >
              <div className="text-left">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Manchester</h3>
                <p className="inline-block whitespace-normal">456 Safety St, Manchester, UK</p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>View Map</p>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="items-start justify-start border-0 border-l-2 border-border-primary border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
            >
              <div className="text-left">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">Locations</h3>
                <p className="inline-block whitespace-normal">789 Protection Rd, London, UK</p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>View Map</p>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1" className="data-[state=active]:animate-tabs">
            <div className="relative size-full">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Relume placeholder map image"
                className="size-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="tab-2" className="data-[state=active]:animate-tabs">
            <div className="relative size-full">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Relume placeholder map image"
                className="size-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="tab-3" className="data-[state=active]:animate-tabs">
            <div className="relative size-full">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Relume placeholder map image"
                className="size-full object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

