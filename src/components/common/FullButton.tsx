import { PropsWithChildren } from 'react';
import { FullButtonProps } from '../../models/props.model';

/**
 * 너비를 전부 차지하는 버튼 컴포넌트입니다.
 */
const FullButton: React.FC<PropsWithChildren<FullButtonProps>> = ({
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

export default FullButton;