import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Animal Hospital Dental Department</h3>
          <p className="text-gray-300">
            Providing specialized dental care for all your pets.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="text-gray-300 hover:text-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="text-gray-300 hover:text-white">
                Book an Appointment
              </Link>
            </li>
            <li>
              <Link href="/emergency" className="text-gray-300 hover:text-white">
                Emergency Care
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-300 hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <address className="not-italic text-gray-300">
            <div className="mb-2">123 Pet Care Avenue</div>
            <div className="mb-2">Veterinary District, VT 12345</div>
            <div className="mb-2">Phone: (555) 123-4567</div>
            <div className="mb-2">Email: dental@animalhospital.com</div>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Animal Hospital Dental Department. All rights reserved.</p>
      </div>
    </footer>
  );
} 