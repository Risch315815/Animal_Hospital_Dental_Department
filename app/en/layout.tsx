import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations | Medical Visualization",
  description: "Illustration portfolio for the medical visualization seminar.",
};

export default function EnglishHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
