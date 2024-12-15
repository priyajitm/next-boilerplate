import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Next Boilerplate - Your starting point for modern web applications",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <div className="text-4xl">Hello</div>;
}
