export const env = process.env.NODE_ENV;

export const isDev = () => {
  if (env === 'development') return true;
  else return false;
};

export const apiUrl = () =>
  isDev()
    ? 'http://127.0.0.1/comlogik_api/v1/'
    : 'https://api.comlogikph.com/v1/';

export const postApiUrl = () =>
  isDev()
    ? 'http://127.0.0.1/comlogik_api/v1/'
    : 'https://api.comlogikph.com/v1/';
