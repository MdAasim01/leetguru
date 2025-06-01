// src/components/HowItWorks.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('developers');
    const [currentStep, setCurrentStep] = useState(0);

    const developerSteps = [
        {
            title: "Sign Up & Set Goals",
            description: "Create your account and define your target companies and timeline.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
            ),
            color: "from-primary to-cyan-500"
        },
        {
            title: "Practice Daily",
            description: "Solve problems tailored to your skill level and track your progress.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "from-cyan-500 to-teal-500"
        },
        {
            title: "Build Your Profile",
            description: "Showcase your skills, solutions, and stats to potential employers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            color: "from-teal-500 to-green-500"
        },
        {
            title: "Land Your Dream Job",
            description: "Apply directly to companies or get discovered by recruiters.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "from-green-500 to-emerald-500"
        }
    ];

    const companySteps = [
        {
            title: "Register Company Account",
            description: "Create a verified company account with admin privileges.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Create Problem Sets",
            description: "Build custom problem sets with private test cases.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "Share Access Token",
            description: "Provide candidates with a secure token to access your problems.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            ),
            color: "from-blue-500 to-sky-500"
        },
        {
            title: "Evaluate Candidates",
            description: "Monitor solutions in real-time and review performance metrics.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "from-sky-500 to-cyan-500"
        }
    ];

    const steps = activeTab === 'developers' ? developerSteps : companySteps;

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    return (
        <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">
                        Process
                    </div>
                    <h2 className="text-4xl font-bold mb-4">How LeetGuru Works</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Whether you're a developer preparing for interviews or a company hiring top talent
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-800 rounded-full p-1 inline-flex">
                        <motion.button
                            className={`px-6 py-3 rounded-full transition-all ${activeTab === 'developers'
                                    ? 'bg-gradient-to-r from-primary to-cyan-500 text-gray-900 font-bold'
                                    : 'hover:bg-gray-700'
                                }`}
                            onClick={() => {
                                setActiveTab('developers');
                                setCurrentStep(0);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            For Developers
                        </motion.button>
                        <motion.button
                            className={`px-6 py-3 rounded-full transition-all ${activeTab === 'companies'
                                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-gray-900 font-bold'
                                    : 'hover:bg-gray-700'
                                }`}
                            onClick={() => {
                                setActiveTab('companies');
                                setCurrentStep(0);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            For Companies
                        </motion.button>
                    </div>
                </div>

                {/* Stepper */}
                <div className="max-w-4xl mx-auto">
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-700 rounded-full mb-16 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            animate={{
                                width: `${(currentStep + 1) / steps.length * 100}%`,
                                background: activeTab === 'developers'
                                    ? 'linear-gradient(to right, #14b8a6, #0ea5e9)'
                                    : 'linear-gradient(to right, #a855f7, #6366f1)'
                            }}
                            transition={{ duration: 0.8 }}
                        ></motion.div>

                        {/* Step Indicators */}
                        <div className="absolute inset-0 flex justify-between">
                            {steps.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer relative -top-3 ${index <= currentStep
                                            ? 'bg-gradient-to-br from-primary to-secondary text-gray-900 font-bold'
                                            : 'bg-gray-800 border border-gray-600'
                                        }`}
                                    onClick={() => setCurrentStep(index)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 relative overflow-hidden"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${steps[currentStep].color} rounded-full mix-blend-soft-light opacity-30 blur-3xl -z-10`}></div>

                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="text-primary mb-6 md:mb-0 md:mr-8">
                                        {steps[currentStep].icon}
                                    </div>

                                    <div className="text-center md:text-left">
                                        <div className="text-sm text-gray-400 mb-2">
                                            Step {currentStep + 1} of {steps.length}
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">
                                            {steps[currentStep].title}
                                        </h3>
                                        <p className="text-xl text-gray-300 max-w-xl">
                                            {steps[currentStep].description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <motion.button
                            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-gray-800 p-4 rounded-full shadow-lg"
                            onClick={prevStep}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <motion.button
                            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-gray-800 p-4 rounded-full shadow-lg"
                            onClick={nextStep}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Step Labels */}
                    <div className="grid grid-cols-4 gap-4 mt-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 rounded-xl cursor-pointer transition-all ${index === currentStep
                                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-primary shadow-lg'
                                        : 'bg-gray-800/50 hover:bg-gray-700/50'
                                    }`}
                                onClick={() => setCurrentStep(index)}
                                whileHover={{ y: -5 }}
                            >
                                <h4 className={`font-medium ${index === currentStep ? 'text-primary' : 'text-gray-400'
                                    }`}>
                                    {step.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;