import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Sparkles, MapPin } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gold-finance', label: 'Gold Finance' },
    { path: '/property-valuation', label: 'Property Valuation' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-500 bg-white shadow-lg border-b border-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center py-2 sm:py-2.5 lg:py-3">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-base">GF</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black transition-all duration-300">
                <span className="hidden lg:inline">Gold Finance & Property</span>
                <span className="lg:hidden">GF & Property</span>
              </h1>
              <p className="text-xs sm:text-sm font-medium text-gray-600 transition-colors duration-300">
                <span className="hidden xl:inline">Your Trusted Financial Partner</span>
                <span className="xl:hidden">Trusted Partner</span>
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`relative px-1 xl:px-2 py-2 font-semibold text-xs xl:text-sm transition-all duration-300 group whitespace-nowrap ${
                  isActivePath(item.path)
                    ? 'text-black' 
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 rounded-full ${
                  isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-black rounded-xl text-white text-sm font-semibold transform hover:scale-105 transition-all duration-300">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9788752611</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-black rounded-xl text-white text-sm font-semibold transform hover:scale-105 transition-all duration-300">
              <Mail className="w-3.5 h-3.5" />
              <span>info@goldfinance.com</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-black rounded-xl text-white text-sm font-semibold transform hover:scale-105 transition-all duration-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Tamil Nadu</span>
            </div>
          </div>

          <button
            className="lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 text-black hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-xl sm:rounded-2xl mt-2 py-3 sm:py-6 mx-2 sm:mx-4 border border-black animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2 sm:space-y-4 px-3 sm:px-6">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-black bg-gray-100'
                      : 'text-gray-800 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-2 sm:pt-4 border-t border-gray-200 space-y-1.5 sm:space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-4 h-4 text-black" />
                  <span className="font-medium text-xs sm:text-sm">+91 9788752611</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-4 h-4 text-black" />
                  <span className="font-medium text-xs sm:text-sm">info@goldfinance.com</span>
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};