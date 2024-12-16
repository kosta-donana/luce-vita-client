import { InputProps } from '../../models/props.model';

/**
 * 입력창 컴포넌트입니다.
 */
export const Input: React.FC<InputProps> = ({ type, name, bgColor, borderColor, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className={`px-5 py-3.5 ${bgColor} w-full text-gray-700 text-2xl font-light rounded-2xl border-2 ${borderColor}`}
      placeholder={placeholder}
    />
  );
};
