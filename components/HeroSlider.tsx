"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import LearnMore from "./LearnMore";

type Slide = { title: string; text: string; image: string; href: string };

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % slides.length);

  // Re-armed on every slide change so a manual click restarts the 6s timer.
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [i, slides.length]);

  return (
    <section className="relative aspect-[4/3] sm:aspect-[1920/977] max-h-[85vh] w-full overflow-hidden bg-black">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image src={s.image} alt="" fill priority={idx === 0} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
          <div className="absolute left-6 sm:left-[9%] bottom-[12%] max-w-[90%] sm:max-w-[40%]">
            <h1 className="whitespace-pre-line font-bold leading-[0.95] text-5xl sm:text-7xl lg:text-[128px]">
              {s.title}
            </h1>
            <p className="mt-4 italic text-sm sm:text-lg lg:text-[22px] leading-snug">{s.text}</p>
            <div className="mt-5">
              <LearnMore href={s.href} />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 sm:p-4 transition-colors"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${idx === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
