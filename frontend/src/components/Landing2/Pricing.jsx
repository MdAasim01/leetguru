// src/components/Pricing.jsx
import React from 'react';

const PricingCard = ({ title, price, description, features, popular, color }) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border ${popular ? 'border-cyan-500/30' : 'border-gray-700'} p-8 relative`}>
      {popular && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-xl font-bold ${popular ? 'text-cyan-400' : 'text-white'}`}>{title}</h3>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
      
      <div className="mb-8">
        <div className="text-4xl font-bold text-white mb-1">{price}</div>
        <p className="text-gray-400">per month</p>
      </div>
      
      <button className={`w-full py-3 rounded-lg font-medium mb-8 ${
        popular 
          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:opacity-90'
          : 'bg-gray-700 text-white hover:bg-gray-600'
      }`}>
        Get Started
      </button>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 ${feature.included ? 'bg-emerald-500' : 'bg-gray-700'}`}>
              {feature.included && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Perfect for getting started",
      popular: false,
      features: [
        { text: "Access to all problems", included: true },
        { text: "Community discussions", included: true },
        { text: "Basic analytics", included: true },
        { text: "AI-powered hints (limited)", included: false },
        { text: "Company-specific problems", included: false },
        { text: "Premium articles", included: false },
        { text: "Priority support", included: false },
      ]
    },
    {
      title: "Pro",
      price: "$12",
      description: "For serious interview preparation",
      popular: true,
      features: [
        { text: "Everything in Free", included: true },
        { text: "Unlimited AI-powered hints", included: true },
        { text: "Company-specific problem sets", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Premium articles & solutions", included: true },
        { text: "Create public playlists", included: true },
        { text: "Priority support", included: false },
      ]
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For companies and teams",
      popular: false,
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Create private playlists", included: true },
        { text: "Team management", included: true },
        { text: "Team progress analytics", included: true },
        { text: "Custom assessments", included: true },
        { text: "Dedicated success manager", included: true },
        { text: "Priority 24/7 support", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your goals. All plans include access to our entire problem library.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          <h3 className="text-xl font-bold text-white mb-4">Not sure which plan is right for you?</h3>
          <p className="text-gray-400 mb-6">
            Contact our sales team to discuss your needs and get a personalized recommendation.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;