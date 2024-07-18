import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./(landing)/header";

const font = Inter({ subsets: ["latin"] });

type Props = React.ReactNode

export const metadata: Metadata = {
  title: "Buff",
  description: "Unleash your inner film buff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: Props;
}>) {
  return (
    <html lang="en">
      <title>Buff: The app for movie buff.</title>
      <ClerkProvider>
        <body className={font.className}>{children}</body>
      </ClerkProvider>
    </html>
  )
}
