export function DateBlock({
  children,
  isTravel = false,
}: {
  children: string;
  isTravel?: boolean;
}) {
  return (
    <div
      className={`aspect-square flex justify-center items-center rounded-xl font-bold bg-gray-500 text-white text-3xl ${
        isTravel ? 'bg-secondary-400' : 'bg-slate-200'
      }`}
    >
      {children}
    </div>
  );
}
