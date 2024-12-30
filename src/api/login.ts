import axios from 'axios';

export type LoginStatus = 'timeout' | 'succeed' | 'failed' | 'error';
export type LogoutStatus = 'timeout' | 'succeed' | 'expired' | 'error';

const ajax = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function requestLogin(email: string, password: string): Promise<LoginStatus> {
  try {
    const response = await ajax({
      url: '/login',
      method: 'post',
      data: {
        email: email,
        password: password,
      },
    });

    if (response.data.success) {
      return 'succeed';
    } else {
      console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
      return 'error';
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // 서버에서 2XX가 아닌 상태와 더불어 응답 결과를 받았을 때
      if (error.response) {
        return 'failed';
      }
      // 서버에서 응답 결과를 받지 못 했고, 타임아웃이 원인일 때
      if (error.code === 'ECONNABORTED') {
        return 'timeout';
      }

      console.log(
        'Axios 요청 과정에서 오류가 발생하였습니다. 더욱 자세한 정보를 얻으려면 API 명세를 확인해주세요.'
      );
      return 'error';
    }

    console.log('서버로의 요청에 실패하였습니다.');
    return 'error';
  }
}

export async function requestLogout(): Promise<LogoutStatus> {
  try {
    const response = await ajax({
      url: '/logout',
      method: 'post',
    });

    if (response.data.success) {
      return 'succeed';
    } else {
      console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
      return 'error';
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return 'expired';
      }
      if (error.code === 'ECONNABORTED') {
        return 'timeout';
      }

      console.log(
        'Axios 요청 과정에서 오류가 발생하였습니다. 더욱 자세한 정보를 얻으려면 API 명세를 확인해주세요.'
      );
      return 'error';
    }

    console.log('서버로의 요청에 실패하였습니다.');
    return 'error';
  }
}
