import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <section className="relative aspect-[1920/790] max-h-[70vh] w-full bg-[#d9d9d9] overflow-hidden">
        {category.image && <Image src={category.image} alt="" fill priority sizes="100vw" className="object-cover" />}
      </section>
      <section className="px-6 py-16 lg:py-24 text-center">
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-[80px]">GMR {category.name}</h1>
        {category.subtitle && <p className="mt-4 text-base lg:text-2xl text-white/80">{category.subtitle}</p>}
        <p className="mt-10 text-white/50">Product list — coming soon</p>
      </section>
    </>
  );
}
