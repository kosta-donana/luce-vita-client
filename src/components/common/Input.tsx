import { forwardRef } from 'react';
import { InputProps } from '../../models/props.model';

/**
 * 입력란 컴포넌트입니다.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ required, margins, type, name, bgColor, borderColor, placeholder, disabled }, ref) => {
    return (
      <input
        required={required}
        ref={ref}
        type={type}
        name={name}
        className={`${
          margins ?? ''
        } px-5 py-3.5 ${bgColor} w-full text-gray-700 text-2xl rounded-2xl border-2 ${borderColor}`.trim()}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  }
);
