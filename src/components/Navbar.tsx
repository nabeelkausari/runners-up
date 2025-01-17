import { Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { items } = useCart();
  const { isAuthenticated } = useAuth();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">RunnersUp</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/marketplace" className="nav-link">Headphones</Link>
          <Link to="/marketplace" className="nav-link">Speakers</Link>
          <Link to="/marketplace" className="nav-link">Accessories</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <Link 
            to={isAuthenticated ? "/profile" : "/login"} 
            className="p-2 hover:text-accent transition-colors"
          >
            <User size={20} />
          </Link>
          <Link to="/cart" className="p-2 hover:text-accent transition-colors relative">
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