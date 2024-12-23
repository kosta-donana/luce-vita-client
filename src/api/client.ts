import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

// 요청 인터셉터 설정
client.interceptors.request.use(
  (config) => {
    // 요청 보내기 전 수행할 작업
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
client.interceptors.response.use(
  (response) => {
    // 응답 받기 전 수행할 작업
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // 인증 에러 처러
    }
    return Promise.reject(error);
  }
);
