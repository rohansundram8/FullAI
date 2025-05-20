"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Clock, Search } from "lucide-react"

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const locations = [
    {
      id: "kl",
      name: "Kuala Lumpur - Jalan Ampang",
      address: "123 Jalan Ampang, 50450 Kuala Lumpur",
      phone: "+60 3-2345 6789",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM",
      region: "central",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Aircond Service", "Brake Repair"],
    },
    {
      id: "pj",
      name: "Petaling Jaya - Damansara",
      address: "45 Jalan SS2/55, 47300 Petaling Jaya, Selangor",
      phone: "+60 3-7834 5678",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: Closed",
      region: "central",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Aircond Service"],
    },
    {
      id: "shah",
      name: "Shah Alam - Seksyen 13",
      address: "18 Jalan Kemajuan, Seksyen 13, 40100 Shah Alam, Selangor",
      phone: "+60 3-5567 8901",
      hours: "Mon-Sat: 8:30 AM - 6:30 PM, Sun: 10:00 AM - 3:00 PM",
      region: "central",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Brake Repair"],
    },
    {
      id: "subang",
      name: "Subang Jaya - USJ",
      address: "8 Jalan USJ 10/1, 47620 Subang Jaya, Selangor",
      phone: "+60 3-8901 2345",
      hours: "Mon-Sat: 8:00 AM - 7:00 PM, Sun: 10:00 AM - 4:00 PM",
      region: "central",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Aircond Service", "Brake Repair"],
    },
    {
      id: "penang",
      name: "Penang - Georgetown",
      address: "56 Jalan Penang, 10000 Georgetown, Pulau Pinang",
      phone: "+60 4-2345 6789",
      hours: "Mon-Sat: 8:30 AM - 6:00 PM, Sun: Closed",
      region: "north",
      services: ["Full Service", "Tire Change", "Battery Replacement"],
    },
    {
      id: "ipoh",
      name: "Ipoh - Ipoh Garden",
      address: "32 Jalan Sultan Azlan Shah, 31400 Ipoh, Perak",
      phone: "+60 5-5678 9012",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: Closed",
      region: "north",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Brake Repair"],
    },
    {
      id: "johor",
      name: "Johor Bahru - Taman Pelangi",
      address: "77 Jalan Kuning, Taman Pelangi, 80400 Johor Bahru, Johor",
      phone: "+60 7-3456 7890",
      hours: "Mon-Sat: 8:00 AM - 6:30 PM, Sun: 10:00 AM - 3:00 PM",
      region: "south",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Aircond Service", "Brake Repair"],
    },
    {
      id: "melaka",
      name: "Melaka - Ayer Keroh",
      address: "23 Jalan Ayer Keroh, 75450 Melaka",
      phone: "+60 6-2345 6789",
      hours: "Mon-Sat: 8:30 AM - 6:00 PM, Sun: Closed",
      region: "south",
      services: ["Full Service", "Tire Change", "Battery Replacement"],
    },
    {
      id: "kuantan",
      name: "Kuantan - Jalan Beserah",
      address: "41 Jalan Beserah, 25300 Kuantan, Pahang",
      phone: "+60 9-5678 1234",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: Closed",
      region: "east",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Brake Repair"],
    },
    {
      id: "kota",
      name: "Kota Kinabalu - Luyang",
      address: "15 Jalan Luyang, 88300 Kota Kinabalu, Sabah",
      phone: "+60 88-234 5678",
      hours: "Mon-Sat: 8:30 AM - 6:00 PM, Sun: 10:00 AM - 2:00 PM",
      region: "east",
      services: ["Full Service", "Tire Change", "Battery Replacement", "Aircond Service"],
    },
  ]

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find a Lim Tayar workshop near you. We have multiple locations across Malaysia to serve you better.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by location name or address..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full max-w-3xl mx-auto">
          <TabsTrigger value="all">All Locations</TabsTrigger>
          <TabsTrigger value="central">Central</TabsTrigger>
          <TabsTrigger value="north">Northern</TabsTrigger>
          <TabsTrigger value="south">Southern</TabsTrigger>
          <TabsTrigger value="east">Eastern</TabsTrigger>
        </TabsList>

        {["all", "central", "north", "south", "east"].map((region) => (
          <TabsContent key={region} value={region} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations
                .filter((location) => region === "all" || location.region === region)
                .map((location) => (
                  <Card key={location.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{location.name}</span>
                      </CardTitle>
                      <CardDescription className="pl-7">{location.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start">
                        <Phone className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="pt-2">
                        <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.services.map((service, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                          target="_blank"
                        >
                          Get Directions
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/booking?location=${location.id}`}>Book Here</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            {filteredLocations.filter((location) => region === "all" || location.region === region).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No locations found matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon to More Locations</h2>
            <p className="text-gray-600 mb-6">
              We're expanding our network to serve you better. New Lim Tayar workshops will be opening soon in the
              following areas:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>Putrajaya - Presint 15 (Opening July 2025)</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>Kuching - Sarawak (Opening August 2025)</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>Alor Setar - Kedah (Opening September 2025)</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="/modern-car-workshop-exterior.png" alt="New workshop location" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="text-center bg-primary rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Franchise Opportunities</h2>
        <p className="text-black mb-6 max-w-2xl mx-auto">
          Interested in opening a Lim Tayar workshop in your area? We're looking for franchise partners across Malaysia.
        </p>
        <Button className="bg-black hover:bg-black/80 text-white" asChild>
          <Link href="/support">Contact Us for Franchise Information</Link>
        </Button>
      </div>
    </div>
  )
}
