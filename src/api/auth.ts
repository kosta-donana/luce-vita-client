// 참고 예시 코드입니다 지우고 다시 작성하셔도 됩니다
// import { client } from './client';

// interface LoginRequest {
//   email: string;
//   password: string;
// }

// interface User {
//   id: string;
//   email: string;
//   name: string;
// }

// export const authApi = {
//   login: async (data: LoginRequest) => {
//     const response = await client.post<{ user: User }>('/auth/login', data);
//     return response.data;
//   },

//   logout: async () => {
//     const response = await client.post('/auth/logout');
//     return response.data;
//   },

//   getMe: async () => {
//     const response = await client.get<{ user: User }>('/auth/me');
//     return response.data;
//   },
// };
