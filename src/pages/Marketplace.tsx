import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { getProductImages, getProductsByCategory, ProductImage } from '@/utils/productUtils';
import { formatINR } from '@/utils/currency';

// Extend the ProductImage type with additional properties for the Marketplace
type Product = ProductImage & {
  currentPrice: number;
  originalPrice: number;
  isNew?: boolean;
};

const Marketplace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sortOrder, setSortOrder] = useState('newest');
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const allProducts = getProductImages().map(product => ({
          ...product,
          currentPrice: product.prices[0]?.price || 0,
          originalPrice: Math.round((product.prices[0]?.price || 0) * 1.2), // Add 20% as original price
          isNew: Math.random() > 0.5 // Randomly mark some as new
        }));
        setProducts(allProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Get category from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory('all');
    }
  }, [location.search]);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = [...products];

    // Filter by category
    if (category !== 'all') {
      const categoryProducts = getProductsByCategory(category);
      filteredProducts = categoryProducts.map(product => ({
        ...product,
        currentPrice: product.prices[0]?.price || 0,
        originalPrice: Math.round((product.prices[0]?.price || 0) * 1.2),
        isNew: Math.random() > 0.5
      }));
    }

    // Sort products
    const sortedProducts = [...filteredProducts];
    return sortedProducts.sort((a, b) => {
      switch (sortOrder) {
        case 'newest':
          return b.id - a.id;
        case 'price-asc':
          return a.currentPrice - b.currentPrice;
        case 'price-desc':
          return b.currentPrice - a.currentPrice;
        case 'rating-desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [category, sortOrder, products]);

  // Get unique categories from products
  const categories = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            {category === 'all'
              ? 'All Products'
              : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
            <span className="text-gray-500 text-lg ml-2">
              ({filteredAndSortedProducts.length} items)
            </span>
          </h1>

          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating-desc">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={product.url}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Failed to load image: ${product.url}`);
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80';
                      target.classList.add('opacity-50');
                    }}
                    loading="lazy"
                  />
                </div>
                
                {/* Product Badge */}
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="bg-white hover:bg-amber-50 rounded-full h-10 w-10 shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to wishlist logic
                    }}
                  >
                    <Heart className="h-4 w-4 text-gray-700" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="bg-white hover:bg-amber-50 rounded-full h-10 w-10 shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Quick view logic
                    }}
                  >
                    <Eye className="h-4 w-4 text-gray-700" />
                  </Button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-gray-900 line-clamp-2 h-12">
                    {product.title}
                  </h3>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-baseline justify-between mt-3">
                  <div>
                    <span className="text-lg font-bold text-amber-700">
                      {formatINR(product.prices[0].price)}
                    </span>
                    {product.originalPrice > product.prices[0].price && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {formatINR(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic
                      console.log('Added to cart:', product.id);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                
                {/* Stock Status */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Available: {product.stock} pcs</span>
                    <span>
                      {product.stock > 10 ? 'In Stock' : 'Low Stock'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${
                        product.stock > 10 ? 'bg-green-500' : 'bg-amber-500'
                      }`} 
                      style={{ width: `${Math.min(100, (product.stock / 20) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Clickable Overlay */}
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Marketplace;
