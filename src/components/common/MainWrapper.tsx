import { ReactNode } from 'react';

export function MainWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="relative p-6 bg-primary-100 min-h-full flex flex-col gap-5">{children}</main>
  );
}
