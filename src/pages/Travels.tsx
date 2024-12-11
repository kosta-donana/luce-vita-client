import { Header } from '../components/home/Header';
import { TravelCard } from '../components/home/TravelCard';
import { TravelEmpty } from '../components/home/TravelEmpty';

export function Travels() {
  return (
    <div className="p-6">
      <Header />

      <TravelCard />

      <TravelEmpty />
    </div>
  );
}
