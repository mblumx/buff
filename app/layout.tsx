import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const font = Open_Sans({ subsets: ["latin"] });

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
      <title>Buff: The app for movie buffs.</title>
      <ClerkProvider>
        <body className={font.className}>{children}</body>
      </ClerkProvider>
    </html>
  )
}
