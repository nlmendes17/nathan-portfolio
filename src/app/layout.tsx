import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Nathan Mendes",
  description: "Portfólio profissional de Nathan Mendes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-darkBg text-white antialiased">
        {children}
      </body>
    </html>
  );
}

