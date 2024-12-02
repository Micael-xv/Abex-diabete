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

  // Interceptor para a API principal
  api.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  // Interceptor para a API Flask
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
