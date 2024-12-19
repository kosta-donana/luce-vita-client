import { PropsWithChildren } from 'react';
import { HalfWidthButtonProps } from '../../models/props.model';

/**
 * 너비를 절반 차지하는 버튼 컴포넌트입니다.
 */
export const HalfWidthButton: React.FC<PropsWithChildren<HalfWidthButtonProps>> = ({
  type,
  margin,
  bgColor,
  textColor,
  handleClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${
        margin ?? ''
      } p-5 ${bgColor} w-1/2 ${textColor} text-3xl font-bold rounded-2xl flex justify-center items-center`.trim()}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
