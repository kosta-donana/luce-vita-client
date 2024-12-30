export function DateBlock({
  children,
  isTravel,
  isToday = false,
}: {
  children: string;
  isTravel: boolean;
  isToday: boolean;
}) {
  return (
    <div
      className={`aspect-square flex justify-center items-center rounded-xl text-3xl font-bold ${
        isTravel ? 'bg-secondary-400' : 'bg-gray-300'
      } ${isToday ? 'bg-white text-secondary-400' : 'text-white'}`}
    >
      {children}
    </div>
  );
}
