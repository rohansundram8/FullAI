"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  Calendar,
  MapPin,
  PenToolIcon as Tool,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Search,
  Wrench,
  Battery,
  Thermometer,
  Disc,
} from "lucide-react"

export default function Home() {
  // --- Admin Appointments State ---
  const [adminView, setAdminView] = useState(false)
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (adminView) {
      setLoading(true)
      fetch("/api/booking")
        .then(res => res.json())
        .then(data => {
          setBookings(data.bookings || [])
          setLoading(false)
        })
    }
  }, [adminView])

  // --- Admin Toggle Button (for demo only, not secure) ---
  const handleAdminToggle = () => setAdminView(v => !v)

  if (adminView) {
    return (
      <div className="container py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All Appointments (Admin View)</h1>
          <Button variant="outline" onClick={handleAdminToggle}>Back to Home</Button>
        </div>
        <Card>
          <CardContent>
            {loading ? (
              <div>Loading...</div>
            ) : bookings.length === 0 ? (
              <div>No appointments found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-2">ID</th>
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Time</th>
                      <th className="text-left p-2">Location</th>
                      <th className="text-left p-2">Service</th>
                      <th className="text-left p-2">Car</th>
                      <th className="text-left p-2">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id}>
                        <td className="p-2">{b.id}</td>
                        <td className="p-2">{b.date}</td>
                        <td className="p-2">{b.time}</td>
                        <td className="p-2">{b.location}</td>
                        <td className="p-2">{b.service}</td>
                        <td className="p-2">
                          {b.carDetails?.brand} {b.carDetails?.model} ({b.carDetails?.year})<br />
                          Plate: {b.carDetails?.plateNumber}
                        </td>
                        <td className="p-2">{b.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // --- Main Home Page ---
  return (
    <div className="flex flex-col min-h-screen">
      {/* Admin Button (for demo only, remove or secure in production) */}
      <div className="fixed top-4 right-4 z-50">
        <Button size="sm" variant="outline" onClick={handleAdminToggle}>
          Admin View
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-limtayar-black py-20 md:py-28">
        <div className="absolute inset-0 opacity-20 hero-pattern"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">Malaysia's Trusted Car Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Car Services You Can Trust
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                From routine maintenance to complex repairs, our expert technicians keep your vehicle running at its
                best across multiple locations in Malaysia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/booking">Book Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="/locations">Find Nearest Workshop</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/placeholder.svg?key=wwkga" alt="Professional car service" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ...rest of your original sections remain unchanged... */}
      {/* Service Search Section */}
      {/* Services Section */}
      {/* Why Choose Us Section */}
      {/* Promotions Section */}
      {/* CTA Section */}
      {/* (Paste the rest of your original code here, unchanged) */}
    </div>
  )
}