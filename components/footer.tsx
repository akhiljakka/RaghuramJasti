import Link from "next/link";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">
                Haripriya Granites
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Precision. Power. Perfection. Supplying high-quality granite slabs for over 20 years.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">Black Galaxy Granite</li>
              <li className="text-white/60 text-sm">Steel Grey Granite</li>
              <li className="text-white/60 text-sm">Viscount White Granite</li>
              <li className="text-white/60 text-sm">Tan Brown Granite</li>
              <li className="text-white/60 text-sm">Absolute Black Granite</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@haripriyagranites.com</span>
              </li>
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91-8897675338</span>
                 <span>+91-7795183942</span>
              </li>
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span> Industrial Area, Konidena Road, Rajupalem, Andhra Pradesh, 523301</span>

              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex justify-between items-center text-white/40 text-sm">
            <p>
              © {new Date().getFullYear()} Haripriya Granites. All rights reserved.
            </p>
            <p>
              Designed and developed by{" "}
              <Link
                href="https://akhiljakka.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Akhil Jakka
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
