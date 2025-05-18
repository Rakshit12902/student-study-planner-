// src/components/Dashboard/StatsCards.jsx
import React from 'react';

const StatsCards = () => {
  const stats = [
    { title: 'Upcoming Exams', value: 3, icon: 'calendar-check', color: 'indigo' },
    { title: 'Hours This Week', value: '15.5', icon: 'clock', color: 'indigo' },
    { title: 'Completion Rate', value: '78%', icon: 'chart-pie', color: 'indigo' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
            <i className={`fas fa-${stat.icon} text-${stat.color}-500 text-3xl`}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
