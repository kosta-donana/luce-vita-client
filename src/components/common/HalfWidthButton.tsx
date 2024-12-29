import { forwardRef, PropsWithChildren } from 'react';
import { HalfWidthButtonProps } from '../../models/props.model';

/**
 * 너비를 절반 차지하는 버튼 컴포넌트입니다.
 */
export const HalfWidthButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<HalfWidthButtonProps>
>(({ type, margins, bgColor, textColor, handleClick, disabled, children }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`${
        margins ?? ''
      } p-5 ${bgColor} w-1/2 ${textColor} text-3xl font-bold rounded-2xl flex justify-center items-center`.trim()}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
