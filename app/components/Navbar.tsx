import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <div className="font-bold text-xl">Animal Hospital</div>
            <div className="ml-2 bg-white text-blue-600 px-2 py-1 rounded-md text-xs font-semibold">
              Dental Department
            </div>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-200 transition-colors">
            Services
          </Link>
          <Link href="/appointments" className="hover:text-blue-200 transition-colors">
            Appointments
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 