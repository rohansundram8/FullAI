import Link from "next/link"
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
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Service Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find The Right Service For Your Car</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Search for services based on your location, car brand, and service type
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
            <Tabs defaultValue="location">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="location" className="text-sm sm:text-base">
                  <MapPin className="h-4 w-4 mr-2" />
                  By Location
                </TabsTrigger>
                <TabsTrigger value="brand" className="text-sm sm:text-base">
                  <Car className="h-4 w-4 mr-2" />
                  By Car Brand
                </TabsTrigger>
                <TabsTrigger value="service" className="text-sm sm:text-base">
                  <Tool className="h-4 w-4 mr-2" />
                  By Service
                </TabsTrigger>
              </TabsList>

              <TabsContent value="location" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 md:col-span-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter your location or postal code"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      />
                    </div>
                  </div>
                  <Button className="md:col-span-3">Find Workshops Near Me</Button>
                </div>
              </TabsContent>

              <TabsContent value="brand" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Perodua", "Proton", "Honda", "Toyota", "Nissan", "BMW", "Mercedes", "Audi"].map((brand) => (
                    <Button key={brand} variant="outline" className="justify-start">
                      <Car className="h-4 w-4 mr-2" />
                      {brand}
                    </Button>
                  ))}
                </div>
                <Button>View All Car Brands</Button>
              </TabsContent>

              <TabsContent value="service" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { name: "Full Service", icon: <Wrench className="h-4 w-4 mr-2" /> },
                    { name: "Tire Change", icon: <Disc className="h-4 w-4 mr-2" /> },
                    { name: "Battery Replacement", icon: <Battery className="h-4 w-4 mr-2" /> },
                    { name: "Aircond Service", icon: <Thermometer className="h-4 w-4 mr-2" /> },
                  ].map((service) => (
                    <Button key={service.name} variant="outline" className="justify-start">
                      {service.icon}
                      {service.name}
                    </Button>
                  ))}
                </div>
                <Button>View All Services</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services to keep your vehicle in optimal condition
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Car Servicing",
                description: "Regular maintenance to keep your car running smoothly and efficiently.",
                icon: <Wrench className="h-10 w-10 text-primary" />,
                link: "/services/car-servicing",
              },
              {
                title: "Tire Changes",
                description: "Professional tire replacement and rotation services for optimal performance.",
                icon: <Disc className="h-10 w-10 text-primary" />,
                link: "/services/tire-changes",
              },
              {
                title: "Battery Replacement",
                description: "Quick and reliable battery testing and replacement services.",
                icon: <Battery className="h-10 w-10 text-primary" />,
                link: "/services/battery-replacement",
              },
              {
                title: "Aircond Cleaning",
                description: "Thorough cleaning and maintenance of your car's air conditioning system.",
                icon: <Thermometer className="h-10 w-10 text-primary" />,
                link: "/services/aircond-cleaning",
              },
              {
                title: "Brake Repair",
                description: "Expert brake inspection, repair, and replacement for your safety.",
                icon: <Disc className="h-10 w-10 text-primary" />,
                link: "/services/brake-repair",
              },
              {
                title: "Car Inspection",
                description: "Comprehensive vehicle inspection to identify potential issues.",
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                link: "/services/car-inspection",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Lim Tayar?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Technicians",
                    description:
                      "Our certified technicians have years of experience working with all car makes and models.",
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                  },
                  {
                    title: "Multiple Locations",
                    description: "Conveniently located workshops across Malaysia to serve you better.",
                    icon: <MapPin className="h-6 w-6 text-primary" />,
                  },
                  {
                    title: "Quality Parts",
                    description: "We use only high-quality, genuine parts for all repairs and replacements.",
                    icon: <Star className="h-6 w-6 text-primary" />,
                  },
                  {
                    title: "Quick Service",
                    description: "Efficient service that respects your time without compromising on quality.",
                    icon: <Clock className="h-6 w-6 text-primary" />,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img src="/placeholder.svg?key=19ly8" alt="Lim Tayar workshop" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our limited-time promotions and discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "30% Off Aircond Service",
                description: "Get 30% off on all aircond cleaning and maintenance services.",
                validUntil: "Valid until June 30, 2025",
                code: "COOL30",
              },
              {
                title: "Free Battery Check",
                description: "Complimentary battery health check with any service booking.",
                validUntil: "Valid until July 15, 2025",
                code: "BATCHECK",
              },
              {
                title: "Tire Bundle Deal",
                description: "Buy 3 tires and get the 4th tire at 50% off.",
                validUntil: "Valid until May 31, 2025",
                code: "TIRE4DEAL",
              },
            ].map((promo, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-3 bg-primary"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{promo.validUntil}</span>
                    <Badge variant="outline" className="font-mono">
                      {promo.code}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/promotions">View All Promotions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-black">Ready to Book Your Car Service?</h2>
            <p className="text-black text-lg mb-8">
              Schedule an appointment at your preferred location and time. Our team is ready to provide you with
              exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-black hover:bg-black/80 text-white" asChild>
                <Link href="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10" asChild>
                <Link href="/locations">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Nearest Workshop
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
