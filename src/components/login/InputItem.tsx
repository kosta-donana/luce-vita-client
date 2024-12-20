import { forwardRef } from 'react';
import { Input } from '../common/Input';

type InputItemProps = {
  required?: boolean;
  type: string;
  name: string;
  title: string;
};

export const InputItem = forwardRef<HTMLInputElement, InputItemProps>(
  ({ required, type, name, title }, ref) => {
    let placeholder: string | undefined;

    if (type === 'email') {
      placeholder = 'luce@vita.travel';
    }

    return (
      <div className="mt-6">
        <h1 className="my-2 text-gray-600">{title}</h1>
        <Input
          ref={ref}
          required={required}
          type={type}
          name={name}
          bgColor="bg-neutral-100 focus:bg-white"
          borderColor="border-neutral-600 focus:border-gray-700"
          placeholder={placeholder}
        />
      </div>
    );
  }
);
