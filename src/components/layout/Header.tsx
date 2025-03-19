'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 glass backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-lg font-bold gradient-text flex items-center">
          Build in the open
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
            Benefits
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="#community" className="text-gray-700 hover:text-blue-600 transition-colors">
            Community
          </Link>
          <Link 
            href="#join" 
            className="btn-primary"
          >
            Join the Waitlist
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass p-4 border-b border-gray-100 shadow-md md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#benefits" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#community" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="#join" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join the Waitlist
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 