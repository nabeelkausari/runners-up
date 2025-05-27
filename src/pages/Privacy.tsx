import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            This Privacy Policy describes how PROMETHORA FINTECH SOLUTIONS PVT
            LTD ("we", "our", or "us") collects, uses, and shares your personal
            information when you use our website Edu-Madi (the "Service").
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            When you visit Edu-Madi, we automatically collect certain information
            about your device, including information about your web browser, IP
            address, time zone, and some of the cookies that are installed on
            your device.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your orders and maintain your account</li>
            <li>
              Communicate with you about products, services, and promotions
            </li>
            <li>Improve our website and customer service</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            For any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Paymadi Technologies LLP
            <br />
            {/* Email: privacy@ethora.com
            <br /> */}
            Phone: +919900077752
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
