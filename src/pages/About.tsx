import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About Us</h1>

          <div className="prose max-w-none">
            <p className="mb-6">
              PROMETHORA FINTECH SOLUTIONS PVT LTD, operating under the brand
              name E-THORA, is a leading provider of premium electronics in
              India. We are dedicated to bringing you the finest selection of
              smartphones, laptops, and audio equipment that deliver exceptional
              quality and user experience.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              At E-THORA, our mission is to make cutting-edge technology accessible
              to everyone. We believe that premium electronics should not be a luxury,
              but an essential tool for enhancing daily life.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Quality:</strong> We carefully curate our product
                selection to ensure only the best electronic devices reach our
                customers.
              </li>
              <li className="mb-2">
                <strong>Innovation:</strong> We stay at the forefront of technology
                to bring you the latest and most innovative products.
              </li>
              <li className="mb-2">
                <strong>Customer Service:</strong> We are committed to providing
                exceptional customer service and support throughout your
                shopping journey.
              </li>
              <li className="mb-2">
                <strong>Integrity:</strong> We maintain transparency in our
                operations and pricing to build lasting relationships with our
                customers.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Contact Information
            </h2>
            <p className="mb-2">
              PROMETHORA FINTECH SOLUTIONS PVT LTD
              <br />
              21ST STAGE, 4TH BLOCK,HBR LAYOUT, Kalyananagar, Bangalore North, Bangalore- 560043, Karnataka
            </p>
            <p className="mb-2">
              {/* Email: contact@ethora.com
              <br /> */}
              Phone: +91 7200167611
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
