import api from './api';

export const getSubjects = async () => {
  try {
    const response = await api.get('/subjects');
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to fetch subjects';
  }
};

export const createSubject = async (subjectData) => {
  try {
    const response = await api.post('/subjects', subjectData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to create subject';
  }
};

export const updateSubject = async (id, subjectData) => {
  try {
    const response = await api.put(`/subjects/${id}`, subjectData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to update subject';
  }
};

export const deleteSubject = async (id) => {
  try {
    const response = await api.delete(`/subjects/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to delete subject';
  }
};