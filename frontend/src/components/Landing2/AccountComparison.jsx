// src/components/AccountComparison.jsx
import React from 'react';

const AccountComparison = () => {
  const features = [
    { name: 'Access to all problems', personal: true, company: true },
    { name: 'Company-specific problem sets', personal: false, company: true },
    { name: 'Create private playlists', personal: false, company: true },
    { name: 'Add/remove users from playlists', personal: false, company: true },
    { name: 'Detailed analytics dashboard', personal: true, company: true },
    { name: 'Team progress tracking', personal: false, company: true },
    { name: 'Priority support', personal: false, company: true },
    { name: 'Custom branding', personal: false, company: true },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/0 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            For Individuals and Teams
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're preparing for interviews or hiring top talent, we have the right plan for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Personal Account</h3>
                <p className="text-gray-400">For developers preparing for interviews</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <p className="text-gray-400">Get started with all core features</p>
            </div>
            
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium mb-8">
              Create Personal Account
            </button>
            
            <div className="space-y-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${feature.personal ? 'bg-emerald-500' : 'bg-gray-700'}`}>
                    {feature.personal && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={feature.personal ? 'text-gray-300' : 'text-gray-500'}>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8 relative">
            <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              POPULAR FOR TEAMS
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Company Account</h3>
                <p className="text-gray-400">For organizations hiring developers</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-3xl font-bold text-white mb-2">$99<span className="text-gray-400 text-lg">/user/month</span></div>
              <p className="text-gray-400">Everything in Personal, plus team features</p>
            </div>
            
            <button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 rounded-lg font-medium mb-8">
              Get Started for Teams
            </button>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${feature.company ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                    {feature.company && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={feature.company ? 'text-gray-300' : 'text-gray-500'}>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountComparison;