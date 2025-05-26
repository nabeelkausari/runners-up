import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Star } from 'lucide-react';
import { formatINR } from '@/utils/currency';
import { useCart } from '../contexts/CartContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import productsData from '../data/products.json';
import Footer from '@/components/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);

  const product = useMemo(() => {
    const foundProduct = productsData.products.find(
      (p) => p.id === parseInt(id || '1')
    );
    if (!foundProduct) {
      navigate('/marketplace');
      return null;
    }
    return foundProduct;
  }, [id, navigate]);

  useEffect(() => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setIsInCart(cart.some((item) => item.id === product.id));
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.title,
      price: product.currentPrice.toString(),
      image: product.image,
    };

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...cart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    addToCart(cartItem);
    setIsInCart(true);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg bg-white p-8">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[400px] mx-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8 p-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{product.title}</h1>
              {product.discount && (
                <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                  {product.discount}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <span className="text-2xl font-semibold text-primary">
                  {formatINR(product.currentPrice)}
                </span>
                <span className="block text-sm text-gray-500 line-through">
                  {formatINR(product.oldPrice)}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              {!isInCart ? (
                <Button className="w-full lg:w-auto" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              ) : (
                <>
                  <Button
                    className="w-full lg:w-auto"
                    onClick={handleAddToCart}
                  >
                    Add Again
                  </Button>
                  <Button
                    className="w-full lg:w-auto"
                    variant="outline"
                    onClick={handleViewCart}
                  >
                    View Cart
                  </Button>
                </>
              )}
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-accent">{product.title}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="short-info">
                <AccordionTrigger>Specifications</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-accent">
                    <li>High-quality audio performance</li>
                    <li>Comfortable fit for extended use</li>
                    <li>Durable build quality</li>
                    <li>Advanced features for enhanced experience</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping Information</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-accent">
                    <li>Free shipping on orders over ₹5,000</li>
                    <li>Delivery within 3-5 business days</li>
                    <li>Easy 30-day returns</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="space-y-4 mt-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="description">
                  <AccordionTrigger>Product Description</AccordionTrigger>
                  <AccordionContent>
                    <div className="prose prose-sm">
                      <p>{product.title}</p>
                      {product.category === 'smartphones' && (
                        <ul className="list-disc pl-4 mt-2">
                          <li>Latest generation processor</li>
                          <li>High-resolution display</li>
                          <li>Advanced camera system</li>
                          <li>Fast charging capability</li>
                        </ul>
                      )}
                      {product.category === 'laptops' && (
                        <ul className="list-disc pl-4 mt-2">
                          <li>Powerful performance</li>
                          <li>High-quality display</li>
                          <li>Long battery life</li>
                          <li>Premium build quality</li>
                        </ul>
                      )}
                      {product.category === 'headphones' && (
                        <ul className="list-disc pl-4 mt-2">
                          <li>Premium sound quality</li>
                          <li>Active noise cancellation</li>
                          <li>Comfortable fit</li>
                          <li>Long battery life</li>
                        </ul>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="specifications">
                  <AccordionTrigger>Technical Specifications</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Category:</span>
                        <span className="ml-2 capitalize">{product.category}</span>
                      </div>
                      <div>
                        <span className="font-medium">Warranty:</span>
                        <span className="ml-2">1 Year</span>
                      </div>
                      <div>
                        <span className="font-medium">In Stock:</span>
                        <span className="ml-2">Yes</span>
                      </div>
                      <div>
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 flex items-center">
                          {product.ratings} <Star className="w-4 h-4 ml-1 text-yellow-400" />
                        </span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Free shipping</h3>
                <p className="text-sm text-accent">On orders over ₹5,000</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Very easy to return</h3>
                <p className="text-sm text-accent">Just phone number</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Nationwide delivery</h3>
                <p className="text-sm text-accent">
                  Fast and reliable shipping
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Refunds policy</h3>
                <p className="text-sm text-accent">
                  Easy returns within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
