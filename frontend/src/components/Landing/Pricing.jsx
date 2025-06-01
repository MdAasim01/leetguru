// src/components/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features, popular, delay }) => (
    <motion.div
        className={`bg-gray-800/50 backdrop-blur-lg rounded-2xl border p-8 relative overflow-hidden ${popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-gray-700'
            }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -10 }}
    >
        {popular && (
            <div className="absolute top-0 right-0 bg-primary text-gray-900 px-6 py-1 font-bold transform rotate-45 translate-x-8 -translate-y-1">
                POPULAR
            </div>
        )}

        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <div className="mb-8">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-400">/month</span>
        </div>

        <ul className="mb-8 space-y-4">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                </li>
            ))}
        </ul>

        <motion.button
            className={`btn w-full ${popular ? 'btn-primary' : 'btn-outline'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Get Started
        </motion.button>
    </motion.div>
);

const Pricing = () => {
    const plans = [
        {
            title: "Developer",
            price: "19",
            features: [
                "Access to all problem sets",
                "Daily streak tracking",
                "Progress analytics",
                "Basic company challenges",
                "Personal profile"
            ],
            popular: false,
            delay: 0.1
        },
        {
            title: "Pro Developer",
            price: "39",
            features: [
                "Everything in Developer",
                "Company-specific challenges",
                "Advanced analytics",
                "Mock interviews",
                "Priority problem solutions",
                "Resume builder"
            ],
            popular: true,
            delay: 0.2
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: [
                "Unlimited company accounts",
                "Custom problem creation",
                "Candidate monitoring",
                "Team management",
                "API access",
                "Dedicated support"
            ],
            popular: false,
            delay: 0.3
        }
    ];

    return (
        <section id="pricing" className="py-20 px-4 bg-gray-900/50">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">
                        Pricing
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Choose the plan that works best for you. All plans include a 14-day free trial.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>

                <motion.div
                    className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Interview Skills?</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Join thousands of developers who have landed jobs at top tech companies with LeetGuru
                    </p>
                    <motion.button
                        className="btn btn-lg bg-white text-gray-900 hover:bg-gray-100"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Free Trial
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;