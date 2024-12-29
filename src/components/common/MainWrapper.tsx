import { PropsWithChildren } from 'react';
import { MainWrapperProps } from '../../models/props.model';

export const MainWrapper: React.FC<PropsWithChildren<MainWrapperProps>> = ({
  position,
  paddings,
  bgColor,
  children,
}) => {
  return (
    <main className={`${position ?? ''} ${paddings} ${bgColor} min-h-full`.trim()}>{children}</main>
  );
};
