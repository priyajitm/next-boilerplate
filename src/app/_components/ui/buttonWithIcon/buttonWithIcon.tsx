import React from "react";
import { Button } from "../../shadcn/button";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface ButtonWithIconProps {
  icon: React.ReactNode;
  label: string;
  variant?: ButtonVariant;
}

export const ButtonWithIcon = ({
  icon,
  label,
  variant = "default",
}: ButtonWithIconProps) => {
  return (
    <Button className="flex w-full items-center gap-2" variant={variant}>
      {icon}
      {label}
    </Button>
  );
};
