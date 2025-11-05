import type { Metadata } from "next";
import { Inter, Playfair_Display as PlayfairDisplay } from "next/font/google";
import "./globals.css";

import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { RootProvider } from "@/components/providers/root-provider";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Bible Timeline Companion",
  description:
    "Learn the key events and people of the Bible through an elegant timeline experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-background font-sans text-foreground`}
      >
        <RootProvider>
          <>
            <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-background">
              <SiteHeader />
              <main className="flex-1">{children}</main>
            </div>
            <ScrollToTopButton />
          </>
        </RootProvider>
      </body>
    </html>
  );
}
