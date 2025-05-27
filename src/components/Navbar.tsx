import { Search, BookOpen, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useUser, SignInButton, SignUpButton } from '@clerk/clerk-react';
import UserButton from './auth/UserButton';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Edu-Madi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors font-medium`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`${
                location.pathname === '/courses' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors font-medium`}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors font-medium`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition-colors font-medium`}
            >
              Contact
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {isSignedIn ? (
              <div className="flex items-center">
                <UserButton />
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Sign up
                  </button>
                </SignUpButton>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition-colors font-medium py-2`}
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  location.pathname === '/courses' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition-colors font-medium py-2`}
              >
                Courses
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition-colors font-medium py-2`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition-colors font-medium py-2`}
              >
                Contact
              </Link>
              {!isSignedIn && (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <SignInButton mode="modal">
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-center transition-colors"
                    >
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-center transition-colors"
                    >
                      Sign up
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>
        )}
      </div>
      </nav>
    </>
  );
};

export default Navbar;
