import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Star } from 'lucide-react';
import productsData from '../data/products.json';

interface Product {
  id: number;
  title: string;
  currentPrice: number;
  oldPrice: number;
  discount: string;
  image: string;
  category: string;
  ratings: number;
}

const Marketplace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sortOrder, setSortOrder] = useState('newest');
  const [category, setCategory] = useState('all');

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
    let products = productsData.products;

    // Filter by category
    if (category !== 'all') {
      products = products.filter((product) => product.category === category);
    }

    // Sort products
    const sortedProducts = [...products];
    switch (sortOrder) {
      case 'newest':
        return sortedProducts.reverse();
      case 'price-asc':
        return sortedProducts.sort((a, b) => a.currentPrice - b.currentPrice);
      case 'price-desc':
        return sortedProducts.sort((a, b) => b.currentPrice - a.currentPrice);
      case 'rating-desc':
        return sortedProducts.sort((a, b) => b.ratings - a.ratings);
      default:
        return sortedProducts;
    }
  }, [category, sortOrder]);

  // Get unique categories from products
  const categories = [
    'all',
    ...new Set(productsData.products.map((product) => product.category)),
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={`${product.image}`}
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
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary font-medium">
                      ₹{product.currentPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {product.ratings}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
