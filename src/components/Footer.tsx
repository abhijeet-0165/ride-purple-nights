
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">RidePulse</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Connecting drivers and passengers for a greener future.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <div className="mt-4 space-y-2">
              <Link to="/about" className="block text-sm text-gray-400 hover:text-white">
                About Us
              </Link>
              <Link to="/how-it-works" className="block text-sm text-gray-400 hover:text-white">
                How It Works
              </Link>
              <Link to="/contact" className="block text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
            <div className="mt-4 space-y-2">
              <Link to="/rides" className="block text-sm text-gray-400 hover:text-white">
                Find Rides
              </Link>
              <Link to="/offer-ride" className="block text-sm text-gray-400 hover:text-white">
                Offer a Ride
              </Link>
              <Link to="/pricing" className="block text-sm text-gray-400 hover:text-white">
                Pricing
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <div className="mt-4 space-y-2">
              <Link to="/privacy" className="block text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block text-sm text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} RidePulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
