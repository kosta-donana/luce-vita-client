import { Input } from '../common/Input';

type InputItemProps = {
  type: string;
  margin?: string;
  name: string;
  title: string;
};

export const InputItem: React.FC<InputItemProps> = ({ type, margin, name, title }) => {
  return (
    <div className={margin}>
      <h1 className="my-2 text-primary-100 text-lg">{title}</h1>
      <Input
        type={type}
        name={name}
        bgColor="bg-white"
        borderColor="border-primary-200 focus:border-secondary-300"
      />
    </div>
  );
};
