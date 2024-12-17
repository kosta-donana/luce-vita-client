import { Input } from '../common/Input';

type InputItemProps = {
  required?: boolean;
  margin?: string;
  type: string;
  name: string;
  title: string;
};

export const InputItem: React.FC<InputItemProps> = ({ required, type, margin, name, title }) => {
  return (
    <div className={margin}>
      <h1 className="my-2 text-primary-100 text-lg">{title}</h1>
      <Input
        required={required}
        type={type}
        name={name}
        bgColor="bg-white"
        borderColor="border-primary-200 focus:border-secondary-300"
      />
    </div>
  );
};
