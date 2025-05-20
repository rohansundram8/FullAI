import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wrench, Disc, Battery, Thermometer, CheckCircle, Car, FuelIcon as Oil, Gauge, Sparkles } from "lucide-react"

export default function ServicesPage() {
  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "maintenance", label: "Maintenance" },
    { id: "repair", label: "Repair" },
    { id: "inspection", label: "Inspection" },
  ]

  const services = [
    {
      id: "full-service",
      title: "Full Service",
      description: "Comprehensive service including oil change, filter replacement, and multi-point inspection.",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      category: "maintenance",
      price: "From RM 250",
      duration: "90 minutes",
      link: "/services/full-service",
    },
    {
      id: "tire-change",
      title: "Tire Change",
      description: "Professional tire replacement and rotation services for optimal performance and safety.",
      icon: <Disc className="h-10 w-10 text-primary" />,
      category: "maintenance",
      price: "From RM 80 per tire",
      duration: "30 minutes",
      link: "/services/tire-change",
    },
    {
      id: "battery-replacement",
      title: "Battery Replacement",
      description: "Quick and reliable battery testing and replacement services to keep your car starting reliably.",
      icon: <Battery className="h-10 w-10 text-primary" />,
      category: "repair",
      price: "From RM 200",
      duration: "30 minutes",
      link: "/services/battery-replacement",
    },
    {
      id: "aircond-service",
      title: "Aircond Service",
      description: "Thorough cleaning and maintenance of your car's air conditioning system for optimal cooling.",
      icon: <Thermometer className="h-10 w-10 text-primary" />,
      category: "maintenance",
      price: "From RM 150",
      duration: "60 minutes",
      link: "/services/aircond-service",
    },
    {
      id: "brake-repair",
      title: "Brake Repair",
      description: "Expert brake inspection, repair, and replacement for your safety on the road.",
      icon: <Disc className="h-10 w-10 text-primary" />,
      category: "repair",
      price: "From RM 200",
      duration: "60 minutes",
      link: "/services/brake-repair",
    },
    {
      id: "oil-change",
      title: "Oil Change",
      description: "Regular oil changes to keep your engine running smoothly and extend its lifespan.",
      icon: <Oil className="h-10 w-10 text-primary" />,
      category: "maintenance",
      price: "From RM 120",
      duration: "30 minutes",
      link: "/services/oil-change",
    },
    {
      id: "car-inspection",
      title: "Car Inspection",
      description: "Comprehensive vehicle inspection to identify potential issues before they become major problems.",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      category: "inspection",
      price: "From RM 100",
      duration: "45 minutes",
      link: "/services/car-inspection",
    },
    {
      id: "engine-diagnostics",
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and troubleshoot engine problems accurately.",
      icon: <Gauge className="h-10 w-10 text-primary" />,
      category: "inspection",
      price: "From RM 150",
      duration: "60 minutes",
      link: "/services/engine-diagnostics",
    },
    {
      id: "car-detailing",
      title: "Car Detailing",
      description:
        "Professional interior and exterior cleaning to restore your car's appearance and protect its surfaces.",
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      category: "maintenance",
      price: "From RM 300",
      duration: "3 hours",
      link: "/services/car-detailing",
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of automotive services to keep your vehicle in optimal condition. From routine
          maintenance to complex repairs, our expert technicians are here to help.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto">
          {serviceCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((service) => category.id === "all" || service.category === category.id)
                .map((service) => (
                  <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <div>{service.price}</div>
                        <div>{service.duration}</div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link href={service.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/booking">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Car Brand Specialists</h2>
            <p className="text-gray-600 mb-6">
              Our technicians are trained to work with all major car brands. We have specialized knowledge and tools for
              both local and international vehicles.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {["Perodua", "Proton", "Honda", "Toyota", "Nissan", "BMW", "Mercedes", "Audi"].map((brand) => (
                <div key={brand} className="flex items-center justify-center bg-white rounded-md p-3 shadow-sm">
                  <Car className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm font-medium">{brand}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="/placeholder.svg?key=n9ajs" alt="Car brand specialists" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="text-center bg-primary rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Need Help Choosing a Service?</h2>
        <p className="text-black mb-6 max-w-2xl mx-auto">
          Not sure which service your car needs? Our experts can help diagnose the issue and recommend the right service
          for your vehicle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black hover:bg-black/80 text-white" asChild>
            <Link href="/support">Contact Our Experts</Link>
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-black/10" asChild>
            <Link href="/booking">Book a Diagnostic Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
