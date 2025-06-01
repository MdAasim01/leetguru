// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-gray-800">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
                                <span className="text-xl font-bold">LG</span>
                            </div>
                            <h2 className="text-xl font-bold">LeetGuru</h2>
                        </div>
                        <p className="text-gray-400 mb-4">
                            The ultimate platform for mastering coding interviews and technical hiring.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'github', 'linkedin', 'facebook'].map((social) => (
                                <a key={social} href="#" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                        {social.charAt(0).toUpperCase()}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Product</h3>
                        <ul className="space-y-2">
                            {['Features', 'Solutions', 'Pricing', 'Changelog'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {['Blog', 'Guides', 'Documentation', 'Community'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {['About', 'Careers', 'Contact', 'Partners'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} LeetGuru. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;