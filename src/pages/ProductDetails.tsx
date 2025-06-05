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
import { getProductImages } from '@/utils/productUtils';
import Footer from '@/components/Footer';
import { Image as ImageIcon } from 'lucide-react';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  const product = useMemo(() => {
    if (!id) {
      navigate('/marketplace');
      return null;
    }
    
    // Convert both to number for comparison
    const productId = parseInt(id, 10);
    const allProducts = getProductImages();
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (!foundProduct) {
      navigate('/marketplace');
      return null;
    }
    
    return foundProduct;
  }, [id, navigate]);

  useEffect(() => {
    if (!product) return;
    
    let isMounted = true;
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Check if any variant of this product is in the cart
    const inCart = cart.some((item: any) => item.metadata?.productId === product.id);
    
    // Set default selected size and price
    const defaultSize = product.prices?.[0]?.size || null;
    const defaultPrice = product.prices?.[0]?.price || 0;
    
    if (isMounted) {
      setIsInCart(inCart);
      setSelectedSize(defaultSize);
      setSelectedPrice(defaultPrice);
    }
    
    return () => {
      isMounted = false;
    };
  }, [product]);

  const [currentImage, setCurrentImage] = useState(product?.url || '');
  const [errorCount, setErrorCount] = useState(0);

  // Update current image when product changes
  useEffect(() => {
    if (product?.url) {
      setCurrentImage(product.url);
      setErrorCount(0);
    }
  }, [product]);

  const handleImageError = () => {
    if (errorCount < FALLBACK_IMAGES.length) {
      // Try the next fallback image
      setCurrentImage(FALLBACK_IMAGES[errorCount]);
      setErrorCount(prev => prev + 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-pulse text-gray-400">
              <ImageIcon className="w-16 h-16 mx-auto mb-4" />
              <p>Loading product details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.prices?.length > 0) {
      // Select first size by default if none selected
      setSelectedSize(product.prices[0].size);
      setSelectedPrice(product.prices[0].price);
      return;
    }

    // Create a unique ID for the cart item
    const cartItemId = Number(`${product.id}${selectedSize?.toString().replace(/\D/g, '')}`);
    
    const cartItem = {
      id: cartItemId,
      name: `${product.title} (${selectedSize})`,
      price: selectedPrice.toString(),
      image: product.url,
      quantity: 1,
      // Store additional data in a separate field to maintain CartItem type
      metadata: {
        productId: product.id,
        size: selectedSize,
        originalPrice: product.originalPrice.toString(),
      }
    };

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((item: any) => 
      item.metadata?.productId === product.id && item.metadata?.size === selectedSize
    );

    let updatedCart;
    if (existingItemIndex >= 0) {
      // Update quantity if item with same size already in cart
      updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
    } else {
      // Add new item to cart
      updatedCart = [...cart, cartItem];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Call addToCart with the properly typed cart item
    addToCart({
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image
    });
    
    setIsInCart(true);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  // Update isInCart when selected size changes
  useEffect(() => {
    if (!product || !selectedSize) return;
    
    let isMounted = true;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const inCart = cart.some((item: any) => 
      item.productId === product.id && item.size === selectedSize
    );
    
    if (isMounted) {
      setIsInCart(inCart);
    }
    
    return () => {
      isMounted = false;
    };
  }, [selectedSize, product]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={product.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <ImageIcon className="w-12 h-12 text-gray-300" />
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8 p-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{product.title}</h1>
              {product.prices[0]?.price < (product.originalPrice || Infinity) && (
                <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                  Sale
                </span>
              )}
            </div>

            {/* Size Selection */}
            {product.prices?.length > 1 && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.prices.map((priceOption) => (
                    <button
                      key={priceOption.size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(priceOption.size);
                        setSelectedPrice(priceOption.price);
                      }}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === priceOption.size
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-300 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {priceOption.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <span className="text-2xl font-semibold text-primary">
                  {formatINR(selectedPrice || product.currentPrice)}
                </span>
                {product.originalPrice > selectedPrice && (
                  <span className="block text-sm text-gray-500 line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
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
                <p className="text-sm text-accent">On orders over ₹1,000</p>
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
      
    </div>
  );
};

export default ProductDetails;
