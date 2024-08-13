import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

export const getExpenses = () => {
  return axios.get(API_URL);
};

export const addExpense = (expense) => {
  return axios.post(API_URL, expense);
};

export const updateExpense = (id, expense) => {
  return axios.put(`${API_URL}/${id}`, expense);
};

export const deleteExpense = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
