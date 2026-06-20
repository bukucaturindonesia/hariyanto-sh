import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Haryanto, S.H. | Advokat & Konsultan Hukum",
  description:
    "Profil profesional Haryanto, S.H., advokat dan konsultan hukum yang memberikan layanan konsultasi dan pendampingan hukum secara profesional dan berintegritas.",
  openGraph: {
    title: "Haryanto, S.H. | Advokat & Konsultan Hukum",
    description:
      "Profil profesional Haryanto, S.H., advokat dan konsultan hukum yang memberikan layanan konsultasi dan pendampingan hukum secara profesional dan berintegritas.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/haryanto.jpg",
        width: 1200,
        height: 1200,
        alt: "Haryanto, S.H.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
