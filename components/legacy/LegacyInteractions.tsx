"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, EffectCards } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

// Brings the static, generated legacy pages back to life:
//  - Swiper sliders, with the options recovered from the old site's JS bundle
//  - captions / progress bars that followed the active slide (old React state)
//  - AOS scroll animations (CSS from legacy.css, triggered by IntersectionObserver
//    so they also work inside the home page's scroll-snap container)

const trustedBy: SwiperOptions = {
  modules: [Autoplay],
  grabCursor: true,
  loop: true,
  autoplay: { delay: 1000, disableOnInteraction: false },
  breakpoints: {
    375: { slidesPerView: 3, spaceBetween: "2%" },
    640: { slidesPerView: 3, spaceBetween: "5%" },
    768: { slidesPerView: 4, spaceBetween: "5%" },
    1024: { slidesPerView: 6, spaceBetween: "5%" },
    1280: { slidesPerView: 6, spaceBetween: "5%" },
    1536: { slidesPerView: 6, spaceBetween: "7%" },
  },
};

const works: SwiperOptions = {
  modules: [Autoplay],
  grabCursor: true,
  loop: true,
  autoplay: { delay: 8000, disableOnInteraction: false },
  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: "10%" },
    648: { slidesPerView: 1, spaceBetween: "30%" },
    768: { slidesPerView: 2, spaceBetween: "30%" },
    1024: { slidesPerView: 2, spaceBetween: "3%" },
    1280: { slidesPerView: 3, spaceBetween: "30%" },
  },
};

const productHero: SwiperOptions = {
  modules: [Autoplay],
  slidesPerView: 1,
  autoplay: { delay: 10000, disableOnInteraction: false },
};

const hero: SwiperOptions = {
  modules: [Autoplay],
  spaceBetween: 40,
  slidesPerView: "auto",
  autoplay: { delay: 10000, disableOnInteraction: false },
};

const cards: SwiperOptions = {
  modules: [EffectCards],
  effect: "cards",
  grabCursor: true,
};

// Tell sliders apart by the classes the old components gave them.
function optionsFor(el: HTMLElement): SwiperOptions {
  const c = el.classList;
  if (c.contains("swiper-cards")) return cards;
  if (c.contains("mt-10")) return trustedBy;
  if (c.contains("sm:w-[500px]")) return works;
  if (c.contains("h-full")) return productHero;
  return hero;
}

const visibleClass = (child: Element) => !child.classList.contains("hidden");

// Sibling groups with one entry per slide, exactly one visible: these showed the
// active slide's caption in the old React components.
function linkedGroups(scope: Element, swiperEl: Element, count: number) {
  const groups: Element[] = [];
  scope.querySelectorAll("*").forEach((el) => {
    if (swiperEl.contains(el) || el.children.length !== count || count < 2) return;
    const kids = Array.from(el.children);
    if (kids.filter(visibleClass).length !== 1) return;
    if (!kids.some((k) => k.classList.contains("hidden"))) return;
    if (new Set(kids.map((k) => k.tagName)).size !== 1) return;
    groups.push(el);
  });
  return groups;
}

function initSwipers() {
  const instances: Swiper[] = [];
  document.querySelectorAll<HTMLElement>(".swiper").forEach((el) => {
    if (el.closest(".swiper") !== el) return;
    const wrapper = el.querySelector(":scope > .swiper-wrapper");
    const count = wrapper ? wrapper.children.length : 0;
    const scope = el.closest(".relative.w-full.h-full") ?? el.parentElement?.parentElement?.parentElement ?? el;
    const groups = linkedGroups(scope, el, count);
    const bars = Array.from(scope.querySelectorAll<HTMLElement>(".transition-all.duration-700[style*='width']"));
    const usesBlock = groups.map((g) => Array.from(g.children).some((k) => k.classList.contains("block")));

    const sync = (s: Swiper) => {
      const i = s.realIndex;
      groups.forEach((g, gi) => {
        Array.from(g.children).forEach((k, ki) => {
          k.classList.toggle("hidden", ki !== i);
          if (usesBlock[gi]) k.classList.toggle("block", ki === i);
        });
      });
      bars.forEach((b) => (b.style.width = `${((i + 1) / count) * 100}%`));
    };

    instances.push(new Swiper(el, { ...optionsFor(el), on: { init: sync, slideChange: sync } }));
  });
  return () => instances.forEach((s) => s.destroy(true, true));
}

function initAos() {
  const els = document.querySelectorAll<HTMLElement>("[data-aos]");
  els.forEach((el) => el.classList.add("aos-init"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("aos-animate");
        // Like AOS (once: false, mirror: false): replay only when the element
        // drops back below the viewport.
        else if (e.rootBounds && e.boundingClientRect.top > e.rootBounds.bottom)
          e.target.classList.remove("aos-animate");
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

export default function LegacyInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const stopSwipers = initSwipers();
    const stopAos = initAos();
    return () => {
      stopSwipers();
      stopAos();
    };
  }, [pathname]);

  return null;
}
