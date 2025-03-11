import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID

export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
  company?: string;
}) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        subject: formData.subject,
        company: formData.company || "Not provided",
      }
    );

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};