import type { Metadata } from "next";
import { site } from "./data";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const description =
  "Computer Science (AI) graduate building deep learning systems for cybersecurity and healthcare — and the full-stack apps that ship them. Creator of RT-DeepNIDS.";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description,
  keywords: [
    "Sadia Mehrin Rahi", "AI Researcher", "Deep Learning", "Cybersecurity",
    "Machine Learning", "RT-DeepNIDS", "BUBT", "Bangladesh",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
