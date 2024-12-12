import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex justify-between items-center py-3 rounded-3xl shadow-md text-3xl bg-primary-100">
      <Link to="/">
        <button className="aspect-squre p-3 rounded-2xl bg-primary-500 text-white">홈</button>
      </Link>
      <div className="font-bold text-primary-500">Luce Vita</div>
      <Link to="/mypage">
        <button className="aspect-squre p-3 rounded-2xl bg-primary-500 text-white">마이</button>
      </Link>
    </header>
  );
}
