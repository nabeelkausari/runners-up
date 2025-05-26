import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to Edu-Madi. These Terms and Conditions outline the rules and
            regulations for the use of PROMETHORA FINTECH SOLUTIONS PVT LTD's
            website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            1. Terms of Service
          </h2>
          <p className="mb-4">
            By accessing this website, you accept these terms and conditions in
            full. Do not continue to use Edu-Madi's website if you do not accept
            all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            2. License to Use Website
          </h2>
          <p className="mb-4">
            Unless otherwise stated, PROMETHORA FINTECH SOLUTIONS PVT LTD and/or
            its licensors own the intellectual property rights for all material
            on Edu-Madi. All intellectual property rights are reserved.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. User Account</h2>
          <p className="mb-4">
            When you create an account with us, you guarantee that the
            information you provide is accurate, complete, and current at all
            times. Inaccurate, incomplete, or obsolete information may result in
            the immediate termination of your account on the Service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            4. Product Information
          </h2>
          <p className="mb-4">
            We strive to provide accurate product descriptions and pricing.
            However, we do not warrant that product descriptions or prices are
            accurate, complete, reliable, current, or error-free.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please
            contact us:
          </p>
          <p className="mb-4">
            PROMETHORA FINTECH SOLUTIONS PVT LTD
            <br />
            {/* Email: legal@ethora.com
            <br /> */}
            Phone: +91 7200167611
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
