import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">E-THORA</h3>
            <p className="text-sm text-gray-600">
              PROMETHORA FINTECH SOLUTIONS PVT LTD
            </p>
            <p className="text-sm text-gray-600">
              Your trusted destination for premium electronics
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace?category=smartphones" className="text-gray-600 hover:text-gray-900">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=laptops" className="text-gray-600 hover:text-gray-900">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=headphones" className="text-gray-600 hover:text-gray-900">
                  Audio Devices
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-600 hover:text-gray-900">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-gray-900">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 hover:text-gray-900">
                  Warranty Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              {/* <li>Email: support@ethora.com</li> */}
              <li>Phone: +91 7200167611</li>
              <li>Address: Bangalore, India</li>
              <li className="pt-4">
                <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            {new Date().getFullYear()} PROMETHORA FINTECH SOLUTIONS PVT LTD. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
