import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProviderComponent } from "@/lib/SessionProviderComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acadro",
  icons: "/images/logo.svg",
  description: "Your only educational platform!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderComponent>
        {children}
        </SessionProviderComponent>
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: "var(--color-surface)",
              color: "var(--color-primaryText)",
            },
          }}
        />
      </body>
    </html>
  );
}
