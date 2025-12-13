import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7FAFC] border-t border-gray-200">
      <div className="max-w-360 mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND + DESCRIPTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/blue-logo.png"
                alt="Ayan Furniture Logo"
                width={30}
                height={30}
              />
              <span className="font-semibold text-lg text-gray-900">
                AYAN
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Ayan Furniture is committed to delivering comfort, style, and
              lasting quality. We create thoughtfully designed pieces to
              transform every space into a home you love. Your comfort is our
              craft.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">About us</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Contact us</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Products</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Press</Link></li>
            </ul>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">Features</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Pricing</Link></li>
              <li><Link href="#" className="hover:text-gray-900">FAQ</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Support</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Return Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-sm text-gray-600">
            © 2025 Copyright, All Right Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
