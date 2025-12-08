import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm text-gray-900 font-sans border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Area */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <span className="flex items-center justify-center">+</span> Blessings Medical
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-teal font-medium text-base transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-teal hover:bg-teal-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
              Contact us <span className="text-lg">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal hover:bg-teal/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 block px-3 py-3 rounded-md text-base font-medium hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="w-full text-center bg-teal text-white font-bold block px-3 py-3 rounded-full text-base mt-6 shadow-md">
              Contact us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;