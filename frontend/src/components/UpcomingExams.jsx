// src/components/Dashboard/UpcomingExams.jsx
import React from 'react';

const UpcomingExams = () => {
  const exams = [
    { name: 'Mathematics Final', date: 'June 15', daysLeft: 10, priority: 'high' },
    { name: 'Chemistry Midterm', date: 'June 22', daysLeft: 17, priority: 'medium' },
    // Add other exams...
  ];

  const getPriorityStyles = (priority) => {
    switch(priority) {
      case 'high':
        return { bg: 'red', icon: 'exclamation' };
      case 'medium':
        return { bg: 'yellow', icon: 'exclamation' };
      default:
        return { bg: 'green', icon: 'exclamation' };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-4">Upcoming Exams</h3>
      <div className="space-y-4">
        {exams.map((exam, index) => {
          const { bg, icon } = getPriorityStyles(exam.priority);
          return (
            <div key={index} className="flex items-center p-3 border rounded-lg">
              <div className={`bg-${bg}-100 p-3 rounded-full mr-4`}>
                <i className={`fas fa-${icon} text-${bg}-500`}></i>
              </div>
              <div>
                <h4 className="font-medium">{exam.name}</h4>
                <p className="text-sm text-gray-500">
                  {exam.date} ({exam.daysLeft} days left)
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingExams;
