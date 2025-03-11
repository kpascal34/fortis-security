import { NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  company?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]*$/
  return !phone || phoneRegex.test(phone)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, company }: ContactFormData = body

    // Validate required fields
    const errors: string[] = []

    if (!name?.trim()) {
      errors.push("Name is required")
    }

    if (!email?.trim()) {
      errors.push("Email is required")
    } else if (!validateEmail(email)) {
      errors.push("Invalid email format")
    }

    if (!message?.trim()) {
      errors.push("Message is required")
    }

    if (phone && !validatePhone(phone)) {
      errors.push("Invalid phone number format")
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join(", ") },
        { status: 400 }
      )
    }

    // Log the submission (replace with your actual logging/storage logic)
    console.log("Form submission:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      message,
    })

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Forward to a CRM
    // For now, we'll simulate a successful submission

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json(
      {
        message: "Form submitted successfully",
        data: {
          name,
          email,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    
    // Return appropriate error message
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 