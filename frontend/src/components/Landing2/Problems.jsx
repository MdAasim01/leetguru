// src/components/Problems.jsx
import React, { useState } from 'react';

const Problems = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Problems' },
    { id: 'arrays', name: 'Arrays' },
    { id: 'strings', name: 'Strings' },
    { id: 'trees', name: 'Trees' },
    { id: 'graphs', name: 'Graphs' },
    { id: 'dp', name: 'Dynamic Programming' },
  ];
  
  const difficulties = [
    { name: 'Easy', color: 'text-emerald-400' },
    { name: 'Medium', color: 'text-yellow-400' },
    { name: 'Hard', color: 'text-red-400' }
  ];
  
  // Sample problems data
  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 0, categories: ['arrays'], acceptance: '89%' },
    { id: 2, title: 'Add Two Numbers', difficulty: 1, categories: ['linked-lists'], acceptance: '75%' },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 1, categories: ['strings'], acceptance: '68%' },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 2, categories: ['arrays', 'binary-search'], acceptance: '42%' },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 1, categories: ['strings', 'dp'], acceptance: '58%' },
    { id: 6, title: 'Reverse Integer', difficulty: 0, categories: ['math'], acceptance: '92%' },
  ];
  
  const filteredProblems = activeCategory === 'all' 
    ? problems 
    : problems.filter(problem => problem.categories.includes(activeCategory));

  return (
    <section id='problems' className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Explore Our Problem Library
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            1000+ coding challenges categorized by difficulty, company, and topic
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-900/80 text-gray-400 text-sm font-medium px-6 py-3 border-b border-gray-700">
            <div className="col-span-1">ID</div>
            <div className="col-span-6">Title</div>
            <div className="col-span-3">Categories</div>
            <div className="col-span-1">Difficulty</div>
            <div className="col-span-1 text-right">Acceptance</div>
          </div>
          
          <div className="divide-y divide-gray-700/50">
            {filteredProblems.map((problem) => (
              <div key={problem.id} className="grid grid-cols-12 px-6 py-4 hover:bg-gray-800/30 transition-colors">
                <div className="col-span-1 text-gray-500">{problem.id}</div>
                <div className="col-span-6">
                  <a href="#" className="text-white hover:text-emerald-400 font-medium">{problem.title}</a>
                </div>
                <div className="col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {problem.categories.map((cat, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-1">
                  <span className={`${difficulties[problem.difficulty].color} font-medium`}>
                    {difficulties[problem.difficulty].name}
                  </span>
                </div>
                <div className="col-span-1 text-right text-gray-400">{problem.acceptance}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900/50 px-6 py-4 border-t border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-400">Showing {filteredProblems.length} of 1000+ problems</div>
            <button className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
              View All Problems
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">By Company</h3>
            <div className="space-y-3">
              {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix'].map((company, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-300">{company}</span>
                  <span className="text-emerald-400 text-sm">120+ problems</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full text-center text-sm text-emerald-400 hover:text-emerald-300">
              See all companies →
            </button>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">By Difficulty</h3>
            <div className="space-y-4">
              {difficulties.map((difficulty, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className={`${difficulty.color} font-medium`}>{difficulty.name}</span>
                    <span className="text-gray-400 text-sm">{['35%', '50%', '15%'][idx]}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        idx === 0 ? 'bg-emerald-500' : idx === 1 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} 
                      style={{ width: ['35%', '50%', '15%'][idx] }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">Daily Challenge</h3>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-medium">Maximum Product Subarray</h4>
                <span className="text-yellow-400 text-sm bg-yellow-400/10 px-2 py-1 rounded">Medium</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product.
              </p>
              <div className="flex justify-between">
                <span className="text-gray-500 text-xs">+50 XP</span>
                <span className="text-gray-500 text-xs">Completed by 42%</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Solve Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;