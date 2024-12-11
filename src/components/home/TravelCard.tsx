import { Tag } from './Tag';

export function TravelCard() {
  return (
    <div className="flex flex-col gap-8 justify-center p-6 aspect-2/1 rounded-xl bg-white">
      {/* 제목, 기간 */}
      <div className="flex justify-between items-center">
        {/* 제목 */}
        <h2 className="border-b-2 border-gray-300 text-4xl font-bold text-gray-600">여행의 제목</h2>
        {/* 기간 */}
        <div className="text-gray-500">2024 1203 - 1209</div>
      </div>

      {/* 국가, 장소, 숙소 */}
      <div className="flex flex-col">
        {/* 국가, 장소 */}
        <div>
          <div className="text-gray-400">국가, 장소</div>
          <div className="text-2xl font-bold text-gray-600">대한민국, 서울</div>
        </div>

        {/* 숙소 */}
        <div>
          <div className="text-gray-400">숙소</div>
          <div className="text-2xl font-bold text-gray-600">호서구내식당 런치타임 코지하우스</div>
        </div>
      </div>

      {/* 잔액, 태그 */}
      <div className="flex justify-between items-center">
        {/* 잔액 */}
        <div className="flex justify-center items-center gap-2">
          <div className="text-gray-400">잔액</div>
          <div className="text-2xl font-bold text-gray-600">₩ 000, 000</div>
        </div>

        {/* 태그 */}
        <div className="flex gap-2">
          <Tag>#태그1</Tag>
          <Tag>#태그2</Tag>
          <Tag>#태그3</Tag>
        </div>
      </div>
    </div>
  );
}
