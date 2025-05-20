"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Car,
  Calendar,
  Clock,
  MapPin,
  Star,
  Edit,
  LogOut,
  ChevronRight,
  Bell,
  CreditCard,
  Heart,
  CheckCircle,
} from "lucide-react"

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const userData = {
    name: "Aaron Tan",
    email: "aaron.tan@example.com",
    phone: "+60 12-345-6789",
    joinDate: "January 2023",
    cars: [
      {
        id: 1,
        brand: "Honda",
        model: "Civic",
        year: "2020",
        plateNumber: "WXY 1234",
        lastService: "March 15, 2025",
      },
      {
        id: 2,
        brand: "Toyota",
        model: "Vios",
        year: "2018",
        plateNumber: "ABC 5678",
        lastService: "February 2, 2025",
      },
    ],
    appointments: [
      {
        id: 1,
        service: "Full Service",
        date: "May 25, 2025",
        time: "10:00 AM",
        location: "Kuala Lumpur - Jalan Ampang",
        status: "upcoming",
      },
      {
        id: 2,
        service: "Tire Change",
        date: "April 10, 2025",
        time: "2:30 PM",
        location: "Petaling Jaya - Damansara",
        status: "completed",
      },
      {
        id: 3,
        service: "Battery Replacement",
        date: "February 15, 2025",
        time: "11:00 AM",
        location: "Kuala Lumpur - Jalan Ampang",
        status: "completed",
      },
    ],
    savedWorkshops: [
      {
        id: "kl",
        name: "Kuala Lumpur - Jalan Ampang",
        address: "123 Jalan Ampang, 50450 Kuala Lumpur",
      },
      {
        id: "pj",
        name: "Petaling Jaya - Damansara",
        address: "45 Jalan SS2/55, 47300 Petaling Jaya, Selangor",
      },
    ],
  }

  if (!isLoggedIn) {
    return (
      <div className="container py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>Sign in to your Lim Tayar account to manage your profile and bookings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="text-sm text-right">
                <Link href="#" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                Sign In
              </Button>
              <div className="text-sm text-center">
                Don't have an account?{" "}
                <Link href="#" className="text-primary hover:underline">
                  Create an account
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/professional-male-avatar.png" alt={userData.name} />
                  <AvatarFallback>
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-500 text-sm">Member since {userData.joinDate}</p>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Button>
                <Button
                  variant={activeTab === "vehicles" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("vehicles")}
                >
                  <Car className="mr-2 h-4 w-4" />
                  My Vehicles
                </Button>
                <Button
                  variant={activeTab === "appointments" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("appointments")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Appointments
                </Button>
                <Button
                  variant={activeTab === "workshops" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("workshops")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Saved Workshops
                </Button>
                <Separator className="my-2" />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Personal Information</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <div className="p-2 border rounded-md bg-gray-50">{userData.name}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <div className="p-2 border rounded-md bg-gray-50">{userData.email}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <div className="p-2 border rounded-md bg-gray-50">{userData.phone}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Member Since</Label>
                    <div className="p-2 border rounded-md bg-gray-50">{userData.joinDate}</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <h4 className="font-medium">Notifications</h4>
                          <p className="text-sm text-gray-500">Manage your email and SMS notifications</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <h4 className="font-medium">Payment Methods</h4>
                          <p className="text-sm text-gray-500">Manage your saved payment methods</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <h4 className="font-medium">Change Password</h4>
                          <p className="text-sm text-gray-500">Update your account password</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "vehicles" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Vehicles</h2>
                <Button>
                  <Car className="mr-2 h-4 w-4" />
                  Add Vehicle
                </Button>
              </div>

              {userData.cars.map((car) => (
                <Card key={car.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gray-100 p-3 rounded-full">
                          <Car className="h-8 w-8 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            {car.brand} {car.model} ({car.year})
                          </h3>
                          <p className="text-gray-500">Plate Number: {car.plateNumber}</p>
                          <p className="text-sm text-gray-500 mt-1">Last Service: {car.lastService}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="/booking">Book Service</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-dashed">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <Car className="h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Add Another Vehicle</h3>
                    <p className="text-gray-500 mb-4">Add your vehicle details to make booking services easier</p>
                    <Button>Add Vehicle</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Appointments</h2>
                <Button asChild>
                  <Link href="/booking">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book New Appointment
                  </Link>
                </Button>
              </div>

              <Tabs defaultValue="upcoming">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-6">
                  {userData.appointments
                    .filter((a) => a.status === "upcoming")
                    .map((appointment) => (
                      <Card key={appointment.id} className="mb-4">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="bg-primary/10 p-3 rounded-full">
                                <Calendar className="h-8 w-8 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-xl font-bold">{appointment.service}</h3>
                                  <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">Upcoming</Badge>
                                </div>
                                <div className="flex items-center text-gray-500 mt-1">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span className="mr-3">{appointment.date}</span>
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{appointment.time}</span>
                                </div>
                                <div className="flex items-center text-gray-500 mt-1">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{appointment.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                              <Button variant="outline" size="sm">
                                Reschedule
                              </Button>
                              <Button variant="destructive" size="sm">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                  {userData.appointments.filter((a) => a.status === "upcoming").length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Upcoming Appointments</h3>
                      <p className="text-gray-500 mb-4">You don't have any upcoming appointments scheduled</p>
                      <Button asChild>
                        <Link href="/booking">Book an Appointment</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="completed" className="mt-6">
                  {userData.appointments
                    .filter((a) => a.status === "completed")
                    .map((appointment) => (
                      <Card key={appointment.id} className="mb-4">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="bg-gray-100 p-3 rounded-full">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-xl font-bold">{appointment.service}</h3>
                                  <Badge className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-100">Completed</Badge>
                                </div>
                                <div className="flex items-center text-gray-500 mt-1">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span className="mr-3">{appointment.date}</span>
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{appointment.time}</span>
                                </div>
                                <div className="flex items-center text-gray-500 mt-1">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{appointment.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                              <Button variant="outline" size="sm">
                                <Star className="mr-2 h-4 w-4" />
                                Leave Review
                              </Button>
                              <Button size="sm" asChild>
                                <Link href="/booking">Book Again</Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === "workshops" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Saved Workshops</h2>
                <Button asChild>
                  <Link href="/locations">
                    <MapPin className="mr-2 h-4 w-4" />
                    Find Workshops
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.savedWorkshops.map((workshop) => (
                  <Card key={workshop.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gray-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{workshop.name}</h3>
                          <p className="text-gray-500 text-sm">{workshop.address}</p>
                          <div className="flex space-x-2 mt-3">
                            <Button variant="outline" size="sm" asChild>
                              <Link
                                href={`https://maps.google.com/?q=${encodeURIComponent(workshop.address)}`}
                                target="_blank"
                              >
                                Get Directions
                              </Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/booking?location=${workshop.id}`}>Book Here</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {userData.savedWorkshops.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Saved Workshops</h3>
                  <p className="text-gray-500 mb-4">You haven't saved any workshops yet</p>
                  <Button asChild>
                    <Link href="/locations">Browse Workshops</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
