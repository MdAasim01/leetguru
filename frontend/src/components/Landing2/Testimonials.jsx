// src/components/Testimonials.jsx
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer at Google",
      content: "LeetGuru completely changed how I prepare for coding interviews. The company-specific problem sets and detailed explanations helped me land offers from three FAANG companies!",
      avatar: "AJ"
    },
    {
      name: "Sarah Kim",
      role: "Engineering Manager",
      content: "As a hiring manager, I use LeetGuru to create custom assessments for candidates. The private playlists and team analytics save us countless hours in the hiring process.",
      avatar: "SK"
    },
    {
      name: "Michael Chen",
      role: "Computer Science Student",
      content: "The AI-powered hints are genius! They give me just enough guidance to keep learning without spoiling the solution. My problem-solving skills improved dramatically in just two months.",
      avatar: "MC"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted by Developers Worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers and companies who have transformed their technical interview skills
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 md:p-12 relative">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
              {testimonials[currentIndex].avatar}
            </div>
            
            <svg className="absolute top-6 left-0 -translate-x-1/2 text-emerald-500 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-xl text-gray-300 mb-8">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div>
              <div className="text-lg font-bold text-white">{testimonials[currentIndex].name}</div>
              <div className="text-emerald-400">{testimonials[currentIndex].role}</div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-emerald-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;