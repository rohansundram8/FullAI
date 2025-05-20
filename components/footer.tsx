import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-limtayar-black text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="bg-primary p-1 rounded mr-2">
                <span className="font-bold text-primary-foreground">LT</span>
              </div>
              Lim Tayar
            </h3>
            <p className="text-gray-300 mb-4">
              Professional car servicing, repairs, tire replacements, and inspections across multiple locations in
              Malaysia.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-primary">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-gray-300 hover:text-primary">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-primary">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/tire-changes" className="text-gray-300 hover:text-primary">
                  Tire Changes
                </Link>
              </li>
              <li>
                <Link href="/services/battery-replacement" className="text-gray-300 hover:text-primary">
                  Battery Replacement
                </Link>
              </li>
              <li>
                <Link href="/services/car-servicing" className="text-gray-300 hover:text-primary">
                  Car Servicing
                </Link>
              </li>
              <li>
                <Link href="/services/aircond-cleaning" className="text-gray-300 hover:text-primary">
                  Aircond Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/brake-repair" className="text-gray-300 hover:text-primary">
                  Brake Repair
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-gray-300">support@limtayar.com.my</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-gray-300">+60 3-1234 5678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-gray-300">Multiple locations across Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Lim Tayar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
