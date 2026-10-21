import Image from "next/image";
import type { Category } from "@/lib/site";
import LearnMore from "./LearnMore";

export default function CategoryCard({ category }: { category: Category }) {
  const dark = !!category.image;
  return (
    <div
      className={`relative aspect-[906/538] overflow-hidden rounded ${
        dark ? "bg-black text-white" : "bg-panel text-black"
      }`}
    >
      {category.image && (
        <Image src={category.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      )}
      <div className="relative p-5 sm:p-8 lg:p-10">
        <h3 className="font-bold leading-none text-4xl sm:text-5xl lg:text-[80px]">{category.name}</h3>
        {category.subtitle && <p className="mt-3 text-xs sm:text-sm lg:text-xl">{category.subtitle}</p>}
        <div className="mt-3 sm:mt-4">
          <LearnMore href={`/${category.slug}`} size="sm" />
        </div>
      </div>
    </div>
  );
}
