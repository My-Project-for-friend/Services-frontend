import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthLayout from "@/components/layout/AuthLayout";
import MainLayout from "@/components/layout/MainLayout";
import { Providers } from "@/redux/Providers";
import { ThemeProvider } from "@/components/theme-provider";
import ToastProvider from "@/components/ToastProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthPage = (children as any).type?.isAuth;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider>
              {isAuthPage ? (
                <AuthLayout>{children}</AuthLayout>
              ) : (
                <MainLayout>{children}</MainLayout>
              )}
            </ToastProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
