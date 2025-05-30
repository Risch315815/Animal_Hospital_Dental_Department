import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Specialized Dental Care for Your Pets
            </h1>
            <p className="text-xl mb-8">
              Our specialized team provides comprehensive dental services to keep your pets healthy and happy.
            </p>
            <Link
              href="/appointments"
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-20 z-0">
          {/* You can add a background pattern or image here */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Dental Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dental Cleanings</h3>
              <p className="text-gray-600">
                Professional cleaning to remove plaque and tartar buildup from your pet&apos;s teeth.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Extractions</h3>
              <p className="text-gray-600">
                Gentle removal of damaged or infected teeth to prevent further complications.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
              <p className="text-gray-600">
                Preventive treatments and guidance to maintain your pet&apos;s oral health at home.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Dental Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Our veterinarians have specialized training in animal dentistry to provide the best care for your pets.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Equipment</h3>
                <p className="text-gray-600">
                  State-of-the-art dental equipment designed specifically for animal dental procedures.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
                <p className="text-gray-600">
                  We understand dental procedures can be stressful for pets, so we focus on gentle, compassionate care.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Complete Aftercare</h3>
                <p className="text-gray-600">
                  Detailed aftercare instructions and follow-up appointments to ensure your pet&apos;s recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule a Dental Checkup?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until your pet has dental problems. Preventive care is key to your pet&apos;s overall health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
