import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Animal Hospital Dental Department",
  description: "Learn about our specialized dental team and our mission",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Our Dental Department</h1>
          <p className="text-xl max-w-2xl">
            Our specialized team is dedicated to providing the highest quality dental care for all pets.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At the Animal Hospital Dental Department, our mission is to improve the quality of life for all pets through excellent dental care. We believe that proper dental health is essential to the overall well-being of animals, and we are committed to providing specialized, compassionate care that meets the unique needs of each patient.
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Dental Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for team member image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Emma Johnson</h3>
                <p className="text-blue-600 font-medium mb-4">Chief of Dental Services</p>
                <p className="text-gray-600">
                  Dr. Johnson has over 15 years of experience in veterinary dentistry and is board-certified in animal dental procedures.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for team member image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Michael Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Dental Surgeon</p>
                <p className="text-gray-600">
                  Specialized in advanced dental procedures and oral surgeries for both common and exotic pets.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for team member image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
                <p className="text-blue-600 font-medium mb-4">Dental Technician</p>
                <p className="text-gray-600">
                  With a decade of experience in animal dental care, Sarah ensures each procedure runs smoothly and patients are comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              {/* Placeholder for facility image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">State-of-the-Art Facility</h2>
              <p className="text-gray-700 mb-6">
                Our dental department is equipped with the latest technology and equipment specifically designed for animal dental procedures. From digital dental X-rays to specialized cleaning tools, we have everything needed to provide comprehensive dental care.
              </p>
              <p className="text-gray-700 mb-6">
                The comfort of your pets is our priority. Our treatment rooms are designed to create a calm environment, and we use modern anesthesia monitoring equipment to ensure the safety of every patient during procedures.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Digital Radiography</h3>
                  <p className="text-gray-600 text-sm">For detailed imaging with minimal radiation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Ultrasonic Scalers</h3>
                  <p className="text-gray-600 text-sm">For gentle and effective cleaning</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Advanced Monitoring</h3>
                  <p className="text-gray-600 text-sm">For safe anesthesia during procedures</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Specialized Tools</h3>
                  <p className="text-gray-600 text-sm">For all types and sizes of animals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to provide the best dental care for your pet.
          </p>
          <Link
            href="/appointments"
            className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
} 