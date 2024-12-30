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
      } ${isToday ? 'text-secondary-600 bg-secondary-200' : 'text-white'}`}
    >
      {children}
    </div>
  );
}
