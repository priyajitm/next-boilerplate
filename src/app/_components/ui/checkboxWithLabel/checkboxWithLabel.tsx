import { Checkbox } from "../../shadcn/checkbox";

interface CheckboxWithLabelProps {
  label: string;
  id: string;
}

export const CheckboxWithLabel = ({ label, id }: CheckboxWithLabelProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
