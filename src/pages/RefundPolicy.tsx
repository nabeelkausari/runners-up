import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicy() {
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
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h1>
          <p className="text-gray-600">Last updated: June 2024</p>
        </div>

        <div className="prose max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>As the products are personalised, order cancellations and refunds won't be accepted once production has begun.</li>
                <li>Damage Claims: Video must be recorded while opening the delivered package in case of damage replacements.</li>
                <li>Any claims for damage MUST be reported within 48 hours of delivery.</li>
              </ul>
            </section>

            <section className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-2">Important Note:</h3>
              <p className="text-amber-700">
                Due to the custom nature of our products, we don't accept returns or offer refunds unless the item arrives damaged or defective. 
                Please ensure all details are correct before confirming your order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Damaged or Defective Items</h2>
              <p className="text-gray-700 mb-4">
                In the rare event that you receive a damaged or defective item, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Take clear photos of the damaged item and packaging.</li>
                <li>Record a video of the unboxing process if possible.</li>
                <li>Contact our customer support team at support@procineography.com within 48 hours of delivery.</li>
                <li>Include your order number and the evidence (photos/video) in your email.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Processing Time</h2>
              <p className="text-gray-700">
                Once we receive your claim, our team will review it and respond within 2-3 business days. 
                If approved, we will send a replacement item at no additional cost to you.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
