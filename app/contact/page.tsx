"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend or email service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gx-navy via-gx-navy to-gx-teal text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get In <span className="text-gx-teal">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                Ready to start your next project? We'd love to hear from you. Contact us today to discuss how we can
                help integrate your projects, procurement, and property needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gx-teal rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gx-navy">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+27 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gx-teal focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="project-management">Project Management</option>
                      <option value="procurement">Procurement Services</option>
                      <option value="real-estate">Real Estate Management</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gx-teal hover:bg-gx-teal/90 text-white transition-all duration-300 hover:scale-105 group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gx-navy mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're here to help you succeed. Reach out to us through any of the following channels, and we'll get
                    back to you promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gx-teal rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gx-navy mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:0723305637" className="hover:text-gx-teal transition-colors">
                          072 330 5637
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gx-teal rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gx-navy mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@gxintegratedservices.com" className="hover:text-gx-teal transition-colors">
                          info@gxintegratedservices.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gx-teal rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gx-navy mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gx-navy mb-6">
                Frequently Asked <span className="text-gx-teal">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gx-navy mb-3">How quickly can you start a new project?</h3>
                <p className="text-gray-600">
                  We typically can begin project planning within 1-2 weeks of initial consultation, depending on project
                  scope and requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gx-navy mb-3">
                  Do you work with small businesses or only large corporations?
                </h3>
                <p className="text-gray-600">
                  We work with businesses of all sizes, from small startups to large corporations. Our services are
                  scalable to meet your specific needs and budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gx-navy mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  We have experience across various industries including construction, manufacturing, retail,
                  healthcare, and technology sectors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gx-navy mb-3">
                  How do you ensure project quality and timelines?
                </h3>
                <p className="text-gray-600">
                  We use proven project management methodologies, regular progress reviews, and clear communication
                  channels to ensure quality delivery on time and within budget.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
