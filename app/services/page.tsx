import Link from "next/link";

export const metadata = {
  title: "Our Dental Services | Animal Hospital Dental Department",
  description: "Comprehensive dental services for all your pets",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Dental Services</h1>
          <p className="text-xl max-w-2xl">
            We provide comprehensive dental care for all types of pets, from routine cleanings to advanced procedures.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Dental Examination and Cleaning</h2>
                <p className="text-gray-600 mb-4">
                  A comprehensive dental examination includes evaluating your pet&apos;s oral health, teeth, gums, and overall dental condition. Our professional cleaning removes plaque and tartar buildup, polishes teeth, and helps prevent dental disease.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Thorough oral examination</li>
                  <li>Professional scaling and polishing</li>
                  <li>Fluoride treatment</li>
                  <li>Dental X-rays when necessary</li>
                </ul>
                <p className="font-medium">Recommended for: All pets, especially those over 3 years old</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Tooth Extractions</h2>
                <p className="text-gray-600 mb-4">
                  When a tooth is severely damaged or infected, extraction may be necessary to relieve pain and prevent further health issues. Our specialists use modern techniques and appropriate pain management to make the procedure as comfortable as possible.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Simple and surgical extractions</li>
                  <li>Pre-operative pain management</li>
                  <li>Complete aftercare instructions</li>
                  <li>Follow-up appointments</li>
                </ul>
                <p className="font-medium">Recommended for: Pets with damaged, loose, or infected teeth</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Preventive Dental Care</h2>
                <p className="text-gray-600 mb-4">
                  Prevention is the best approach to dental health. We offer guidance and products to help maintain your pet&apos;s oral hygiene at home between professional cleanings.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Home dental care demonstrations</li>
                  <li>Specialized toothbrushes and pastes for pets</li>
                  <li>Dental chews and treats recommendations</li>
                  <li>Water additives for dental health</li>
                </ul>
                <p className="font-medium">Recommended for: All pets, starting from a young age</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Advanced Dental Procedures</h2>
                <p className="text-gray-600 mb-4">
                  For complex dental issues, we offer specialized treatments to address specific conditions and restore your pet&apos;s oral health.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Root canal therapy</li>
                  <li>Treatment for periodontal disease</li>
                  <li>Oral mass biopsies</li>
                  <li>Jaw fracture repairs</li>
                </ul>
                <p className="font-medium">Recommended for: Pets with advanced dental issues or oral injuries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule a Dental Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to provide the best dental care for your pet.
          </p>
          <Link
            href="/appointments"
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
} 