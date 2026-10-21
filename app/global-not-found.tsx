import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Link from "next/link";
import "./(site)/site.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-brand-alt">404</h1>
          <p className="mt-3 text-white/70">Page not found</p>
          <Link href="/" className="mt-8 inline-block bg-brand px-5 py-2 hover:bg-brand-alt">
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
