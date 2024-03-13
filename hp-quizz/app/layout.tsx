import type { Metadata } from "next";
import "./css/globals.css";

export const metadata: Metadata = {
  title: "Quizz Harry Potter",
  description: "Quizz sur le theme d'Harry Potter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
