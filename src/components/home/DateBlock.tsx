export function DateBlock({
  children,
  isTravel = false,
}: {
  children: string;
  isTravel?: boolean;
}) {
  return (
    <div
      className={`aspect-square flex justify-center items-center rounded-xl text-white text-3xl font-bold ${
        isTravel ? 'bg-secondary-400' : 'bg-gray-300'
      }`}
    >
      {children}
    </div>
  );
}
