import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Shield,
  FileText,
  Package,
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Pro Cineography
              </span>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              Crafting Memories in Miniature
            </p>
            <p className="text-sm text-gray-500">
              Handcrafted 3D miniatures that capture your special moments
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
              <Package className="w-4 h-4 mr-2 text-amber-600" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  Shop Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-4 h-4 mr-2 text-amber-600" />
              Policies
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out flex items-center"
                >
                  <span className="w-1 h-1 bg-amber-600 rounded-full mr-2"></span>
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-amber-600" />
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <span className="font-medium text-gray-700 w-16">Email:</span>
                <a
                  href="mailto:hello@procineography.store"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200 ease-in-out"
                >
                  hello@procineography.store
                </a>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-gray-700 w-16">Address:</span>
                <address className="not-italic">
                  4TH FLOOR 50/A REGENT PLACE KOLKATA,
                  <br />
                  KOLKATA, WEST BENGAL,
                  <br />
                  700040
                </address>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/procineography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-amber-500 transition-colors duration-200 ease-in-out"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com/procineography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-amber-500 transition-colors duration-200 ease-in-out"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/procineography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-amber-500 transition-colors duration-200 ease-in-out"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Pro Cineography Private Limited. All rights reserved.
            <span className="block mt-2 text-xs text-gray-400">
              Handcrafted with ❤️ in India
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
