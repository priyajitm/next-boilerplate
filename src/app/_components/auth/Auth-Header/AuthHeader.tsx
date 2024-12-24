interface AuthHeaderProps {
  title: string;
  description: string;
}

export const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};
