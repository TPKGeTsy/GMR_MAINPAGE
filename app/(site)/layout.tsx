import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./site.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLang } from "@/lib/i18n";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Group Maker Robotic",
  description: "AGV/AMR robotics, RFID systems, Smart IoT and Structure & Lighting",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();
  return (
    <html lang={lang} className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar lang={lang} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
