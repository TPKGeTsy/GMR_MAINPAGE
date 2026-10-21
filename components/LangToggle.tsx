"use client";

import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/i18n";

export default function LangToggle({ lang }: { lang: Lang }) {
  const router = useRouter();
  const next = lang === "en" ? "th" : "en";
  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = `lang=${next}; path=/; max-age=31536000`;
        router.refresh();
      }}
      className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
    >
      <Globe className="w-6 h-6" strokeWidth={1.25} />
      {lang === "en" ? "English" : "ภาษาไทย"}
    </button>
  );
}
