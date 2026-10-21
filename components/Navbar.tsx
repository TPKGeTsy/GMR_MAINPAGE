import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { categories } from "@/lib/site";
import type { Lang } from "@/lib/i18n";
import LangToggle from "./LangToggle";
import NavLinks from "./NavLinks";

export default function Navbar({ lang }: { lang: Lang }) {
  const links = categories.map((c) => ({ href: `/${c.slug}`, label: c.name }));
  return (
    <nav className="bg-white text-black sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-24 h-16 lg:h-[81px] flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo-gmr-dark.png" alt="GMR" width={162} height={45} className="h-6 lg:h-7 w-auto" priority />
        </Link>
        <NavLinks links={links} className="hidden md:flex" />
        <div className="flex items-center gap-3 sm:gap-6">
          <LangToggle lang={lang} />
          <Link
            href="/contact"
            className="hidden sm:inline-flex whitespace-nowrap px-4 py-2 bg-brand text-white font-semibold hover:bg-brand-alt transition-colors"
          >
            Contact Us
          </Link>
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer p-2" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </summary>
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 py-2">
              <NavLinks links={[...links, { href: "/contact", label: "Contact Us" }]} className="flex flex-col" />
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
