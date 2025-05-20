"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MessageSquare,
  Phone,
  Mail,
  FileQuestion,
  Upload,
  Send,
  HelpCircle,
  Car,
  PenToolIcon as Tool,
  Clock,
  CreditCard,
  MapPin,
} from "lucide-react"

export default function SupportPage() {
  const [attachments, setAttachments] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAttachments([...attachments, ...newFiles])
    }
  }

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments]
    newAttachments.splice(index, 1)
    setAttachments(newAttachments)
  }

  const faqCategories = [
    { id: "general", label: "General" },
    { id: "services", label: "Services" },
    { id: "booking", label: "Booking" },
    { id: "payment", label: "Payment" },
    { id: "account", label: "Account" },
  ]

  const faqs = {
    general: [
      {
        question: "What are your operating hours?",
        answer:
          "Most of our workshops operate from Monday to Saturday, 8:00 AM to 6:00 PM, and some locations are open on Sundays from 10:00 AM to 4:00 PM. Please check the specific location's details on our Locations page for exact operating hours.",
      },
      {
        question: "Do I need to make an appointment?",
        answer:
          "While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure prompt service and minimize waiting time. You can easily book an appointment through our website or by calling your preferred location.",
      },
      {
        question: "How long does a typical service take?",
        answer:
          "Service duration varies depending on the type of service. A basic oil change may take 30 minutes, while a full service can take 90 minutes or more. When you book an appointment, we'll provide an estimated completion time.",
      },
    ],
    services: [
      {
        question: "What types of services do you offer?",
        answer:
          "We offer a comprehensive range of automotive services including full service, tire changes, battery replacement, aircond service, brake repair, oil changes, car inspections, engine diagnostics, and car detailing. Visit our Services page for more details.",
      },
      {
        question: "Do you provide warranty for your services?",
        answer:
          "Yes, all our services come with a warranty. Parts replaced have a manufacturer's warranty, and our labor is guaranteed for 3 months or 5,000 km, whichever comes first.",
      },
      {
        question: "Do you service all car brands?",
        answer:
          "Yes, our technicians are trained to work on all major car brands, both local and international. We have specialized knowledge and tools for brands like Perodua, Proton, Honda, Toyota, Nissan, BMW, Mercedes, and many more.",
      },
    ],
    booking: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment through our website by visiting the Booking page, selecting your preferred location, service, date, and time. Alternatively, you can call your nearest workshop directly.",
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer:
          "Yes, you can reschedule or cancel your appointment through your profile page or by calling us. We appreciate at least 24 hours notice for cancellations or rescheduling.",
      },
      {
        question: "Do I need to be present during the service?",
        answer:
          "It's not mandatory to stay during the service, but we recommend being available by phone in case we need to contact you regarding any additional issues discovered during the service.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, credit/debit cards (Visa, Mastercard, American Express), and digital wallets (Touch 'n Go eWallet, GrabPay, Boost). Some locations also offer installment payment options for larger repairs.",
      },
      {
        question: "Do you provide cost estimates before starting work?",
        answer:
          "Yes, we always provide a detailed cost estimate before beginning any work. If additional issues are discovered during the service, we'll contact you for approval before proceeding with any extra work.",
      },
      {
        question: "Are there any hidden charges?",
        answer:
          "No, we pride ourselves on transparent pricing. The estimate we provide includes all parts, labor, and taxes. There are no hidden charges or surprise fees.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking on the 'Sign Up' button on our website and filling out the registration form with your details. Having an account makes it easier to book appointments and track your service history.",
      },
      {
        question: "Can I add multiple vehicles to my account?",
        answer:
          "Yes, you can add multiple vehicles to your account. This makes it easier to book services for different vehicles and keep track of their maintenance history.",
      },
      {
        question: "How can I update my personal information?",
        answer:
          "You can update your personal information by logging into your account, navigating to the Profile section, and clicking on the Edit Profile button.",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Customer Support</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Need help? We're here to assist you with any questions or concerns about our services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">Live Chat</h2>
            <p className="text-gray-600 mb-4">
              Chat with our support team for immediate assistance during business hours.
            </p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">Call Us</h2>
            <p className="text-gray-600 mb-4">Speak directly with our customer service team.</p>
            <Button className="w-full" asChild>
              <a href="tel:+60312345678">+60 3-1234 5678</a>
            </Button>
            <p className="text-sm text-gray-500 mt-2">Mon-Sat: 8:00 AM - 6:00 PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">Email Us</h2>
            <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
            <Button className="w-full" asChild>
              <a href="mailto:support@limtayar.com.my">support@limtayar.com.my</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="e.g. 012-345-6789" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is your inquiry about?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Please provide details about your inquiry or issue" rows={5} />
              </div>

              <div className="space-y-2">
                <Label>Attachments (Optional)</Label>
                <div className="border border-dashed rounded-md p-4">
                  <div className="flex flex-col items-center justify-center text-center">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                    <p className="text-xs text-gray-400 mb-2">Max file size: 10MB (JPG, PNG, PDF)</p>
                    <Input type="file" className="hidden" id="file-upload" multiple onChange={handleFileChange} />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" size="sm">
                        Browse Files
                      </Button>
                    </Label>
                  </div>

                  {attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileQuestion className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-gray-500"
                            onClick={() => removeAttachment(index)}
                          >
                            &times;
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions about our services.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                  {faqCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs[category.id as keyof typeof faqs].map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-start">
                              <HelpCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-7">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-gray-600 mb-6">
              For urgent matters or roadside assistance, you can contact our emergency hotline. Our team is available
              24/7 to help you with any urgent car issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700" asChild>
                <a href="tel:+60399998888">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency Hotline
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/locations">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Nearest Workshop
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Car className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Roadside Assistance</h3>
              </div>
              <p className="text-sm text-gray-600">24/7 emergency support for breakdowns and accidents</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Tool className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Emergency Repairs</h3>
              </div>
              <p className="text-sm text-gray-600">Quick fixes to get you back on the road safely</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">24/7 Support</h3>
              </div>
              <p className="text-sm text-gray-600">Round-the-clock customer service for urgent matters</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <CreditCard className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">Billing Issues</h3>
              </div>
              <p className="text-sm text-gray-600">Immediate assistance with payment concerns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
