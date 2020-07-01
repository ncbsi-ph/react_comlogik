export const isDev = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') return true;
  else return false;
};

export const apiUrl = () =>
  isDev() ? process.env.DEV_API_URL : process.env.PRODUCTION_API_URL;
