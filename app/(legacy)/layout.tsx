import type { Metadata } from "next";
import "../globals.css";
import "../legacy.css";
import LegacyInteractions from "@/components/legacy/LegacyInteractions";

export const metadata: Metadata = {
  title: "GroupMaker Robotic",
  description: "GMR Innovation Thinking",
};

// Pages are ported from the old groupmaker.co.th site; each page places the
// legacy Navbar/Footer itself because their position differs per page.
// The body classes come from legacy.css (Poppins + Noto Sans Thai).
// This is its own root layout so legacy.css never loads on the new (site) pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="en" like the old site: legacy.css has a `body :lang(th)` rule that
    // swaps the bundled Noto Sans Thai for a system font.
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      {/* data-aos-* = the old AOS.init({ duration: 1200, easing: "ease-in-out" }) */}
      <body className="__className_2dbf9b __className_3e51a9" data-aos-duration="1200" data-aos-easing="ease-in-out">
        {children}
        <LegacyInteractions />
      </body>
    </html>
  );
}
