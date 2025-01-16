import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoryProvider} from "./storycontext";
import { GenreProvider } from "./genrecontext";
import Header from "@/components/header/Header";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tàng kinh các",
  description: "Web đọc truyện chữ ổn định",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoryProvider>
          <GenreProvider>
            {/* Bọc cả GenreProvider vào đây */}
            <Header />
            {children}
          </GenreProvider>
        </StoryProvider>
      </body>
    </html>
  );
}
