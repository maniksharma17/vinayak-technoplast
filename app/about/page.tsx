import { Card } from "@/components/ui/card";
import { CheckCircle, Users, History, Target } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90">
          <Image
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=2000"
            alt="About Us"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl">
              Leading the way in plastic packaging solutions with innovation and sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl max-md:text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2019, Vinayak Technoplast has grown from a small manufacturing unit to one of India's leading plastic packaging solution providers. Our commitment to quality and innovation has helped us build long-lasting relationships with clients across various industries.
              </p>
              <p className="text-gray-600 mb-6">
                With state-of-the-art manufacturing facilities and a dedicated team of professionals, we continue to set new standards in the plastic packaging industry. Our products are used by businesses in the food, retail, and logistics sectors, among others.
              </p>
              <p className="text-gray-600">
                As a forward-thinking company, we are constantly adapting to market demands, focusing on customer satisfaction, and ensuring that our solutions contribute to the sustainability of the planet.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Factory"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-50 border-t border-b border-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl max-md:text-2xl font-bold text-left mb-12 max-md:mb-4">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-2">
            <Card className="p-6 max-md:p-4 bg-white shadow-md rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl max-md:text-xl font-semibold  mb-2">Industry Awards</h3>
              <p className="text-gray-700 max-md:text-sm">
                Recognized as the leading innovator in the plastic packaging industry with multiple awards for product excellence and sustainable practices.
              </p>
            </Card>
            <Card className="p-6 max-md:p-4 bg-white shadow-md rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl max-md:text-xl font-semibold  mb-2">Global Reach</h3>
              <p className="text-gray-700 max-md:text-sm">
                Our products are distributed worldwide, with partnerships spanning across North America, Europe, and Asia.
              </p>
            </Card>
            <Card className="p-6 max-md:p-4 bg-white shadow-md rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl max-md:text-xl font-semibold  mb-2">Sustainability Initiatives</h3>
              <p className="text-gray-700 max-md:text-sm">
                We’ve significantly reduced our carbon footprint through energy-efficient production methods and the use of recyclable materials.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-blue-100 border-t border-b border-blue-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl max-md:text-2xl font-bold text-left mb-12 max-md:mb-4">Our Vision for the Future</h2>
          <p className="text-gray-800 text-lg text-left max-w-3xl">
            Looking ahead, we envision a future where our products are a cornerstone of sustainable packaging solutions worldwide. With ongoing innovation, we aim to reduce environmental impact and drive forward-thinking initiatives in the packaging industry.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 max-md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl max-md:text-2xl font-bold text-left text-black mb-12 max-md:mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-md:gap-4">
            <Card className="p-6 bg-gray-50 shadow-md rounded-2xl hover:bg-blue-50 transition-colors">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl max-md:text-lg font-semibold  mb-2">Quality</h3>
              <p className="text-gray-700 max-md:text-sm">Commitment to delivering premium quality products that meet global standards.</p>
            </Card>
            <Card className="p-6 bg-gray-50 shadow-md rounded-2xl hover:bg-blue-50 transition-colors">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl max-md:text-lg font-semibold  mb-2">Customer Focus</h3>
              <p className="text-gray-700 max-md:text-sm">Dedicated to exceeding customer expectations and ensuring satisfaction in every interaction.</p>
            </Card>
            <Card className="p-6 bg-gray-50 shadow-md rounded-2xl hover:bg-blue-50 transition-colors">
              <History className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl max-md:text-lg font-semibold  mb-2">Innovation</h3>
              <p className="text-gray-700 max-md:text-sm">Continuous improvement, embracing new technologies and innovative solutions.</p>
            </Card>
            <Card className="p-6 bg-gray-50 shadow-md rounded-2xl hover:bg-blue-50 transition-colors">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl max-md:text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-700 max-md:text-sm">Committed to environmental responsibility through sustainable practices and eco-friendly products.</p>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Team */}
      <section className="py-20 max-md:px-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                  alt="CEO"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500">Rajesh's vision and leadership have been instrumental in transforming the company into a global leader in packaging solutions.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="COO"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Priya Sharma</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
              <p className="text-gray-500">Priya is the backbone of the company's operations, ensuring everything runs smoothly from production to customer service.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
                  alt="CTO"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Amit Patel</h3>
              <p className="text-gray-600">Chief Technical Officer</p>
              <p className="text-gray-500">Amit leads the technology and innovation teams, driving the development of cutting-edge packaging solutions.</p>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
