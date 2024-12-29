import { PropsWithChildren } from 'react';
import { FullWidthButtonProps } from '../../models/props.model';

/**
 * 너비를 전부 차지하는 버튼 컴포넌트입니다.
 */
export const FullWidthButton: React.FC<PropsWithChildren<FullWidthButtonProps>> = ({
  type,
  margins,
  bgColor,
  textColor,
  handleClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${
        margins ?? ''
      } p-5 ${bgColor} w-full ${textColor} text-3xl font-bold rounded-2xl flex justify-center items-center`.trim()}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
