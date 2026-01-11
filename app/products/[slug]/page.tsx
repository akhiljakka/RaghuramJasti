// app/products/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, findProductBySlug } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = findProductBySlug(params.slug);
  return {
    title: p ? `${p.name} - Premium Granite Slabs` : "Product not found",
    description: p?.description ?? "Premium quality granite slabs.",
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = findProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <main className="pt-20 container mx-auto px-4 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-extrabold">{product.name}</h1>
      {/* render your gallery/specs UI here */}
    </main>
  );
}
