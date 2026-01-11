import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Target, Award, Cog } from "lucide-react";

export const metadata = {
  title: "About Us - Haripriya Granites",
  description: "Learn about our 20+ years of experience in supplying high-quality granite slabs with cutting-edge machinery and traditional craftsmanship.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#2E2E2E] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Tradition meets innovation in every slab we deliver
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                For over 20 years, we've been dedicated to sourcing and supplying high-quality granite slabs.
                What began as a small, hands-on operation has steadily grown through hard work, strong relationships,
                and a commitment to quality. We've come a long way — and while we're proud of our progress, we know
                there's still more to achieve.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, we work from a cutting-edge facility where tradition meets innovation — ensuring every slab
                meets the standards our clients rely on.
              </p>
            </div>

            <Separator className="my-16" />

            <h2 className="font-playfair text-4xl font-bold text-[#2E2E2E] mb-12 text-center">
              Our Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 text-center border-none shadow-lg">
                <div className="w-16 h-16 bg-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-3 text-[#2E2E2E]">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Started as a small, hands-on operation with a passion for quality granite
                </p>
              </Card>

              <Card className="p-8 text-center border-none shadow-lg">
                <div className="w-16 h-16 bg-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-3 text-[#2E2E2E]">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Steady expansion through strong relationships and unwavering commitment to quality
                </p>
              </Card>

              <Card className="p-8 text-center border-none shadow-lg">
                <div className="w-16 h-16 bg-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-3 text-[#2E2E2E]">Today</h3>
                <p className="text-gray-600 leading-relaxed">
                  A cutting-edge facility combining tradition with modern innovation
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Cog className="h-16 w-16 text-[#2E2E2E] mx-auto mb-6" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                Advanced Machinery
              </h2>
              <p className="text-xl text-gray-600">
                Precision engineering for perfect results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 border-none shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-[#2E2E2E]">
                  Metro B-13 Pro by Bhagwati's
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A next-generation stone cutting machine engineered for precision, power, and efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2E2E2E] mr-2">•</span>
                    <span className="text-gray-600">Advanced automation through hydraulic systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2E2E2E] mr-2">•</span>
                    <span className="text-gray-600">Linear bearings for consistently accurate cuts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2E2E2E] mr-2">•</span>
                    <span className="text-gray-600">Produces uniformly thick slabs with high efficiency</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-none shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-[#2E2E2E]">
                  12-Head Line Polish Machine
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Industry-leading polishing technology by Bhagwati's for a flawless finish.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2E2E2E] mr-2">•</span>
                    <span className="text-gray-600">High-quality surface finish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2E2E2E] mr-2">•</span>
                    <span className="text-gray-600">Meets international market standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2E2E2E] mr-2">•</span>
                    <span className="text-gray-600">Every slab polished to perfection</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2E2E2E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              We believe that quality is not just about the product — it's about the process, the people,
              and the relationships we build. Every slab that leaves our facility represents our dedication
              to excellence and our commitment to your success.
            </p>
            <p className="text-lg text-white/70">
              While we're proud of how far we've come, we remain focused on continuous improvement
              and innovation, always striving to serve you better.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
