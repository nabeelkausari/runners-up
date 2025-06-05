import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Shipping() {
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

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Delivery Information
          </h1>
          <p className="text-gray-600">Last updated: June 2024</p>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Please read the following delivery information carefully to
            understand our process and timeline.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Creation Process
              </h2>
              <p className="text-gray-700">
                Items that are created in our warehouse are specifically for
                your order. Each piece is carefully crafted to meet your unique
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Timeline
              </h2>
              <p className="text-gray-700">
                The whole process of Artwork including delivery typically takes
                3 to 5 weeks as it is a time-consuming process. This timeframe
                ensures that we deliver the highest quality product that meets
                our standards and your expectations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Confirmation
              </h2>
              <p className="text-gray-700 mb-4">
                Once your order is placed we will be contacting you for the
                order confirmation & details. This step is crucial to ensure we
                have all the necessary information to create your custom piece.
              </p>
              <p className="text-gray-700">
                For any questions about delivery or to track your order, please
                contact us at: hello@procineography.store
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
