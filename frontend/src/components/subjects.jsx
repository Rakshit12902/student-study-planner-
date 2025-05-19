import React, { useEffect, useState } from 'react';
import { getSubjects, addSubject } from '../services/api';

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({ name: '', exam_date: '', priority: 3 });

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getSubjects();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubjects();
  }, []);

  const handleAddSubject = async () => {
    try {
      await addSubject(newSubject);
      const data = await getSubjects();
      setSubjects(data);
      setNewSubject({ name: '', exam_date: '', priority: 3 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>My Subjects</h2>
      <div>
        <input
          value={newSubject.name}
          onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
          placeholder="Subject name"
        />
        <input
          type="date"
          value={newSubject.exam_date}
          onChange={(e) => setNewSubject({...newSubject, exam_date: e.target.value})}
        />
        <button onClick={handleAddSubject}>Add Subject</button>
      </div>
      <ul>
        {subjects.map(subject => (
          <li key={subject.id}>
            {subject.name} - Exam: {new Date(subject.exam_date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}