type ResponseStatus = 'success' | 'fail'; // TODO: 상태코드로 변경하기

function requestToken(): ResponseStatus {
  // TODO: 동기적으로 토큰 요청하기

  return 'success';
}

/**
 * 서버에 토큰 재발급을 요청한 후, 응답 코드에 따라 인증에 대한 유효성 정보를 boolean 값으로 반환하는 함수이다.
 * @returns {boolean}
 */
export function authenticate(): boolean {
  switch (requestToken()) {
    case 'success':
      return true;
    case 'fail':
    default:
      return false;
  }
}
