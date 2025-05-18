// src/components/Dashboard/TodaysSchedule.jsx
import React from 'react';

const TodaysSchedule = () => {
  const sessions = [
    { 
      subject: 'Mathematics', 
      topic: 'Algebra & Calculus', 
      duration: '2 hours', 
      time: '9:00 AM - 11:00 AM',
      icon: 'book',
      color: 'indigo'
    },
    // Add other sessions...
  ];

  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="p-4 border-b">
        <h3 className="font-bold text-lg">Today's Study Plan</h3>
        <p className="text-gray-500 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <div key={index} className={`flex items-start p-3 border rounded-lg ${index === 0 ? 'border-indigo-100 bg-indigo-50' : ''}`}>
              <div className={`bg-${session.color}-100 p-2 rounded mr-4`}>
                <i className={`fas fa-${session.icon} text-${session.color}-600`}></i>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{session.subject}</h4>
                <p className="text-sm text-gray-500">{session.topic}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{session.duration}</p>
                <p className="text-sm text-gray-500">{session.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaysSchedule;
