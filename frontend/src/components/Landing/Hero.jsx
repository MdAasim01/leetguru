// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master <span className="text-primary">Coding Interviews</span> with AI-Powered Practice
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            LeetGuru helps developers prepare for technical interviews with curated DSA problems, real-time feedback, and progress tracking.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button 
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Practicing Free
            </motion.button>
            <motion.button 
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              For Companies
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-800"
                />
              ))}
            </div>
            <div>
              <p className="font-medium">Join <span className="text-primary">10,000+</span> developers</p>
              <p className="text-sm text-gray-400">Trusted by engineers at top tech companies</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="bg-gray-800 p-4 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div className="text-sm text-gray-400">Problem #142: Linked List Cycle</div>
                  <div className="badge badge-primary">Medium</div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Detect Cycle in a Linked List</h3>
                  <p className="text-gray-300">Given the head of a linked list, determine if the linked list has a cycle in it.</p>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  
  return false;
}`}
                  </pre>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="badge badge-success">Accepted</div>
                    <div className="badge">Runtime: 68ms</div>
                  </div>
                  <div className="text-sm text-gray-400">Success Rate: 92%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;