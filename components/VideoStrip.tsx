"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type Video = { image: string; url: string };

// Horizontal scroller of video thumbnails. `variant="wide"` = the strip under
// the hero; `"cards"` = the Proven Projects row with arrows on both sides.
export default function VideoStrip({ videos, variant }: { videos: Video[]; variant: "wide" | "cards" }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrow = "absolute top-1/2 -translate-y-1/2 z-10 p-2 transition-colors";
  const item =
    variant === "wide"
      ? "w-[85%] sm:w-[48%] aspect-[922/469]"
      : "w-[80%] sm:w-[31%] aspect-[16/9] rounded-[10px] overflow-hidden";

  return (
    <div className={`relative ${variant === "cards" ? "px-10 sm:px-16" : ""}`}>
      {variant === "cards" && (
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className={`${arrow} left-2 sm:left-4 hover:text-brand`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      <div ref={ref} className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {videos.map((v, idx) => {
          const thumb = (
            <>
              <Image src={v.image} alt="" fill sizes="(min-width: 640px) 50vw, 85vw" className="object-cover" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full border-4 border-white bg-black/30 p-3 sm:p-4 group-hover:bg-brand/80 transition-colors">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white" />
                </span>
              </span>
            </>
          );
          const cls = `group relative flex-shrink-0 snap-start bg-black ${item}`;
          return v.url ? (
            <a key={idx} href={v.url} target="_blank" rel="noreferrer" className={cls}>
              {thumb}
            </a>
          ) : (
            <div key={idx} className={cls}>
              {thumb}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Next"
        className={`${arrow} right-2 sm:right-4 ${
          variant === "wide" ? "bg-white/30 hover:bg-white/50" : "hover:text-brand"
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
