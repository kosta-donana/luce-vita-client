import { PropsWithChildren } from 'react';
import { FullWidthButtonProps } from '../../models/props.model';

/**
 * 너비를 전부 차지하는 버튼 컴포넌트입니다.
 */
export const FullWidthButton: React.FC<PropsWithChildren<FullWidthButtonProps>> = ({
  type,
  margin,
  bgColor,
  textColor,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${
        margin ?? ''
      } p-5 ${bgColor} w-full ${textColor} text-3xl font-bold rounded-2xl`.trim()}
    >
      {children}
    </button>
  );
};
