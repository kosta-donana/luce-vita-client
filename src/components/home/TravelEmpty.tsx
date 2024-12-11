export function TravelEmpty() {
  return (
    <div className="flex flex-col gap-8 justify-center p-6 rounded-xl border-2 border-dashed border-gray-400 relative">
      <div className="absolute w-full text-xl text-center text-gray-500">
        <div className="">여행이 없어요</div>
        <div className="">새로운 여행을 등록해주세요</div>
      </div>
      {/* 헤더 ? */}
      <div className="flex justify-between items-center opacity-0">
        <h2 className="border-b-2 border-gray-300 text-4xl font-bold text-gray-600">여행의 제목</h2>
        <div className="text-gray-500">2024 1203 - 1209</div>
      </div>

      {/* 국가, 장소, 숙소 */}
      <div className="flex flex-col opacity-0">
        {/* 국가, 장소 */}
        <div className="">
          <div className="text-gray-400">국가, 장소</div>
          <div className="text-2xl font-bold text-gray-600">대한민국, 서울</div>
        </div>

        {/* 숙소 */}
        <div className="">
          <div className="text-gray-400">숙소</div>
          <div className="text-2xl font-bold text-gray-600">호서구내식당 런치타임 코지하우스</div>
        </div>
      </div>

      {/* 잔액, 태그 */}
      <div className="flex justify-between items-center opacity-0">
        {/* 잔액 */}
        <div className="flex justify-center items-center gap-2">
          <div className="text-gray-400">잔액</div>
          <div className="text-2xl font-bold text-gray-600">₩ 000,000</div>
        </div>

        {/* 태그 */}
        <div className="flex">
          <div className=""></div>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 rounded-lg text-white bg-gray-600">#태그1</div>
            <div className="px-3 py-1.5 rounded-lg text-white bg-gray-600">#태그2</div>
            <div className="px-3 py-1.5 rounded-lg text-white bg-gray-600">#태그3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
