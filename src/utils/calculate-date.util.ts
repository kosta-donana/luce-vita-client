// 주어진 날짜가 포함된 주의 시작 날짜 계산
export function getStartOfWeek(currentDate: Date): Date {
  const currentDay = currentDate.getDay();
  const startDateOfWeek = currentDate.getDate() - currentDay;
  return new Date(currentDate.setDate(startDateOfWeek));
}

// 시작 날짜(일요일)로 시작해서 numOfWeeks만큼(우리의 경우 3주) 주 생성
export function generateWeeks(startDate: Date, numOfWeeks: number): Date[][] {
  const [date, weeks]: [Date, Date[][]] = [startDate, []];
  for (let i = 0; i < numOfWeeks; i++) {
    const week: Date[] = [];
    for (let j = 0; j < 7; j++) {
      week.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

// 주어진 날짜가 시작일, 종료일 사이에 있는지 확인
export function isWithinRange(targetDate: Date, start: Date, end: Date): boolean {
  targetDate.setHours(9, 0, 0, 0);
  return start <= targetDate && targetDate <= end;
}
