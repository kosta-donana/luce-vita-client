export function DateBlock({
  children,
  isTravel = false,
}: {
  children: string;
  isTravel?: boolean;
}) {
  return (
    <div
      className={`aspect-square flex justify-center items-center rounded-xl bg-gray-500 text-white text-3xl ${
        isTravel ? 'bg-secondary-300' : 'bg-gray-500'
      }`}
    >
      {children}
    </div>
  );
}
