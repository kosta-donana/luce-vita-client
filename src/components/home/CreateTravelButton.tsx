import { Link } from 'react-router-dom';

export function CreateTravelButton() {
  return (
    <Link to="/travels/create">
      <button className="absolute right-0 bottom-0 p-6 aspect-square w-24 rounded-full text-5xl text-neutral-200 bg-primary-500">
        +
      </button>
    </Link>
  );
}
