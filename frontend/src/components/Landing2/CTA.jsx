// src/components/CTA.jsx
import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to master coding interviews?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Join thousands of developers who have landed their dream jobs using LeetGuru.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 md:py-4 md:text-lg md:px-10"
              >
                Get Started for Free
              </a>
              <p className="mt-3 text-center md:text-left text-gray-400 text-sm">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;