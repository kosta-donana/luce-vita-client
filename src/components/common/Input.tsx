import { forwardRef } from 'react';
import { InputProps } from '../../models/props.model';

/**
 * 입력란 컴포넌트입니다.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ required, type, name, bgColor, borderColor, placeholder }, ref) => {
    return (
      <input
        ref={ref}
        required={required}
        type={type}
        name={name}
        className={`px-5 py-3.5 ${bgColor} w-full text-gray-700 text-2xl rounded-2xl border-2 ${borderColor}`}
        placeholder={placeholder}
      />
    );
  }
);
