import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users, Star } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { getProductImages, ProductImage } from '@/utils/productUtils';
import { formatINR } from '@/utils/currency';

type Product = ProductImage & {
  currentPrice: number;
  originalPrice: number;
  isNew?: boolean;
};

const Index = () => {
  const navigate = useNavigate();

  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = getProductImages();
    const productsWithPrices = products.map((product) => ({
      ...product,
      currentPrice: product.prices[0]?.price || 0,
      originalPrice: Math.round((product.prices[0]?.price || 0) * 1.2),
      isNew: Math.random() > 0.5,
    }));
    setAllProducts(productsWithPrices);
    setFeaturedProducts(productsWithPrices.slice(0, 4));
  }, []);

  const newArrivals = [...allProducts]
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)
    .map((product) => ({
      ...product,
      isNew: true,
      originalPrice: Math.round(
        product.currentPrice * (1.1 + Math.random() * 0.4)
      ),
    }));

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 animate-fade-up">
              <p className="text-blue-600 text-lg mb-4 font-medium">
                Welcome to Pro Cineography
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                Miniature Worlds, Unlimited Creativity
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Discover our exquisite collection of handcrafted miniatures, DIY
                kits, and expert workshops. Perfect for hobbyists, collectors,
                and creative minds of all skill levels.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => navigate('/marketplace')}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl transition-colors flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-lg rounded-xl border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-200"
                  >
                    About us
                  </Button>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-600">500+</h3>
                  <p className="text-gray-600">Miniatures</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-700">10K+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-800">50+</h3>
                  <p className="text-gray-600">Workshops</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-900">24/7</h3>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
              <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Students learning together"
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6 text-amber-800">
                Why Choose MiniCraft Pro?
              </h2>
              <p className="text-lg text-amber-900/80">
                We bring your miniature dreams to life with premium quality
                materials and expert craftsmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Handcrafted Quality
                </h3>
                <p className="text-gray-600">
                  Each piece is meticulously handcrafted using premium materials
                  for exceptional detail and durability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Expert-Led Workshops
                </h3>
                <p className="text-gray-600">
                  Learn from master artisans through our immersive in-person and
                  online workshop experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Global Community
                </h3>
                <p className="text-gray-600">
                  Join thousands of passionate miniature enthusiasts in our
                  supportive global community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Miniatures */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium px-6 py-2 rounded-full mb-4 shadow-lg shadow-amber-100 hover:shadow-amber-200 transition-shadow duration-300">
                Handcrafted Collections
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                Featured Miniatures
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most exquisite hand-painted miniatures, perfect for
                collectors and enthusiasts.
                <span className="block mt-2 text-amber-700 font-medium">
                  Limited quantities available!
                </span>
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['All', 'Fantasy', 'Historical', 'Sci-Fi', 'Architecture'].map(
                  (category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        category === 'All'
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full border border-gray-100"
                >
                  {/* Badge for New or Sale */}
                  {product.originalPrice &&
                  product.originalPrice > product.currentPrice ? (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-bounce">
                      SALE{' '}
                      {Math.round(
                        (1 - product.currentPrice / product.originalPrice) * 100
                      )}
                      %
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      NEW
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative h-56 bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
                    <img
                      src={product.url}
                      alt={product.title}
                      className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
                      }}
                    />

                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full space-y-2">
                        <button
                          className="w-full bg-white hover:bg-amber-50 text-amber-700 py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 border border-amber-200"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Quick View
                        </button>
                        <button
                          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
                          onClick={() =>
                            console.log('Add to cart:', product.id)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1 group-hover:text-amber-700 transition-colors">
                          {product.title}
                        </h3>
                        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                          {product.category || 'Miniature'}
                        </span>
                      </div>
                      <div className="flex items-center bg-amber-50 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                        </svg>
                        {product.ratings.toFixed(1)}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {product.description ||
                        'Beautifully handcrafted miniature for your collection.'}
                    </p>

                    {/* Price and Stock */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xl font-bold text-gray-900">
                            {formatINR(product.currentPrice)}
                          </span>
                          {product.originalPrice &&
                            product.originalPrice > product.currentPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">
                                {formatINR(product.originalPrice)}
                              </span>
                            )}
                        </div>

                        {product.stock && product.stock < 10 && (
                          <div className="text-xs text-red-600 font-medium">
                            Only {product.stock} left!
                          </div>
                        )}
                      </div>

                      {/* Progress bar for stock */}
                      {product.stock && (
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${
                              product.stock > 20
                                ? 'bg-green-500'
                                : product.stock > 10
                                ? 'bg-amber-500'
                                : 'bg-red-500'
                            }`}
                            style={{
                              width: `${Math.min(
                                100,
                                (product.stock / 100) * 100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-200"
                onClick={() => navigate('/marketplace')}
              >
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full mb-3">
                Fresh Additions
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                New Arrivals
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our latest handcrafted miniatures, just added to the
                collection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newArrivals.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-amber-100"
                >
                  <div className="relative h-56 bg-amber-50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <img
                        src={product.url}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
                        }}
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        New
                      </span>
                    </div>
                    {product.stock && product.stock < 15 && (
                      <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 animate-pulse"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {product.stock} left
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Button
                        className="w-full bg-white text-amber-700 hover:bg-amber-50 py-2.5 text-sm font-medium flex items-center justify-center gap-2"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">
                          {product.title}
                        </h3>
                        <p className="text-sm text-amber-600 font-medium">
                          {product.category || 'New Arrival'}
                        </p>
                      </div>
                      <div className="flex items-center bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                        </svg>
                        {product.ratings.toFixed(1)}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-amber-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-lg font-bold text-gray-900">
                            {formatINR(product.currentPrice)}
                          </span>
                          {product.originalPrice &&
                            product.originalPrice > product.currentPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">
                                {formatINR(product.originalPrice)}
                              </span>
                            )}
                        </div>
                        <button
                          className="text-white bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors shadow-md hover:shadow-lg"
                          onClick={() => {
                            // Add to cart logic here
                            console.log('Added to cart:', product.title);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-base font-medium rounded-lg flex items-center gap-2 mx-auto"
                onClick={() => navigate('/marketplace?sort=newest')}
              >
                View All New Arrivals
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium px-6 py-2 rounded-full mb-4 shadow-lg shadow-amber-100 hover:shadow-amber-200 transition-shadow duration-300">
                ❤️ Customer Love
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                What Our Community Says
              </h2>
              <p className="text-lg text-amber-900/80">
                Don't just take our word for it. Here's what our customers have
                to say about their MiniCraft Pro experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: 'Sarah Johnson',
                  role: 'Miniature Collector',
                  content:
                    "The attention to detail in these miniatures is incredible! I've been collecting for years, and these are some of the finest pieces in my collection.",
                  rating: 5,
                  image:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                  purchase: 'Custom Family Figurine',
                },
                {
                  id: 2,
                  name: 'Michael Chen',
                  role: 'Hobbyist',
                  content:
                    'The workshop was amazing! The instructors were knowledgeable and patient. I learned so much about miniature painting techniques.',
                  rating: 5,
                  image:
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                  purchase: 'Miniature Painting Workshop',
                },
                {
                  id: 3,
                  name: 'Priya Patel',
                  role: 'Gift Buyer',
                  content:
                    'Bought a custom miniature as a gift and the recipient was over the moon! The customization options made it extra special.',
                  rating: 4,
                  image:
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
                  purchase: 'Personalized Couple Figurine',
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-amber-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic relative pl-4 border-l-2 border-amber-200">
                    <span className="absolute -left-3.5 top-0 text-amber-400 text-4xl">
                      "
                    </span>
                    {testimonial.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      Purchased:{' '}
                      <span className="text-amber-700 font-medium">
                        {testimonial.purchase}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                Share Your Experience
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
