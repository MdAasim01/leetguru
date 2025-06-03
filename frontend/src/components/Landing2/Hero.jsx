// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center sm:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Master Coding Interviews</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 pt-2">
                    Like Never Before
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                  A modern platform for practicing coding challenges, tracking your progress, 
                  and preparing for technical interviews at top tech companies.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                    >
                      View problems
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full lg:w-full">
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-4/5 h-4/5 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center">
              <div className="absolute top-4 left-4 right-4 h-8 bg-gray-900 rounded-t-lg flex items-center">
                <div className="flex space-x-1 ml-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
              </div>
              
              <div className="w-full h-full p-6 overflow-hidden">
                <div className="text-emerald-400 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-cyan-300">function</span> <span className="text-yellow-200">twoSum</span>(nums, target) {'{'}
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="ml-4 text-cyan-300">const</span> map = <span className="text-cyan-300">new</span> Map();
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="ml-4 text-cyan-300">for</span> (<span className="text-cyan-300">let</span> i = 0; i &lt; nums.length; i++) {'{'}
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="ml-8 text-cyan-300">const</span> complement = target - nums[i];
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">5</span>
                    <span className="ml-8 text-cyan-300">if</span> (map.has(complement)) {'{'}
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">6</span>
                    <span className="ml-12 text-cyan-300">return</span> [map.get(complement), i];
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">7</span>
                    <span className="ml-8">{'}'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">8</span>
                    <span className="ml-8">map.set(nums[i], i);</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">9</span>
                    <span className="ml-4">{'}'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">10</span>
                    <span className="text-cyan-300">return</span> [];
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">11</span>
                    {'}'}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 h-10 bg-gray-900 rounded-b-lg flex items-center justify-between px-4">
                <div className="text-xs text-gray-500">JavaScript</div>
                <div className="flex space-x-2">
                  <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
                    Run Code
                  </button>
                  <button className="text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;