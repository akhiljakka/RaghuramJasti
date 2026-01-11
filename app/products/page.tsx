// app/products/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products - Premium Granite Slabs",
  description:
    "Explore our range of high-quality granite slabs including Black Galaxy, Steel Grey, Viscount White, Tan Brown, and Absolute Black granite.",
};

type Product = {
  name: string;
  description: string;
  features: string[];
  image: string;
};

const products: Product[] = [
  {
    name: "Steel Grey Granite",
    description:
      "Durable and consistent, perfect for large commercial projects. Its uniform appearance makes it a versatile choice for various applications.",
    features: ["Consistent grey color", "Commercial grade", "Low maintenance", "Ideal for flooring"],
    image: "/assets/gallery/SteelGray.jpg",
  },
  {
    name: "Black Pearl Granite",
    description:
      "Elegant waves of gray and white, ideal for modern interiors. This sophisticated granite brings a contemporary feel to any design.",
    features: ["White with grey veins", "Modern aesthetic", "Versatile application", "Elegant finish"],
    image: "/assets/gallery/BlackPearl.jpg",
  },
  {
    name: "Black Galaxy Granite",
    description:
      "Deep black with golden specks, ideal for countertops and kitchen surfaces. This stunning granite adds elegance and sophistication to any space.",
    features: ["Rich black background", "Golden/bronze speckles", "Perfect for countertops", "High durability"],
    image: "/assets/gallery/black-galaxy.png",
  },
  {
    name: "Steel Grey Dark Granite",
    description:
      "Rich blend of brown and black tones, great for kitchens and bathrooms. Warm and inviting with natural beauty.",
    features: ["Brown with black specks", "Warm appearance", "Kitchen favorite", "Easy to maintain"],
    image: "/assets/gallery/SteelGrayDark.jpg",
  }, 
  
  {
    name: "Absolute Black Granite",
    description:
      "Sleek and bold, highly polished for luxury finishes. The ultimate in elegance with its pure black color and high shine.",
    features: ["Pure black color", "High polish finish", "Luxury appeal", "Premium quality"],
    image: "/assets/gallery/AbsoluteBlack.jpg",
  },
  {
    name: "Viscount White Granite",
    description:
      "Elegant waves of gray and white, ideal for modern interiors. This sophisticated granite brings a contemporary feel to any design.",
    features: ["White with grey veins", "Modern aesthetic", "Versatile application", "Elegant finish"],
    image: "/assets/gallery/BlackPearl.jpg",
  },
{
  name: "River White Granite",
  description:
    "River White Granite from India features a crisp white base with soft gray veining and subtle, deep burgundy flecks. With its low variation and excellent durability, it’s a reliable choice for both indoor and outdoor applications—perfect for countertops, backsplashes, flooring, wall cladding, and more. Available in both slabs and tiles to suit any project size.",
  features: [
    "White base with soft gray veining",
    "Subtle burgundy mineral flecks",
    "Low variation for consistent look",
    "Durable for indoor & outdoor use",
    "Ideal for countertops & backsplashes",
    "Available in slabs and tiles"
  ],
  image: "/assets/gallery/RiverWhite.jpg"
},
{
    name: "Sapphire Blue Granite",
    description:
      "Sapphire Blue Granite is a striking mix of blues, grays, blacks, and warm brown tones. Quarried in India, it features a small, intricate pattern with visible flecks that adds depth and character. Known for its durability and versatility, it’s a great choice for both residential and commercial spaces.",
    features: [
    "Rich blend of blue, gray, black & brown tones",
    "Fine, intricate flecked pattern",
    "Durable and long-lasting surface",
    "Works well in modern or classic designs",
    "Ideal for countertops, flooring & wall cladding",
    "Available in slabs and tiles"
  ],
      image: "/assets/gallery/Sapphireblue.jpg",
  },
  {
    name: "Tan Brown Granite",
    description:
      "Rich blend of brown and black tones, great for kitchens and bathrooms. Warm and inviting with natural beauty.",
    features: ["Brown with black specks", "Warm appearance", "Kitchen favorite", "Easy to maintain"],
    image: "/assets/gallery/SteelGrayDark.jpg",
  },
];

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#2E2E2E] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore our premium collection of granite slabs, each meticulously cut and polished to perfection
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {products.map((product) => {
              const slug = toSlug(product.name);
              return (
                <Link href={`/products/${slug}`}>

                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-playfair text-3xl font-bold mb-4 text-[#2E2E2E]">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                      <div className="space-y-2 mb-6">
                        <p className="font-semibold text-[#2E2E2E] mb-2">Key Features:</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <span className="text-[#2E2E2E] mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full bg-[#2E2E2E] hover:bg-[#1a1a1a] text-white">
                        <Link href="/contact">
                          Request Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-[#2E2E2E]">
              Custom Solutions Available
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Looking for a specific size, finish, or type of granite? We offer custom cutting and
              finishing services to meet your exact specifications.
            </p>
            <Button asChild size="lg" className="bg-[#2E2E2E] hover:bg-[#1a1a1a] text-white text-lg px-8 h-14">
              <Link href="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Our Granite */}
      <section className="py-20 bg-[#2E2E2E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-12 text-center">Why Our Granite?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">100%</div>
                <p className="text-white/80">Quality Inspected</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">20+</div>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">1000+</div>
                <p className="text-white/80">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
