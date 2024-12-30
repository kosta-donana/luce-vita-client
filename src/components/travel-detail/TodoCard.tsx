import { To, useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { formatToSimple } from '../../utils/format-date.util';

type TodoCardProps = {
  date: Date;
  route: To;
};

export const TodoCard: React.FC<PropsWithChildren<TodoCardProps>> = ({ date, route, children }) => {
  const navigate = useNavigate();

  return (
    <article
      className="my-2.5 px-5 py-2.5 bg-white text-neutral-700 text-xl rounded-3xl shadow-sm cursor-pointer"
      onClick={() => {
        navigate(route);
      }}
    >
      <h1 className="my-1.5 text-neutral-800 text-2xl font-medium">{formatToSimple(date)}</h1>
      {children}
    </article>
  );
};
