import { Tag } from './Tag';
import { Travel } from '../../models/travel.model';

export function TravelCard({ travel }: { travel: Travel }) {
  return (
    <div className="flex flex-col gap-6 justify-center p-6 aspect-2/1 rounded-3xl shadow-md bg-white">
      {/* 제목, 기간 */}
      <div className="flex justify-between items-center">
        {/* 제목 */}
        <h2 className="border-b-2 border-slate-400 text-4xl font-bold text-gray-600">
          {travel.title}
        </h2>
        {/* 기간 */}
        <div className="text-lg text-gray-600">
          <span className="mr-2">2024</span>
          <span>{travel.startdate}</span>
          <span className="mx-1">-</span>
          <span>{travel.enddate}</span>
        </div>
      </div>

      {/* 국가, 장소, 숙소 */}
      <div className="flex flex-col">
        {/* 국가, 장소 */}
        <div>
          <div className="text-slate-400">국가, 장소</div>
          <div className="text-2xl font-bold text-gray-600">
            <span>{travel.country.countryname}</span>
            <span className="mr-2">,</span>
            <span>{travel.localname}</span>
          </div>
        </div>

        {/* 숙소 */}
        <div>
          <div className="text-slate-400">숙소</div>
          <div className="text-2xl font-bold text-gray-600">{travel.address}</div>
        </div>
      </div>

      {/* 잔액, 태그 */}
      <div className="flex justify-between items-center">
        {/* 잔액 */}
        <div className="flex justify-center items-center gap-2">
          <div className="text-slate-400">잔액</div>
          <div className="text-2xl font-bold text-gray-600">
            <span>₩</span>
            <span>{travel.budgettotal}</span>
          </div>
        </div>

        {/* 태그 */}
        <div className="flex gap-2">
          {travel.tags.map((tag) => (
            <Tag>{`#${tag}`}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
