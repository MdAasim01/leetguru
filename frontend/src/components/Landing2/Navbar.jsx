// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import LogoutButton from '../LogoutButton';
import { Code, LogOut, User } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authUser } = useAuthStore();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={` w-full z-50 top-0 bg-gray-900/80 border-b border-gray-800 transition-all duration-300 
        ${scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2"
          : " py-4"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="bg-emerald-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-xl">LG</span>
                </div>
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  LeetGuru
                </span>
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#features" className="text-gray-300 font-medium">Features</a>
                <a href="#problems" className="text-gray-300 hover:text-white font-medium">Problems</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white font-medium">Testimonials</a>
                <a href="#pricing" className="text-gray-300 hover:text-white font-medium">Pricing</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {authUser ? (
                <>
                  <div className="flex items-center gap-8">
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar flex flex-row "
                      >
                        <div className="w-10 rounded-full ">
                          <img
                            src={
                              authUser?.image ||
                              "https://avatar.iran.liara.run/public/boy"
                            }
                            alt="User Avatar"
                            className="object-cover"
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
                      >
                        {/* Admin Option */}

                        {/* Common Options */}
                        <li>
                          <p className="text-base font-semibold">
                            {authUser?.name}
                          </p>
                          <hr className="border-gray-200/10" />
                        </li>
                        <li>
                          <Link
                            to="/profile"
                            className="hover:bg-primary hover:text-white text-base font-semibold"
                          >
                            <User className="w-4 h-4 mr-2" />
                            My Profile
                          </Link>
                        </li>
                        {authUser?.role === "ADMIN" && (
                          <li>
                            <Link
                              to="/add-problem"
                              className="hover:bg-primary hover:text-white text-base font-semibold"
                            >
                              <Code className="w-4 h-4 mr-1" />
                              Add Problem
                            </Link>
                          </li>
                        )}
                        <li>
                          <LogoutButton className="hover:bg-primary hover:text-white">
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                          </LogoutButton>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-white font-medium">Log in</Link>
                  <Link to="/signup" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Get Started
                  </Link>
                </>
              )}

            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-emerald-400 block px-3 py-2 font-medium">Features</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 font-medium">Problems</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 font-medium">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 font-medium">Testimonials</a>
              <div className="pt-4 border-t border-gray-800">
                <a href="#" className="block text-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.nav>
  );
};

export default Navbar;