import React from "react";
import { Button } from "../../shadcnComponents/button";

interface ButtonWithIconProps {
  icon: React.ReactNode;
  label: string;
}

export const ButtonWithIcon = ({ icon, label }: ButtonWithIconProps) => {
  return (
    <Button className="flex w-full items-center gap-2">
      {icon}
      {label}
    </Button>
  );
};
