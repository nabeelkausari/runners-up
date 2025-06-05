import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: June 2024</p>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Welcome to Pro Cineography. Please read the following terms and conditions carefully before placing your order. 
            By accessing or using our website, you agree to be bound by these terms.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Order Confirmation</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Once your order is confirmed, replacement of photographs, changes in selected sizes, materials, or product types will not be accepted.</li>
                <li>Customers are responsible for uploading a high-resolution image and providing clear, detailed instructions during order placement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Design Process & Preview</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>After the initial design (soft copy) is completed, we will send a preview of the 3D design via WhatsApp or email, based on your preferred contact method.</li>
                <li>Up to 2 revisions are allowed during the soft copy stage to ensure your complete satisfaction.</li>
                <li>Any additional revisions may incur an extra charge, depending on the complexity of changes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Final Approval & Production</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Once you approve the 3D preview, we will proceed to create the final product.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
