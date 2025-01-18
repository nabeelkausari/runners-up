import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Welcome to RunnersUp</h2>
              <p className="text-gray-600 mb-4">
                At RunnersUp, we're passionate about delivering exceptional audio experiences to our customers. 
                Founded with a vision to make premium audio accessories accessible to everyone, we've grown to 
                become one of the leading destinations for high-quality headphones, earbuds, and audio accessories.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our mission is to provide our customers with the best audio products at competitive prices. 
                We believe that everyone deserves to experience high-quality sound, and we work tirelessly 
                to make this possible through careful product curation and exceptional customer service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                  <p className="text-gray-600">
                    All our products are carefully selected and tested to ensure they meet our high standards.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
                  <p className="text-gray-600">
                    We offer competitive prices and regular deals to make premium audio accessible.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                  <p className="text-gray-600">
                    Our dedicated support team is always ready to assist you with any queries.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
