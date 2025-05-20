"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [carDetails, setCarDetails] = useState({
    brand: "",
    model: "",
    year: "",
    plateNumber: "",
  })
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleNextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleCarDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setCarDetails({
      ...carDetails,
      [name]: value,
    })
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact({
      ...contact,
      [name]: value,
    })
  }

  const handleBookingSubmit = async () => {
    setSubmitting(true)
    setError(null)
    setSuccess(false)
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: date ? date.toISOString().split("T")[0] : "",
          time: selectedTime,
          location: selectedLocation,
          service: selectedService,
          carDetails,
          ...contact,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSuccess(true)
        setStep(1)
        setDate(undefined)
        setSelectedLocation("")
        setSelectedService("")
        setSelectedTime("")
        setCarDetails({ brand: "", model: "", year: "", plateNumber: "" })
        setContact({ name: "", phone: "", email: "", notes: "" })
      } else {
        setError(result.message || "Booking failed.")
      }
    } catch (e) {
      setError("Booking failed. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const locations = [
    { id: "kl", name: "Kuala Lumpur - Jalan Ampang", address: "123 Jalan Ampang, 50450 Kuala Lumpur" },
    { id: "pj", name: "Petaling Jaya - Damansara", address: "45 Jalan SS2/55, 47300 Petaling Jaya" },
    { id: "shah", name: "Shah Alam - Seksyen 13", address: "18 Jalan Kemajuan, Seksyen 13, 40100 Shah Alam" },
    { id: "subang", name: "Subang Jaya - USJ", address: "8 Jalan USJ 10/1, 47620 Subang Jaya" },
  ]

  const services = [
    { id: "full-service", name: "Full Service", duration: "90 min", price: "RM 250 - RM 450" },
    { id: "tire-change", name: "Tire Change", duration: "30 min", price: "RM 80 - RM 150 per tire" },
    { id: "battery", name: "Battery Replacement", duration: "30 min", price: "RM 200 - RM 500" },
    { id: "aircond", name: "Aircond Service", duration: "60 min", price: "RM 150 - RM 300" },
    { id: "brake", name: "Brake Repair", duration: "60 min", price: "RM 200 - RM 400" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const carBrands = [
    "Perodua",
    "Proton",
    "Honda",
    "Toyota",
    "Nissan",
    "Mazda",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Other",
  ]

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
          <p className="text-gray-600">Schedule your car service at your preferred location and time</p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            Booking successful! We have received your appointment.
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                    step === stepNumber
                      ? "bg-primary text-primary-foreground"
                      : step > stepNumber
                        ? "bg-primary/20 text-primary"
                        : "bg-gray-200 text-gray-500",
                  )}
                >
                  {stepNumber}
                </div>
                <span className="text-xs mt-2 text-gray-600">
                  {stepNumber === 1 && "Location"}
                  {stepNumber === 2 && "Service"}
                  {stepNumber === 3 && "Date & Time"}
                  {stepNumber === 4 && "Details"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 h-1 bg-gray-200 relative">
            <div
              className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Select a Location</CardTitle>
              <CardDescription>Choose the workshop location most convenient for you</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedLocation} onValueChange={setSelectedLocation} className="space-y-4">
                {locations.map((location) => (
                  <div key={location.id} className="flex items-start space-x-2">
                    <RadioGroupItem value={location.id} id={location.id} className="mt-1" />
                    <div className="grid gap-1.5">
                      <Label htmlFor={location.id} className="font-medium">
                        {location.name}
                      </Label>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {location.address}
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNextStep} disabled={!selectedLocation}>
                Continue
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Select a Service</CardTitle>
              <CardDescription>Choose the service you need for your vehicle</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedService} onValueChange={setSelectedService} className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-start space-x-2">
                    <RadioGroupItem value={service.id} id={service.id} className="mt-1" />
                    <div className="grid gap-1.5 w-full">
                      <Label htmlFor={service.id} className="font-medium">
                        {service.name}
                      </Label>
                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {service.duration}
                        </div>
                        <div>{service.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button onClick={handleNextStep} disabled={!selectedService}>
                Continue
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose your preferred appointment date and time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Appointment Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                        date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Appointment Time</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className={cn(
                        "justify-center",
                        selectedTime === time ? "bg-primary text-primary-foreground" : "",
                      )}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button onClick={handleNextStep} disabled={!date || !selectedTime}>
                Continue
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Vehicle & Contact Details</CardTitle>
              <CardDescription>Provide information about your vehicle and contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Vehicle Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Car Brand</Label>
                    <Select
                      name="brand"
                      value={carDetails.brand}
                      onValueChange={(value) => setCarDetails({ ...carDetails, brand: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {carBrands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Car Model</Label>
                    <Input
                      id="model"
                      name="model"
                      value={carDetails.model}
                      onChange={handleCarDetailsChange}
                      placeholder="e.g. Myvi, Civic, Camry"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      name="year"
                      value={carDetails.year}
                      onChange={handleCarDetailsChange}
                      placeholder="e.g. 2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plateNumber">License Plate Number</Label>
                    <Input
                      id="plateNumber"
                      name="plateNumber"
                      value={carDetails.plateNumber}
                      onChange={handleCarDetailsChange}
                      placeholder="e.g. WXY 1234"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={contact.name}
                      onChange={handleContactChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={contact.phone}
                      onChange={handleContactChange}
                      placeholder="e.g. 012-345-6789"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contact.email}
                      onChange={handleContactChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="notes">Special Requests or Notes (Optional)</Label>
                    <Input
                      id="notes"
                      name="notes"
                      value={contact.notes}
                      onChange={handleContactChange}
                      placeholder="Any special requests or additional information"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
              <Button variant="outline" onClick={handlePrevStep} className="w-full sm:w-auto">
                Back
              </Button>
              <Button
                className="w-full sm:w-auto"
                onClick={handleBookingSubmit}
                disabled={submitting}
              >
                {submitting ? "Booking..." : "Confirm Booking"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}