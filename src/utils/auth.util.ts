import axios from 'axios';

type TokenStatus = 'reissued' | 'expired' | 'error';

const ajax = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/signup`,
  timeout: 5000,
  withCredentials: true,
});

async function requestToken(): Promise<TokenStatus> {
  try {
    const response = await ajax({
      url: '/verify',
      method: 'post',
    });

    if (response.data.success) {
      return 'reissued';
    } else if (response.status === 401) {
      return 'expired';
    } else {
      return 'error';
    }
  } catch {
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
    case 'expired':
    case 'error':
      return false;
  }
}
