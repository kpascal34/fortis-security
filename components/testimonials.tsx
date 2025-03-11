import React from "react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Poppy",
      feedback: "Michael is the best bouncer he really looked after me and my friends when we were drunk and made sure we didn't get into any trouble.",
      position: ""
    },
    {
      name: "Paul",
      feedback: "Love everything about the night, but mainly the staff, best staff I've ever met, big shout out to Kingsley for looking after me, most caring staff in Leeds.",
      position: ""
    },
    {
      name: "Morgan",
      feedback: "The door staff are always really good about handling things without being overly aggressive. They're really supportive when you need help.",
      position: ""
    },
    {
      name: "Ryan",
      feedback: "Professional and reliable service. The team is always punctual and handles situations with expertise. Creating a relaxing environment for our customers.",
      position: ""
    }
  ]

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}, {testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 