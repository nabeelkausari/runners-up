import { Search, User, ShoppingCart } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect, useRef } from 'react';
import productsData from '../data/products.json';

const Navbar = () => {
  const { items } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const filteredProducts = productsData.products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (productId: number) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/product/${productId}`);
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/marketplace?category=${category}`);
  };

  const categories = [
    ...new Set(productsData.products.map((product) => product.category)),
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          RunnersUp
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/marketplace"
            className={`nav-link ${
              location.pathname === '/marketplace' && !location.search
                ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                : ''
            }`}
          >
            All Products
          </Link>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`nav-link capitalize hover:text-accent transition-colors pb-1 ${
                location.pathname === '/marketplace' &&
                location.search === `?category=${category}`
                  ? 'text-gray-900 border-b-2 border-red-500'
                  : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative" ref={searchRef}>
            <button
              className="p-2 hover:text-accent transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <div className="fixed sm:absolute left-0 sm:left-auto right-0 sm:right-0 mt-2 mx-4 sm:mx-0 w-auto sm:w-96 bg-white rounded-lg shadow-lg border p-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 border rounded-md mb-2"
                  value={searchQuery}
                  onChange={handleSearch}
                  autoFocus
                />
                {searchQuery && (
                  <div className="max-h-96 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                          onClick={() => handleProductClick(product.id)}
                        >
                          <img
                            src={`https://shop.forerunnercoltd.com/${product.image}`}
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium line-clamp-1">
                              {product.title}
                            </p>
                            <p className="text-sm text-primary">
                              ₹{product.currentPrice}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500 py-4">
                        No products found
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <Link
            to={isAuthenticated ? '/profile' : '/login'}
            className="p-2 hover:text-accent transition-colors"
          >
            <User size={20} />
          </Link>
          <Link
            to="/cart"
            className="p-2 hover:text-accent transition-colors relative"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
