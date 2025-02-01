import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Vinayak Technoplast</h3>
            <p className="text-sm mb-4">
              Leading manufacturer of premium quality plastic and Syrup bottle solutions since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="mx-auto col-span-1 w-full">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <div className="flex flex-col gap-2 justify-between">
              <li className="flex flex-row items-center gap-2">
                <Phone size={16} />
                <span>+91 98738 05901</span>
                <span>+91 7055870648</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <Mail size={16} />
                <span>vinayaktechnoplast20@gmail.com</span>
              </li>
              </div>
              <li className="flex flex-row items-center gap-2">
                <MapPin size={16} />
                <span>Behind Ram Nagar Industrial Area,<br></br> Sunhera Road, Roorkee (Haridwar),<br></br> UK - 247667</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Vinayak Technoplast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}