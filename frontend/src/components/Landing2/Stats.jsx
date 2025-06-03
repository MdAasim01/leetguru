// src/components/Stats.jsx
import React from 'react';

const StatCard = ({ value, label, description, color }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
      <div className={`text-4xl font-bold mb-2 ${color}`}>{value}</div>
      <div className="text-lg font-bold text-white mb-1">{label}</div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${color}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/0 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Track Your Coding Journey
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive analytics to visualize your progress and identify areas for improvement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            value="142"
            label="Problems Solved"
            description="Top 15% of users"
            color="text-emerald-400"
          />
          <StatCard 
            value="87"
            label="Current Streak"
            description="Longest streak: 112 days"
            color="text-cyan-400"
          />
          <StatCard 
            value="92%"
            label="Acceptance Rate"
            description="Higher than platform average"
            color="text-yellow-400"
          />
          <StatCard 
            value="#243"
            label="Global Rank"
            description="Top 1% of all users"
            color="text-purple-400"
          />
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-12">
          <h3 className="text-lg font-bold text-white mb-6">Skill Distribution</h3>
          
          <div className="space-y-6">
            {[
              { name: 'Data Structures', percentage: 85, color: 'bg-emerald-500' },
              { name: 'Algorithms', percentage: 78, color: 'bg-cyan-500' },
              { name: 'Database', percentage: 65, color: 'bg-yellow-500' },
              { name: 'System Design', percentage: 52, color: 'bg-purple-500' },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.percentage}%</span>
                </div>
                <ProgressBar percentage={skill.percentage} color={skill.color} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-bold text-white mb-6">Activity Heatmap</h3>
          
          <div className="flex items-end justify-between">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col-reverse space-y-1 space-y-reverse mb-2">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-4 h-4 rounded-sm ${
                        i < (index % 3) + 4 
                          ? 'bg-emerald-500' 
                          : i < (index % 5) + 2
                            ? 'bg-emerald-500/40'
                            : 'bg-gray-700'
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{day}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <span>Less</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
              <div className="w-3 h-3 bg-emerald-500/40 rounded-sm"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;