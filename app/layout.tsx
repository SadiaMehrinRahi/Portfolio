import type { Metadata } from "next";
import { site } from "./data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.heroLong,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.heroLong,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
