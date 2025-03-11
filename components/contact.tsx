"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from 'emailjs-com'

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken: string;
};

const sendEmail = async (formData: FormData) => {
  try {
    const result = await emailjs.send(
      'service_s40muhp', // Service ID
      'template_pyx1via', // Template ID
      formData,
      'L_WED7EtdpQ51lFN2' // Public Key
    );
    return result;
  } catch (error) {
    throw new Error('Failed to send email');
  }
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const recaptchaRef = useRef<ReCAPTCHA | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const recaptchaValue = await recaptchaRef.current?.executeAsync()
      if (!recaptchaValue) {
        setSubmitStatus({
          type: "error",
          message: "Please verify that you are not a robot",
        })
        return
      }

      // Send email using EmailJS
      await sendEmail({ ...formData, recaptchaToken: recaptchaValue })

      // Send data to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaValue,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message. We'll be in touch soon!",
      })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current?.reset()
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
      <section className="max-w-6xl mx-auto px-4 py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our security services. We're here to help protect what matters most to you.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D5B6E] focus:ring-[#3D5B6E]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D5B6E] focus:ring-[#3D5B6E]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D5B6E] focus:ring-[#3D5B6E]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D5B6E] focus:ring-[#3D5B6E]"
              />
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Ld-hukqAAAAAHoT0TKKe8OclWgdnhcOTlh8QZiB"
              size="invisible"
            />

            {submitStatus.type && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3D5B6E] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#2D4A5D] focus:outline-none focus:ring-2 focus:ring-[#3D5B6E] focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </>
  )
}

