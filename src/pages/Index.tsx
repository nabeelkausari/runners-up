import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import productsData from '../data/products.json';

const Index = () => {
  const navigate = useNavigate();

  // Get top-rated products (rating >= 4)
  const featuredProducts = productsData.products
    .filter(product => product.ratings >= 4)
    .slice(0, 4);

  // Get latest products
  const newArrivals = productsData.products.slice(-4);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <p className="text-accent text-lg mb-4">
              Experience Premium Sound 🎧
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-primary">
              Discover Your Perfect Audio Companion
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              From crystal-clear earbuds to immersive headphones, find your ideal sound with our premium collection.
            </p>
            <button 
              onClick={() => navigate('/marketplace')}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
            <img
              src={`https://shop.forerunnercoltd.com/${featuredProducts[0]?.image}`}
              alt="Featured Headphone"
              className="rounded-2xl shadow-lg relative z-10 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Earbuds */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative mb-4">
                <div className="absolute inset-0 bg-blue-50 rounded-lg"></div>
                <img 
                  src={`https://shop.forerunnercoltd.com/${productsData.products.find(p => p.category === 'earbuds')?.image}`}
                  alt="Earbuds"
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wireless Earbuds</h3>
              <p className="text-gray-600">Experience true wireless freedom with our premium earbuds collection.</p>
            </div>

            {/* Headphones */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative mb-4">
                <div className="absolute inset-0 bg-purple-50 rounded-lg"></div>
                <img 
                  src={`https://shop.forerunnercoltd.com/${productsData.products.find(p => p.category === 'headphones')?.image}`}
                  alt="Headphones"
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Headphones</h3>
              <p className="text-gray-600">Immerse yourself in superior sound quality with our headphone range.</p>
            </div>

            {/* Earphones */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative mb-4">
                <div className="absolute inset-0 bg-pink-50 rounded-lg"></div>
                <img 
                  src={`https://shop.forerunnercoltd.com/${productsData.products.find(p => p.category === 'earphones')?.image}`}
                  alt="Earphones"
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wired Earphones</h3>
              <p className="text-gray-600">Classic reliability meets modern sound in our earphone collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Premium Quality */}
            <div className="text-center space-y-4">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Crafted with premium materials and cutting-edge technology</p>
            </div>

            {/* Fast Delivery */}
            <div className="text-center space-y-4">
              <div className="bg-green-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick and reliable shipping to your doorstep</p>
            </div>

            {/* Best Prices */}
            <div className="text-center space-y-4">
              <div className="bg-yellow-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Best Prices</h3>
              <p className="text-gray-600 text-sm">Competitive prices with regular discounts and offers</p>
            </div>

            {/* Warranty */}
            <div className="text-center space-y-4">
              <div className="bg-purple-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">1 Year Warranty</h3>
              <p className="text-gray-600 text-sm">Guaranteed protection and support for your purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-8">Top-rated audio gear loved by our customers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={`https://shop.forerunnercoltd.com/${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-primary font-medium">₹{product.currentPrice}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.ratings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
          <p className="text-gray-600 mb-8">Latest additions to our collection</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={`https://shop.forerunnercoltd.com/${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-primary font-medium">₹{product.currentPrice}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.ratings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
