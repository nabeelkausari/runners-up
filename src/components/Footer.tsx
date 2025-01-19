import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const Footer = () => {
  // Get unique categories from products
  const categories = [
    ...new Set(productsData.products.map((product) => product.category)),
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold mb-6 text-primary block">
              RunnersUp
            </Link>
            <p className="text-gray-600 mt-4 mb-6">
              Your one-stop destination for premium audio equipment and
              accessories.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-600">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/marketplace?category=${category}`}
                    className="hover:text-primary transition-colors capitalize"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/marketplace"
                  className="hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-primary transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+917200167611"
                  className="hover:text-primary transition-colors"
                >
                  +917200167611
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600">
            {new Date().getFullYear()} RunnersUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
