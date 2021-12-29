import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendContactForm = (payload) =>
  api.post('mail/contact-form', payload);
