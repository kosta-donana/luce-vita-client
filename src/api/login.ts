import axios from 'axios';

export type LoginStatus = 'succeed' | 'failed' | 'error';

const ajax = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/login`,
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
      return 'error';
    }
  } catch (error) {
    return axios.isAxiosError(error) ? 'failed' : 'error';
  }
}
