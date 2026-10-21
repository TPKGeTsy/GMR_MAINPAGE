"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({
  links,
  className = "",
}: {
  links: { href: string; label: string }[];
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <div className={`${className} items-stretch gap-1 lg:gap-3`}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`px-4 py-2 text-[15px] lg:text-base transition-colors whitespace-nowrap ${
            pathname === l.href ? "bg-[#f0f0f0] font-medium" : "hover:bg-[#f4f4f6]"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
