export function formatToSimple(date: Date): string {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}
