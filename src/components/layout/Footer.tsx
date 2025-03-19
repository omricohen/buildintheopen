import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block text-2xl font-bold text-blue-600 mb-4">
              Build in the open
            </Link>
            <p className="text-gray-600 max-w-md">
              Build in the open helps modern founders and entrepreneurs build their companies openly with tools, resources, and a supportive community.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <p className="text-gray-600 mb-4">
              <a 
                href="mailto:hello@buildintheopen.org" 
                className="hover:text-blue-600 transition-colors"
              >
                hello@buildintheopen.org
              </a>
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Discord"
              >
                <FaDiscord size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Build in the open. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 