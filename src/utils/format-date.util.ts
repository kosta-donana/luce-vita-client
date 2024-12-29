/**
 * "12월 29일"과 "1월 1일" 등과 같은 형식으로 날짜를 표현한 문자열을 반환하는 함수입니다.
 */
export function formatToSimple(date: Date): string {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

/**
 * "24/12/29"과 "25/01/01" 등과 같은 형식으로 날짜를 표현한 문자열을 반환하는 함수입니다.
 */
export function formatWithSlash(date: Date): string {
  return (
    (date.getFullYear() % 100).toString() +
    '/' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '/' +
    date.getDate().toString().padStart(2, '0')
  );
}

/**
 * "2024-12-29"과 "2025-01-01" 등과 같은 형식으로 날짜를 표현한 문자열을 반환하는 함수입니다.
 */
export function formatToString(date: Date): string {
  return (
    date.getFullYear().toString() +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0')
  );
}
