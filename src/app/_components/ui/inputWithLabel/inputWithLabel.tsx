import { Input } from "@/app/_components/shadcn/input";
import { Label } from "@/app/_components/shadcn/label";

interface InputWithLabelProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
}

export const InputWithLabel = ({
  label,
  id,
  type,
  placeholder,
}: InputWithLabelProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
