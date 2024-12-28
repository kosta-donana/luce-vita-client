import axios from 'axios';

export type SignUpStatus = 'timeout' | 'verify' | 'exist' | 'error';
export type VerificationStatus = 'timeout' | 'verified' | 'failed' | 'error';

const ajax = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/signup`,
});

/**
 * 백엔드 API의 ~/signup/ 경로에 요청한 후, 응답 결과에 따라 회원가입의 진행 상태를 반환하는 함수입니다.
 * @returns {Promise<SignUpStatus>} 회원가입의 진행 상태를 나타내는 문자열의 Promise 객체
 */
export async function requestSignUp(email: string, password: string): Promise<SignUpStatus> {
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
      return 'verify';
    } else {
      console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
      return 'error';
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.error === 'Registered User') {
        return 'exist';
      }
      // TODO: 회원탈퇴 후 재가입 오류 처리하기

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
 * 백엔드 API의 ~/signup/verify 경로에 요청한 후, 응답 결과에 따라 인증 진행 상태를 반환하는 함수입니다.
 * @returns {Promise<VerificationStatus>} 인증 진행 상태를 나타내는 문자열의 Promise 객체
 */
export async function verifyEmail(
  email: string | undefined,
  token: string
): Promise<VerificationStatus> {
  try {
    const response = await ajax({
      url: '/verify',
      method: 'post',
      data: {
        email: email ?? null,
        token: token,
      },
    });

    if (response.data.success) {
      return 'verified';
    } else {
      console.log('서버에서 원인을 알 수 없는 오류가 발생하였습니다.');
      return 'error';
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.error === 'Verification Failed') {
        return 'failed';
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
