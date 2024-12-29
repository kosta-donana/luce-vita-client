import { Input } from '../common';

type InputItemProps = {
  required?: boolean;
  margins?: string;
  type: string;
  name: string;
  placeholder?: string;
  title: string;
  disabled?: boolean;
};

export const InputItem: React.FC<InputItemProps> = ({
  required,
  margins,
  type,
  name,
  placeholder,
  title,
  disabled,
}) => {
  return (
    <div className={margins}>
      <h1 className="mt-2.5 mb-2 text-neutral-500 text-lg">{title}</h1>
      <Input
        required={required}
        type={type}
        name={name}
        bgColor="bg-white"
        borderColor="border-primary-300 focus:border-secondary-400"
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
