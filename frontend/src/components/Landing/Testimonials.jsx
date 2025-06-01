// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Engineer @ Google",
            content: "LeetGuru helped me land my dream job at Google. The company-specific problems were incredibly accurate to what I encountered in my interviews.",
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Engineering Manager @ Meta",
            content: "We've used LeetGuru for our hiring process and it's been transformative. The ability to create custom problem sets and monitor candidates in real-time is invaluable.",
            avatar: "MC"
        },
        {
            name: "Alex Rodriguez",
            role: "Frontend Developer @ Stripe",
            content: "The streak system kept me motivated to practice daily. In 3 months, my success rate went from 40% to 85% and I received multiple offers!",
            avatar: "AR"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">
                        Testimonials
                    </div>
                    <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Join thousands of developers who have transformed their careers with LeetGuru
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold mr-4">
                                {testimonials[currentIndex].avatar}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                        <p className="text-lg italic">"{testimonials[currentIndex].content}"</p>
                    </div>

                    <div className="flex justify-center mt-8 space-x-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-600'}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>

                    <motion.button
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-gray-800 p-3 rounded-full shadow-lg"
                        onClick={prevTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <motion.button
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-gray-800 p-3 rounded-full shadow-lg"
                        onClick={nextTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;