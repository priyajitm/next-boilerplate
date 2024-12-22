interface OrDividerProps {
  label: string;
}

export const OrDivider = ({ label }: OrDividerProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="h-px w-full bg-border" data-testid="divider" />
      <span className="text-sm text-gray-500">{label}</span>
      <div className="h-px w-full bg-border" data-testid="divider" />
    </div>
  );
};
