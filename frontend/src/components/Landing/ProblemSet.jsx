// src/components/ProblemSets.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProblemSets = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const problems = [
        {
            id: 1,
            title: "Reverse Linked List",
            description: "Reverse a singly linked list without using extra space.",
            difficulty: "easy",
            topics: ["Linked List", "Pointers"],
            companies: ["Google", "Microsoft", "Amazon"],
            solved: 85
        },
        {
            id: 2,
            title: "Two Sum",
            description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
            difficulty: "easy",
            topics: ["Array", "Hash Table"],
            companies: ["Facebook", "Apple", "Uber"],
            solved: 92
        },
        {
            id: 3,
            title: "Longest Substring Without Repeating Characters",
            description: "Find the length of the longest substring without repeating characters.",
            difficulty: "medium",
            topics: ["String", "Sliding Window"],
            companies: ["Amazon", "Bloomberg", "Adobe"],
            solved: 78
        },
        {
            id: 4,
            title: "Median of Two Sorted Arrays",
            description: "Find the median of the two sorted arrays with O(log(m+n)) time complexity.",
            difficulty: "hard",
            topics: ["Array", "Binary Search"],
            companies: ["Google", "Microsoft", "Apple"],
            solved: 42
        },
        {
            id: 5,
            title: "Container With Most Water",
            description: "Find two lines that together with the x-axis form a container that contains the most water.",
            difficulty: "medium",
            topics: ["Array", "Two Pointers"],
            companies: ["Facebook", "Amazon", "Goldman Sachs"],
            solved: 75
        },
        {
            id: 6,
            title: "Merge k Sorted Lists",
            description: "Merge k sorted linked lists and return it as one sorted list.",
            difficulty: "hard",
            topics: ["Linked List", "Heap"],
            companies: ["Amazon", "Microsoft", "Uber"],
            solved: 68
        }
    ];

    const difficultyColors = {
        easy: "bg-green-500/20 text-green-500",
        medium: "bg-yellow-500/20 text-yellow-500",
        hard: "bg-red-500/20 text-red-500"
    };

    const filteredProblems = activeFilter === 'all'
        ? problems
        : problems.filter(problem =>
            problem.difficulty === activeFilter ||
            problem.topics.includes(activeFilter) ||
            problem.companies.includes(activeFilter)
        );

    return (
        <section id="problems" className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">
                        Problem Sets
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Master Our Curated Challenges</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore problems by difficulty, company, or topic to target your preparation
                    </p>
                </motion.div>

                {/* Filter Section */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <button
                        className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'all'
                                ? 'bg-primary text-gray-900 font-bold'
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Problems
                    </button>

                    <button
                        className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'easy'
                                ? 'bg-green-500/20 text-green-500 border border-green-500 font-bold'
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveFilter('easy')}
                    >
                        Easy
                    </button>

                    <button
                        className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'medium'
                                ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500 font-bold'
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveFilter('medium')}
                    >
                        Medium
                    </button>

                    <button
                        className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'hard'
                                ? 'bg-red-500/20 text-red-500 border border-red-500 font-bold'
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveFilter('hard')}
                    >
                        Hard
                    </button>

                    <button
                        className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'Google'
                                ? 'bg-blue-500/20 text-blue-500 border border-blue-500 font-bold'
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveFilter('Google')}
                    >
                        Google
                    </button>

                    <button
                        className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'Amazon'
                                ? 'bg-amber-500/20 text-amber-500 border border-amber-500 font-bold'
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveFilter('Amazon')}
                    >
                        Amazon
                    </button>
                </motion.div>

                {/* Problem Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProblems.map((problem, index) => (
                        <motion.div
                            key={problem.id}
                            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                            whileHover={{
                                y: -10,
                                borderColor: problem.difficulty === 'easy' ? '#10b981' :
                                    problem.difficulty === 'medium' ? '#eab308' : '#ef4444'
                            }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{problem.title}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${difficultyColors[problem.difficulty]}`}>
                                        {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                                    </span>
                                </div>

                                <p className="text-gray-300 mb-6">{problem.description}</p>

                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {problem.topics.map((topic, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {problem.companies.map((company, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center"
                                            >
                                                <span className="mr-2">🏢</span> {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-3">
                                            <div
                                                className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                                                style={{ width: `${problem.solved}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-400">{problem.solved}%</span>
                                    </div>

                                    <motion.button
                                        className="text-sm font-medium px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Solve Challenge
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <motion.button
                        className="btn btn-lg bg-gradient-to-r from-primary to-secondary text-gray-900 font-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore All Problems
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSets;