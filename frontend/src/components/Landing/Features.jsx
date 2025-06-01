// src/components/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay }) => (
    <motion.div
        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-6 hover:border-primary transition-all"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -10 }}
    >
        <div className="text-primary text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: "🧠",
            title: "Curated Problem Sets",
            description: "Hand-picked DSA problems categorized by difficulty, company, and topic to maximize your preparation efficiency.",
            delay: 0.1
        },
        {
            icon: "📊",
            title: "Progress Tracking",
            description: "Visualize your improvement with detailed stats on success rate, daily streaks, and skill progression.",
            delay: 0.2
        },
        {
            icon: "🏢",
            title: "Company Challenges",
            description: "Practice with real interview questions from top tech companies and see how you compare to others.",
            delay: 0.3
        },
        {
            icon: "🔒",
            title: "Secure Company Accounts",
            description: "Create private problem sets protected by tokens for conducting technical interviews.",
            delay: 0.4
        },
        {
            icon: "👁️",
            title: "Candidate Monitoring",
            description: "Watch candidates solve problems in real-time and evaluate their thought process.",
            delay: 0.5
        },
        {
            icon: "🎓",
            title: "Personalized Learning",
            description: "AI-powered recommendations based on your weak areas to accelerate your learning curve.",
            delay: 0.6
        }
    ];

    return (
        <section id="features" className="py-20 px-4">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">
                        Features
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Everything You Need to Ace Your Interviews</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        LeetGuru combines powerful practice tools with insightful analytics to help you land your dream job.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;