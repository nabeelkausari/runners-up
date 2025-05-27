import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Warranty = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Warranty Policy</h1>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Standard Warranty Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Smartphones</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>1 year manufacturer warranty</li>
                  <li>Covers hardware defects</li>
                  <li>Battery warranty included</li>
                  <li>Software support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Laptops</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>1 year comprehensive warranty</li>
                  <li>Parts and labor covered</li>
                  <li>On-site service available</li>
                  <li>Extended warranty options</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Audio Devices</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>1 year manufacturer warranty</li>
                  <li>Covers manufacturing defects</li>
                  <li>Accessories warranty</li>
                  <li>Replacement options</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Warranty Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Warranty period starts from the date of purchase</li>
              <li>Original purchase invoice required for warranty claims</li>
              <li>Warranty is non-transferable</li>
              <li>Warranty covers only manufacturing defects</li>
              <li>Physical damage or unauthorized repairs void warranty</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Extended Warranty</h2>
            <p className="text-gray-600 mb-4">
              Extend your product protection with our extended warranty plans:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Additional 1 or 2 years coverage</li>
              <li>Comprehensive protection</li>
              <li>Priority service</li>
              <li>No hidden charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Warranty Claims Process</h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>Contact our customer support</li>
              <li>Provide product and purchase details</li>
              <li>Get authorization for service</li>
              <li>Visit authorized service center or arrange pickup</li>
              <li>Track repair status online</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="text-gray-600">
              For warranty-related queries, please contact us at{' '}
              <a href="tel:+919900077752" className="text-primary hover:underline">
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

export default Warranty;
