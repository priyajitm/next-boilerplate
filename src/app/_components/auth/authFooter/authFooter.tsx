import Link from "next/link";

interface AuthFooterProps {
  content: string;
  linkText: string;
  linkHref: string;
}

export const AuthFooter = ({
  content,
  linkText,
  linkHref,
}: AuthFooterProps) => {
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center gap-2 rounded-b-md border border-t-0 border-gray-200 bg-gray-100 p-4">
      <p className="text-sm text-gray-500">
        {content}
        <Link className="text-sm font-semibold" href={linkHref}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};
