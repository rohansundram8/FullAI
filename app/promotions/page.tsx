import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Tag, Percent, Star, Gift, Building, FileText } from "lucide-react"

export default function PromotionsPage() {
  const currentDate = new Date()

  const promotions = [
    {
      id: 1,
      title: "30% Off Aircond Service",
      description: "Beat the heat with 30% off on all aircond cleaning and maintenance services.",
      validUntil: new Date(2025, 5, 30), // June 30, 2025
      code: "COOL30",
      category: "service",
      image: "/car-ac-service.png",
    },
    {
      id: 2,
      title: "Free Battery Check",
      description: "Complimentary battery health check with any service booking.",
      validUntil: new Date(2025, 6, 15), // July 15, 2025
      code: "BATCHECK",
      category: "service",
      image: "/placeholder-nzwfj.png",
    },
    {
      id: 3,
      title: "Tire Bundle Deal",
      description: "Buy 3 tires and get the 4th tire at 50% off. Valid for all tire brands.",
      validUntil: new Date(2025, 4, 31), // May 31, 2025
      code: "TIRE4DEAL",
      category: "product",
      image: "/placeholder.svg?height=200&width=400&query=car tires stack",
    },
    {
      id: 4,
      title: "15% Off Full Service",
      description: "Get 15% off on our comprehensive full service package for any car model.",
      validUntil: new Date(2025, 7, 31), // August 31, 2025
      code: "FULL15",
      category: "service",
      image: "/placeholder.svg?height=200&width=400&query=car mechanic servicing",
    },
    {
      id: 5,
      title: "Brake Service Special",
      description: "20% off brake pad replacement and free brake fluid top-up.",
      validUntil: new Date(2025, 5, 15), // June 15, 2025
      code: "BRAKE20",
      category: "service",
      image: "/placeholder.svg?height=200&width=400&query=car brake service",
    },
    {
      id: 6,
      title: "Oil Change Package",
      description: "Premium oil change with free 10-point inspection for just RM 120.",
      validUntil: new Date(2025, 8, 30), // September 30, 2025
      code: "OILPRO",
      category: "service",
      image: "/placeholder.svg?height=200&width=400&query=car oil change",
    },
    {
      id: 7,
      title: "New Customer Discount",
      description: "First-time customers receive 10% off any service.",
      validUntil: new Date(2025, 11, 31), // December 31, 2025
      code: "NEWCUST10",
      category: "special",
      image: "/placeholder.svg?height=200&width=400&query=new customer welcome",
    },
    {
      id: 8,
      title: "Senior Citizen Special",
      description: "10% discount for senior citizens on all services. ID required.",
      validUntil: new Date(2025, 11, 31), // December 31, 2025
      code: "SENIOR10",
      category: "special",
      image: "/placeholder.svg?height=200&width=400&query=senior citizen discount",
    },
    {
      id: 9,
      title: "Weekend Warrior Special",
      description: "Book a service on Saturday or Sunday and get a free car wash.",
      validUntil: new Date(2025, 6, 30), // July 30, 2025
      code: "WEEKEND",
      category: "special",
      image: "/placeholder.svg?height=200&width=400&query=car wash service",
    },
  ]

  const isExpired = (date: Date) => {
    return date < currentDate
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const activePromotions = promotions.filter((promo) => !isExpired(promo.validUntil))

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Special Offers & Promotions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take advantage of our limited-time promotions and discounts on car services and products.
        </p>
      </div>

      <div className="bg-primary text-black rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="bg-black text-white mb-4">Featured Promotion</Badge>
            <h2 className="text-3xl font-bold mb-4">Hari Raya Special Offer</h2>
            <p className="text-black/80 mb-6 text-lg">
              Get your car ready for Hari Raya with our special package: Full service, free 21-point inspection, and
              complimentary car wash for only RM 299.
            </p>
            <div className="flex items-center mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="font-medium">Valid until May 31, 2025</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-black/80 text-white" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black/10">
                <Tag className="mr-2 h-4 w-4" />
                Use Code: RAYA25
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/placeholder.svg?height=300&width=500&query=car being serviced for holiday special"
              alt="Hari Raya Special Offer"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
          <TabsTrigger value="all">All Offers</TabsTrigger>
          <TabsTrigger value="service">Service Deals</TabsTrigger>
          <TabsTrigger value="special">Special Offers</TabsTrigger>
        </TabsList>

        {["all", "service", "special", "product"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePromotions
                .filter((promo) => category === "all" || promo.category === category)
                .map((promo) => (
                  <Card key={promo.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={promo.image || "/placeholder.svg"}
                        alt={promo.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{promo.title}</CardTitle>
                      <CardDescription>{promo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Valid until {formatDate(promo.validUntil)}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 text-primary mr-1" />
                          <span className="font-mono font-medium">{promo.code}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/booking">Book Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            {activePromotions.filter((promo) => category === "all" || promo.category === category).length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Percent className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No Active Promotions</h3>
                <p className="text-gray-500 mb-4">There are currently no active promotions in this category.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Loyalty Program</CardTitle>
            <CardDescription>Earn points with every service and redeem them for discounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">How It Works</h3>
                <p className="text-sm text-gray-600">
                  Earn 1 point for every RM 1 spent on our services. Redeem your points for discounts on future services
                  or products.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Membership Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                  <li>Exclusive member-only promotions</li>
                  <li>Birthday month special discount</li>
                  <li>Priority booking for busy periods</li>
                  <li>Free annual vehicle health check</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/profile">Join Loyalty Program</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Corporate Packages</CardTitle>
            <CardDescription>Special rates for businesses with multiple vehicles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Corporate Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                  <li>Volume discounts based on fleet size</li>
                  <li>Dedicated account manager</li>
                  <li>Customized service schedules</li>
                  <li>Consolidated billing options</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Available Packages</h3>
                <p className="text-sm text-gray-600">
                  We offer tailored packages for small businesses (5-10 vehicles), medium fleets (11-30 vehicles), and
                  large enterprises (31+ vehicles).
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/support">Inquire About Corporate Rates</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Stay Updated on Promotions</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest promotions and special offers directly in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none flex-grow"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
