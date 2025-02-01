import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Factory, Award, Users, Package, Store, ShoppingBag, Handshake, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Veterinary & Pesticide Bottles",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800",
    description: "High-quality bottles designed specifically for veterinary medicines and pesticides"
  },
  {
    title: "Pharmaceutical Bottles",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800",
    description: "Medical-grade plastic bottles for pharmaceutical applications"
  },
  {
    title: "Cleaning Product Containers",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Durable containers for cleaning solutions and detergents"
  },
  {
    title: "SL Cans",
    image: "https://images.unsplash.com/photo-1674176508097-463b009c6004?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Specialized SL cans for industrial applications"
  },
  {
    title: "PET Bottles",
    image: "https://plus.unsplash.com/premium_photo-1682144492263-7623997157df?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium PET bottles for beverages and liquid products"
  },
  {
    title: "Brooms",
    image: "https://images.unsplash.com/photo-1585539055852-6c23984eaa89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-quality cleaning tools for various applications"
  }
];

const clients = [
  { name: "Panchvati Prayogshala", logo: "/logos/client1.png", url: "https://panchvatiprayogshala.com" },
  { name: "Weener Empire Plastic Pvt Ltd", logo: "/logos/client2.png", url: "https://weenerempire.com" },
  { name: "Pariacia Healthcare Pvt Ltd", logo: null, url: "https://pariaciahealthcare.com" },
  { name: "Sarveswary Pharmaceuticals Pvt Ltd", logo: null, url: "https://sarveswarypharma.com" },
  { name: "Pharmotis India", logo: "/logos/client5.png", url: "https://pharmotisindia.com" },
  { name: "Naulakha Surfactants", logo: "/logos/client6.png", url: "https://naulakhasurfactants.com" },
  { name: "Laxmi Herbal Products", logo: null, url: "https://laxmiherbals.com" },
  { name: "Elen Consumer Tech Pvt Ltd", logo: "/logos/client8.webp", url: "https://elentech.com" },
  { name: "Aurous Pharmaceutical", logo: "/logos/client9.png", url: "https://aurouspharma.com" },
  { name: "Balaji Industries", logo: null, url: "https://balajiindustries.com" },
  { name: "Hiral Labs", logo: null, url: "https://hirallabs.com" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative md:h-[80vh] min-h-screen bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90">
          <Image
            src="https://images.unsplash.com/photo-1621954938124-02e637ba3584?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Factory Background"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto max-md:pt-60 px-4 h-full flex max-md:justify-center items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Leading Plastic Packaging Solutions
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              <span className="font-bold">Vinayak Technoplast</span> - Your trusted partner in manufacturing premium quality plastic bottles and packaging solutions since 2019.
            </p>
            <div className="flex md:flex-row flex-col max-md:w-fit gap-4">
              <a href="#products">
                <Button 
                size="lg" variant="secondary" className="font-bold border border-white bg-blue-900 text-white hover:bg-blue-800/90">
                  Explore Products
                </Button>
              </a>
              <Link href={"/contact"}>
                <Button size="lg" variant="outline" className="bg-white/90 text-blue-900 border border-white font-bold hover:text-black">
                  Contact Us
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-gray-100 p-8 max-md:p-4 rounded-lg">
              <Factory className="w-12 h-12 max-md:w-8 max-md:h-8 text-blue-600 mb-4" />
              <h3 className="text-xl max-md:text-lg font-semibold mb-2">State-of-the-art Facility</h3>
              <p className="text-gray-600 max-md:text-sm">Modern manufacturing facility with latest technology</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-100 p-8 max-md:p-4 rounded-lg">
              <Award className="w-12 h-12  max-md:w-8 max-md:h-8 text-blue-600 mb-4" />
              <h3 className="text-xl max-md:text-lg font-semibold mb-2">Quality Certified</h3>
              <p className="text-gray-600 max-md:text-sm">ISO 9001:2015 certified manufacturing process</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-100 p-8 max-md:p-4 rounded-lg">
              <Package className="w-12 h-12 max-md:w-8 max-md:h-8 text-blue-600 mb-4" />
              <h3 className="text-xl max-md:text-lg font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600 max-md:text-sm">Tailored packaging solutions for your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 max-md:py-4" id="products">
        <div className="container mx-auto px-4">
          <div className="text-4xl max-md:text-2xl flex items-center flex-row gap-4 text-blue-600 font-bold text-center mb-12 max-md:mb-4">
            <h2>Our Products </h2>
            <ShoppingBag className="h-10 w-10 max-md:h-6 max-md:w-6"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 max-md:p-4">
                  <h3 className="text-xl max-md:text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 max-md:text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 max-md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
        <div className="text-4xl max-md:text-2xl flex items-center flex-row gap-4 text-blue-600 font-bold text-center mb-12 max-md:mb-4">
          <h2>Our Trusted Clients </h2>
          <Handshake className="h-10 w-10 max-md:h-6 max-md:w-6"/>
        </div>          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const logoText = client.name[0] + client.name.split(' ')[1][0]
            return <div key={index} className="border bg-white p-6 rounded-lg shadow w-auto flex flex-row gap-4 items-center max-md:justify-between">
              {client.logo 
              ? <Image 
              src={client.logo}
              alt="logo"
              width={100}
              height={100}
              />
              : <div className="bg-gray-100 flex justify-center items-center p-8 text-black text-xl font-bold w-4 h-4 rounded-full">{logoText}</div>
              }
              
              <span className="text-lg max-md:text-sm font-medium text-gray-800">{client.name}</span>
            </div>
          })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-8 pt-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl max-md:text-2xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
              <Phone className="w-7 h-7" />
              <div className="w-full flex flex-col gap-1">
                <h3 className="font-semibold mb-1">Phone</h3>
                <div className="flex flex-row items-center gap-8">
                  <p>+91 9873805901</p>
                  <button
                    className="text-xs border px-4 py-1 rounded-full bg-transparent"
                    >Call
                  </button>
                </div>
                
                <div className="flex flex-row items-center gap-7">
                  <p>+91 7055870648</p>
                  <button
                    className="text-xs border px-4 py-1 rounded-full bg-transparent"
                    >Call
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
              <Mail className="w-7 h-7" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p>vinayaktechnoplast20@gmail.com</p>
                <button
                  className="mt-4 text-xs border px-4 py-1 rounded-full bg-transparent"
                  >Send Mail
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
              <MapPin className="w-12 h-12" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p>Behind Ram Nagar Industrial Area, Sunhera Road, Roorkee (Haridwar),<br></br>UK - 247667</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl max-md:text-2xl font-bold text-center max-md:mb-4 mb-12">Find Us Here</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9224356416426!2d77.8567492893056!3d29.883875630253705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb47109c7ba7b%3A0x3a011fd8ddbd2b1c!2sSunhera%20Rd%2C%20Uttarakhand%20247667!5e0!3m2!1sen!2sin!4v1738418179490!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}