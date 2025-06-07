// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
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
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-gray-900/90 backdrop-blur-md py-2"
					: "bg-transparent py-4"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center">
						<span className="text-2xl font-bold">LG</span>
					</div>
					<h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
						LeetGuru
					</h1>
				</div>

				<div className="hidden md:flex space-x-8">
					<a
						href="#features"
						className="hover:text-primary transition-colors"
					>
						Features
					</a>
					<a
						href="#how-it-works"
						className="hover:text-primary transition-colors"
					>
						How It Works
					</a>
					<a
						href="#testimonials"
						className="hover:text-primary transition-colors"
					>
						Testimonials
					</a>
					<a
						href="#pricing"
						className="hover:text-primary transition-colors"
					>
						Pricing
					</a>
				</div>

				<div className="flex items-center space-x-4">
					<Link
						to="/login"
						className="btn btn-ghost hover:text-primary"
					>
						Sign In
					</Link>
					<motion.button
						className="btn bg-primary"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link to="/signup" className="text-white">
							Get Started
						</Link>
					</motion.button>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
