import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getNews = (id = 0) => {
  if (id) return api.get(`news/${id}`);
  return api.get(`news`);
};

export const getCareers = () => api.get('careers');

export const sendContactForm = (payload) =>
  api.post('mail/contact-form', payload);

export const sendCareerApplication = (payload) =>
  api.post('mail/career-application', payload);
