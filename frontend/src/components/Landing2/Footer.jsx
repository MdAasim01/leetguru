// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <div className="bg-emerald-500 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">LG</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                LeetGuru
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              The modern platform for mastering coding interviews and technical skills. Join our community of developers leveling up their careers.
            </p>
            <div className="flex space-x-4 mt-6">
              {[0, 1, 2, 3].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white">Problems</h3>
            <ul className="mt-4 space-y-3">
              {['Array', 'String', 'Hashmap', 'Linked List', 'Tree'].map((item) => (
                <li key={item}>
                  <Link to="/login" className="text-gray-400 hover:text-emerald-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {['Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix'].map((item) => (
                <li key={item}>
                  <Link to="/login" className="text-gray-400 hover:text-emerald-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {['About', 'Careers', 'Contact', 'Partners', 'Legal'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-emerald-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LeetGuru. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;