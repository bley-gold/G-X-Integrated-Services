import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Home, CheckCircle, Clock, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gx-navy via-gx-navy to-gx-teal text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-gx-teal">Services</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                Comprehensive solutions across project management, procurement, and real estate management. We deliver
                end-to-end services that integrate seamlessly with your business objectives.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Project Management Services */}
          <AnimatedSection>
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gx-navy">Project Management Services</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We provide end-to-end project execution solutions, covering all phases of the project lifecycle—from
                    initial planning, budgeting, and scheduling to quality control, risk management, and final delivery.
                    Our approach ensures seamless coordination, clear communication, and measurable results.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Project Planning & Strategy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Budget Management & Cost Control</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Quality Assurance & Risk Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Stakeholder Communication</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gx-navy mb-6">Project Management Support Services</h3>
                  <p className="text-gray-600 mb-6">
                    We offer specialised support to project teams, including document control, reporting, scheduling
                    assistance, cost tracking, and stakeholder coordination.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gx-teal mr-2" />
                      <span className="text-sm text-gray-700">Document Control</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-gx-teal mr-2" />
                      <span className="text-sm text-gray-700">Progress Reporting</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 text-gx-teal mr-2" />
                      <span className="text-sm text-gray-700">Schedule Management</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gx-teal mr-2" />
                      <span className="text-sm text-gray-700">Team Coordination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Procurement Services */}
          <AnimatedSection>
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-50 p-8 rounded-lg order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gx-navy mb-6">Strategic Procurement Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Our procurement team leverages industry insights and strong supplier relationships to deliver
                    cost-effective, timely, and compliant procurement solutions for projects of any scale.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gx-navy mb-2">Vendor Evaluation</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive assessment of supplier capabilities and reliability
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gx-navy mb-2">Contract Negotiation</h4>
                      <p className="text-sm text-gray-600">
                        Securing favorable terms and conditions for all stakeholders
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gx-navy mb-2">Compliance Management</h4>
                      <p className="text-sm text-gray-600">
                        Ensuring all procurement activities meet regulatory requirements
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gx-navy">Procurement Services</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our procurement team offers strategic sourcing, vendor evaluation, contract negotiation, and
                    compliance management. By leveraging industry insights and strong supplier relationships, we deliver
                    cost-effective, timely, and compliant procurement solutions for projects of any scale.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Strategic Sourcing & Market Analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Supplier Relationship Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Cost Optimization & Value Engineering</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Procurement Process Improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Real Estate Management */}
          <AnimatedSection>
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mr-4">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gx-navy">Real Estate Management</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our dedicated Real Estate Management division provides property marketing, tenant management,
                    facility maintenance, and financial reporting services. We help property owners maximize asset value
                    while maintaining operational efficiency and tenant satisfaction.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Property Marketing & Leasing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Tenant Relations & Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Facility Maintenance & Operations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gx-teal mr-3" />
                      <span className="text-gray-700">Financial Reporting & Analysis</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gx-navy mb-6">Subdivision Services</h3>
                  <p className="text-gray-600 mb-6">
                    Specialized services for property subdivision projects, including planning, approvals, and
                    development coordination.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gx-teal/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-xs font-bold text-gx-teal">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Planning & Design</h4>
                        <p className="text-sm text-gray-600">Comprehensive subdivision planning and design services</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gx-teal/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-xs font-bold text-gx-teal">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Approvals & Permits</h4>
                        <p className="text-sm text-gray-600">Managing regulatory approvals and permit processes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gx-teal/10 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-xs font-bold text-gx-teal">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Development Coordination</h4>
                        <p className="text-sm text-gray-600">Coordinating all aspects of subdivision development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gx-navy mb-6">
                Why Choose <span className="text-gx-teal">Our Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of working with a team that puts your success first
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gx-teal" />
                </div>
                <h3 className="text-xl font-semibold text-gx-navy mb-2">Experienced Team</h3>
                <p className="text-gray-600">15+ years of combined expertise across all service areas</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gx-teal" />
                </div>
                <h3 className="text-xl font-semibold text-gx-navy mb-2">Proven Track Record</h3>
                <p className="text-gray-600">98% success rate with over 500 completed projects</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-gx-teal" />
                </div>
                <h3 className="text-xl font-semibold text-gx-navy mb-2">Client-Centric Approach</h3>
                <p className="text-gray-600">Tailored solutions that align with your specific objectives</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gx-teal" />
                </div>
                <h3 className="text-xl font-semibold text-gx-navy mb-2">Commitment to Excellence</h3>
                <p className="text-gray-600">Exceeding expectations through quality and innovation</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gx-navy to-gx-teal text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our comprehensive services can help achieve your project goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-gx-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gx-navy px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
