import axios from "axios";

export default defineNuxtPlugin(() => {
  const domain = 'http://localhost:3333/'; // API principal
  const flaskApi = 'http://127.0.0.1:8000/'; // API Flask

  let api = axios.create({
    baseURL: domain,
    headers: {
      common: {
        Authorization: `Bearer`
      }
    }
  });

  let aiApi = axios.create({
    baseURL: flaskApi,
  });

  api.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  aiApi.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  return {
    provide: {
      api,      // API principal
      aiApi,    // API Flask
    }
  };
});
