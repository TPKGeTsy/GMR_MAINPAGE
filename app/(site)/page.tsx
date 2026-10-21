import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import HeroSlider from "@/components/HeroSlider";
import VideoStrip from "@/components/VideoStrip";
import { getLang, t } from "@/lib/i18n";
import { categories, clients, copy, heroSlides, highlightVideos, projectVideos } from "@/lib/site";

export default async function HomePage() {
  const lang = await getLang();

  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="py-4 sm:py-5 px-2 sm:px-4">
        <VideoStrip videos={highlightVideos} variant="wide" />
      </section>

      <section className="px-6 py-16 lg:py-24 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <h2 className="font-bold text-4xl sm:text-6xl lg:text-[80px] leading-none">GROUP MAKER</h2>
          <Image
            src="/images/logo-gmr-white.png"
            alt="Group Maker Robotic"
            width={326}
            height={91}
            className="h-12 sm:h-[72px] w-auto"
          />
        </div>
        <p className="mt-8 max-w-[1040px] mx-auto text-base lg:text-2xl leading-relaxed">{t(lang, copy.about)}</p>
      </section>

      <section className="px-4 sm:px-10 pb-16 grid gap-6 sm:gap-8 md:grid-cols-2 max-w-[1920px] mx-auto">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </section>

      <section className="px-6 py-16 lg:py-20 text-center">
        <h2 className="font-bold leading-none">
          <span className="text-brand-alt text-5xl sm:text-7xl lg:text-[96px]">WHY</span>{" "}
          <span className="text-3xl sm:text-5xl lg:text-[60px]">GROUP MAKER ROBOTIC ?</span>
        </h2>
        <p className="mt-8 max-w-[1660px] mx-auto text-base lg:text-2xl leading-relaxed">{t(lang, copy.why)}</p>
      </section>

      <section className="bg-ink-3 pt-14 lg:pt-20 text-center">
        <h2 className="px-6 font-bold text-brand-alt text-4xl sm:text-6xl lg:text-[96px] leading-tight">
          {t(lang, copy.provenTitle)}
        </h2>
        <p className="mt-4 px-6 text-base lg:text-2xl">{t(lang, copy.provenSub)}</p>
        <div className="mt-10 bg-ink-2 py-6 lg:py-10">
          <div className="max-w-[1920px] mx-auto">
            <VideoStrip videos={projectVideos} variant="cards" />
          </div>
        </div>
        <div className="h-10 lg:h-16" />
      </section>

      <section className="px-6 py-16 lg:py-20 text-center">
        <h2 className="font-semibold text-3xl lg:text-5xl">Trusted By</h2>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 max-w-[1270px] mx-auto">
          {clients.map((c) => (
            <div key={c} className="relative bg-white aspect-[2/1] rounded-sm">
              <Image src={`/images/clients/${c}.webp`} alt={c} fill sizes="200px" className="object-contain p-2 sm:p-3" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
