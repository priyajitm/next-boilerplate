interface OrDividerProps {
  label: string;
}

export const OrDivider = ({ label }: OrDividerProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="h-px w-full bg-gray-200" />
      <span className="text-sm text-gray-500">{label}</span>
      <div className="h-px w-full bg-gray-200" />
    </div>
  );
};
