import axios from 'axios';

export type LoginStatus = 'succeed' | 'failed' | 'error';

const ajax = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/login`,
  timeout: 5000,
});

export async function requestLogin(email: string, password: string): Promise<LoginStatus> {
  try {
    const response = await ajax({
      url: '/',
      method: 'post',
      data: {
        email: email,
        password: password,
      },
    });

    if (response.data.success) {
      return 'succeed';
    } else {
      return 'failed';
    }
  } catch {
    return 'error';
  }
}
