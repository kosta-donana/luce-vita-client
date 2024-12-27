import { Travel } from '../../models/travel.model';
import { Tag } from './Tag';

type TravelCardProps = {
  travel: Travel;
  travelStatus: string;
  onClick: () => void;
};

export function TravelCard({ travel, onClick, travelStatus }: TravelCardProps) {
  return (
    <div
      className={`flex flex-col gap-6 justify-center p-6 aspect-2/1 rounded-3xl shadow-md cursor-pointer ${
        travelStatus === 'ongoing' && 'bg-white border-4 border-secondary-300'
      } ${travelStatus === 'upcoming' && 'bg-gray-50'} ${
        travelStatus === 'completed' && 'bg-gray-300'
      }`}
      onClick={onClick}
    >
      <div className={`${travelStatus === 'upcoming' && 'blur-[2px]'}`}>
        {/* 제목, 기간 */}
        <div className="flex justify-between items-center">
          {/* 제목 */}
          <h2 className="border-b-2 border-slate-400 text-4xl font-bold text-gray-600 overflow-hidden text-ellipsis">
            {travel.travel_title}
          </h2>
          {/* 기간 */}
          <div className="text-lg text-gray-600">
            <span className="mr-2 text-gray-500">{travel.start_date.slice(0, 4)}</span>
            <span>· </span>
            <span>{travel.start_date.slice(5).replace('-', '')}</span>
            <span className="mx-1">-</span>
            <span>{travel.end_date.slice(5).replace('-', '')}</span>
          </div>
        </div>

        {/* 국가, 장소, 숙소 */}
        <div className="flex flex-col">
          {/* 국가, 장소 */}
          <div>
            <div className="text-slate-400">국가, 장소</div>
            <div className="text-2xl font-bold text-gray-600">
              <span className="overflow-hidden text-ellipsis">{travel.country.country_name}</span>
              <span className="mr-2">,</span>
              <span className="overflow-hidden text-ellipsis">{travel.local_name}</span>
            </div>
          </div>

          {/* 숙소 */}
          <div>
            <div className="text-slate-400">숙소</div>
            <div className="overflow-hidden text-ellipsis text-2xl font-bold text-gray-600">
              {travel.address}
            </div>
          </div>
        </div>

        {/* 잔액, 태그 */}
        <div className="flex justify-between items-center">
          {/* 잔액 */}
          <div className="flex justify-center items-center gap-2">
            <div className="text-slate-400">잔액</div>
            <div className="text-2xl font-bold text-gray-600">
              <span className="mr-1">₩</span>
              <span>{travel.budget_total.toLocaleString()}</span>
            </div>
          </div>

          {/* 태그 */}
          <div className="flex gap-2">
            {travel.tags.map((tag, i) => (
              <Tag key={i}>{`#${tag}`}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
