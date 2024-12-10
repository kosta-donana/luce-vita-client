import { DateBlock } from '../components/home/DateBlock';

export function Home() {
  return (
    <div className="p-4">
      {/* 여행 일정 캘린더 */}
      <div className="flex flex-col justify-center p-6 gap-3 rounded-xl bg-gray-300">
        {/* 일정 상태 */}
        <div className="w-full text-left text-4xl font-bold text-gray-700">
          여행이 일주일 남았습니다 !
        </div>

        {/* 캘린더 */}
        <div className="w-full grid grid-rows-3 grid-cols-7 gap-2 px-2">
          <DateBlock>1</DateBlock>
          <DateBlock>2</DateBlock>
          <DateBlock>3</DateBlock>
          <DateBlock>4</DateBlock>
          <DateBlock>5</DateBlock>
          <DateBlock isTravel={true}>6</DateBlock>
          <DateBlock isTravel={true}>7</DateBlock>
          <DateBlock isTravel={true}>8</DateBlock>
          <DateBlock isTravel={true}>9</DateBlock>
          <DateBlock isTravel={true}>10</DateBlock>
          <DateBlock isTravel={true}>11</DateBlock>
          <DateBlock>12</DateBlock>
          <DateBlock>13</DateBlock>
          <DateBlock>14</DateBlock>
          <DateBlock>15</DateBlock>
          <DateBlock>16</DateBlock>
          <DateBlock>17</DateBlock>
          <DateBlock>18</DateBlock>
          <DateBlock>19</DateBlock>
          <DateBlock>20</DateBlock>
          <DateBlock>21</DateBlock>
        </div>

        {/* 예정일 계산 */}
        <div className="w-full text-right text-2xl font-bold text-gray-700">
          여행 예정일까지 6일 전
        </div>
      </div>

      {/* 여행의 제목 */}
      <div>여행의 제목</div>
    </div>
  );
}
