import axios from 'axios';

export type SignUpStatus = 'verify' | 'exist' | 'error';
export type VerificationStatus = 'verified' | 'failed' | 'error';

const ajax = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/signup`,
  timeout: 5000,
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
    } else if (response.data.error === 'Registered User') {
      return 'exist';
    } else {
      return 'error';
    }
  } catch {
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
    } else if (response.data.error === 'Verification Failed') {
      return 'failed';
    } else {
      return 'error';
    }
  } catch {
    return 'error';
  }
}
