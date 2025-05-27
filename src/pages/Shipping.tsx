import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Standard Shipping
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Delivery within 5-7 business days</li>
                  <li>Free shipping on orders above ₹999</li>
                  <li>Tracking number provided</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Delivery within 2-3 business days</li>
                  <li>Additional charges apply</li>
                  <li>Real-time tracking updates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We ship to all major cities across India</li>
              <li>Orders are processed within 24 hours on business days</li>
              <li>
                Shipping times may vary based on location and availability
              </li>
              <li>All orders are shipped with tracking information</li>
              <li>
                We are not responsible for any customs duties or import taxes
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
            <p className="text-gray-600 mb-4">
              Once your order is shipped, you will receive:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Shipping confirmation email</li>
              <li>Tracking number and link</li>
              <li>Estimated delivery date</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Shipping Restrictions
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We currently only ship within India</li>
              <li>Some remote areas may have longer delivery times</li>
              <li>PO boxes are not accepted</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              For any shipping-related queries, please contact us at{' '}
              {/* <a href="mailto:paytrekzap@gmail.com" className="text-primary hover:underline">
                paytrekzap@gmail.com
              </a>
              {' '}or call us at{' '} */}
              <a
                href="tel:+919900077752"
                className="text-primary hover:underline"
              >
                +919900077752
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
