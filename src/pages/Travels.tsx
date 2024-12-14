import { Header } from '../components/home/Header';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';
import FloatingButton from '../components/common/FloatingButton';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function Travels() {
  return (
    <>
      <div className="p-6">
        <Header />

        <TravelCard />

        <TravelEmpty />
      </div>
      <FloatingButton
        iconInfo={{ id: faPlus, onClickHandler: () => {}, title: '새로운 여행 추가하기' }}
      />
    </>
  );
}
