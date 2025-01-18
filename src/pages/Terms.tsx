import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Permission is granted to temporarily download one copy of the materials for personal,
                non-commercial transitory viewing only.
              </li>
              <li>
                This is the grant of a license, not a transfer of title, and under this license you may not:
                <ul className="list-disc pl-6 mt-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide accurate product information, but we do not warrant that product
              descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All prices are in Indian Rupees (₹)</li>
              <li>Prices are subject to change without notice</li>
              <li>We accept various payment methods as displayed during checkout</li>
              <li>All payments must be received in full before products are shipped</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Warranty Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on RunnersUp's website are provided on an 'as is' basis. RunnersUp makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property or other violation
              of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:paytrekzap@gmail.com" className="text-primary hover:underline">
                paytrekzap@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
