import axios from 'axios';

const axiosInstance = axios.create();


// Request interceptor
axiosInstance.interceptors.request.use(

  (config) => {
    // Check if the request method is not 'GET'
    if (config.method !== 'get') {
      // the 
      config.headers = config.headers ?? {};
      // Append additional payload to the request
      
      config.headers['User-Agent'] = navigator.userAgent;
      config.headers['Request-Date'] = new Date().toISOString();
      config.headers['System-ID'] = '00-01-00-01-2C-9C-C4-66-08-71-90-1F-13-FA'; 
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
