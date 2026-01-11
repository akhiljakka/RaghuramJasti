import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CircleCheck as CheckCircle2, Factory, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E2E2E] via-[#3a3a3a] to-[#1a1a1a]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precision. Power. Perfection.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Supplying high-quality granite slabs for over 20 years with cutting-edge technology and craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2E2E2E] hover:bg-white/90 text-lg px-8 h-14">
              <Link href="/products">
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-[#2E2E2E] hover:bg-white/90 text-lg px-8 h-14">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3 text-[#2E2E2E]">20+ Years</h3>
              <p className="text-gray-600 leading-relaxed">
                Over two decades of experience in sourcing and supplying premium granite slabs
              </p>
            </Card>

            <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3 text-[#2E2E2E]">Advanced Machinery</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipped with Metro B-13 Pro cutting machine and 12-head line polish machine
              </p>
            </Card>

            <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3 text-[#2E2E2E]">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Every slab meets the highest standards for domestic and international markets
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[#2E2E2E]">
              Why Choose Premium Granite?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Advanced cutting technology for precision",
                "High-quality surface polish finish",
                "Consistently accurate slab thickness",
                "Extensive product variety",
                "Domestic and international supply",
                "Quality meets tradition and innovation",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-[#2E2E2E] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2E2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation or request a quote for your next project
          </p>
          <Button asChild size="lg" className="bg-white text-[#2E2E2E] hover:bg-white/90 text-lg px-8 h-14">
            <Link href="/contact">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
