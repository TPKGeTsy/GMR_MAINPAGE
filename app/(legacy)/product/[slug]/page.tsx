import { notFound } from "next/navigation";
import ProductAntbotPage from "@/components/legacy/pages/ProductAntbotPage";
import ProductBitbotPage from "@/components/legacy/pages/ProductBitbotPage";
import ProductDendroPage from "@/components/legacy/pages/ProductDendroPage";
import ProductFolkliftPage from "@/components/legacy/pages/ProductFolkliftPage";
import ProductMobilerobotPage from "@/components/legacy/pages/ProductMobilerobotPage";
import ProductShiningPage from "@/components/legacy/pages/ProductShiningPage";
import ProductTugPage from "@/components/legacy/pages/ProductTugPage";

const pages = {
  antbot: ProductAntbotPage,
  bitbot: ProductBitbotPage,
  dendro: ProductDendroPage,
  folklift: ProductFolkliftPage,
  mobilerobot: ProductMobilerobotPage,
  shining: ProductShiningPage,
  tug: ProductTugPage,
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Page = pages[slug as keyof typeof pages];
  if (!Page) notFound();
  return <Page />;
}
