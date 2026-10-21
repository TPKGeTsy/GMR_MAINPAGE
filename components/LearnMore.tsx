import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function LearnMore({ href, size = "md" }: { href: string; size?: "sm" | "md" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 bg-brand text-white hover:bg-brand-alt transition-colors ${
        size === "sm" ? "px-3 py-1 text-xs" : "px-5 py-1.5 text-sm"
      }`}
    >
      Learn More {size === "sm" && <ChevronRight className="w-3 h-3" />}
    </Link>
  );
}
