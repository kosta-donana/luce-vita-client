import axios from 'axios';

type TokenStatus = 'timeout' | 'reissued' | 'expired' | 'error';

const ajax = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_VERCEL_API_BASE_URL}/signup/token`,
});

async function requestToken(): Promise<TokenStatus> {
  try {
    const response = await ajax({
      url: '/',
      method: 'post',
    });

    if (response.data.success) {
      return 'reissued';
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

/**
 * 서버에 토큰 재발급을 요청한 후, 응답 코드에 따라 인증에 대한 유효성 정보를 boolean 값으로 반환하는 함수이다.
 * @returns {boolean}
 */
export async function authenticate(): Promise<boolean> {
  const status: TokenStatus = await requestToken();
  switch (status) {
    case 'reissued':
      return true;
    case 'timeout':
    case 'expired':
    case 'error':
      return false;
  }
}
