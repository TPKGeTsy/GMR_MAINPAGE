import { cookies } from "next/headers";

export type Lang = "en" | "th";

export async function getLang(): Promise<Lang> {
  const c = (await cookies()).get("lang")?.value;
  return c === "th" ? "th" : "en";
}

// Pick the string for the current language — `t(lang, { en, th })`.
export function t(lang: Lang, s: { en: string; th: string }) {
  return s[lang];
}
