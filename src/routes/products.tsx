import { createFileRoute } from "@tanstack/react-router";
import { Zap, Sun, Battery, Gauge, Shield, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import tuktukProduct from "@/assets/tuktuk-product.jpg";
import motorcycleProduct from "@/assets/motorcycle-product.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Electric Models — RhingGo Emobility Kenya" },
      { name: "description", content: "Explore the RM-T300 Electric Tuktuk and RM-M300 Motorcycle. Solar-powered, swappable batteries, built for Kenya." },
      { property: "og:title", content: "RhingGo Electric Models" },
      { property: "og:description", content: "Solar-powered electric tuktuks and motorcycles built for African roads." },
    ],
  }),
  component: ProductsPage,
});

const tuktukSpecs = [
  { icon: <Zap size={18} />, label: "Motor", value: "6,000W" },
  { icon: <Battery size={18} />, label: "Range", value: "110KM" },
  { icon: <Sun size={18} />, label: "Solar Bonus", value: "+30KM/day" },
  { icon: <Gauge size={18} />, label: "Top Speed", value: "55 km/h" },
  { icon: <Shield size={18} />, label: "Battery", value: "Swappable" },
  { icon: <Users size={18} />, label: "Passengers", value: "3 + driver" },
];

const motorSpecs = [
  { icon: <Zap size={18} />, label: "Motor", value: "3,000W" },
  { icon: <Battery size={18} />, label: "Range", value: "80KM" },
  { icon: <Gauge size={18} />, label: "Top Speed", value: "70 km/h" },
  { icon: <Shield size={18} />, label: "Charging", value: "4 hours" },
];

function ProductsPage() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="⚡" text="Our Models" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Electric Vehicles <span className="text-electric">Built for Africa</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-16">
              Tough, practical, solar-powered machines designed for Kenya's roads and priced for real people.
            </p>
          </AnimatedSection>

          {/* Tuktuk */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden bg-surface">
                <img src={tuktukProduct} alt="RM-T300 Electric Tuktuk" loading="lazy" width={800} height={600} className="w-full h-auto" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="text-electric text-sm font-semibold">FLAGSHIP</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">RM-T300 Electric Tuktuk</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our flagship vehicle charges fast, runs on a swappable battery, and comes with a solar range extender that adds 30KM every day — for free, from the sun. No fuel stops. No breakdowns. Just clean, quiet, profitable transport.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {tuktukSpecs.map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-surface border border-border/50 flex items-center gap-3">
                    <div className="text-electric">{s.icon}</div>
                    <div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="text-sm font-semibold text-foreground">{s.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-electric">From Ksh 380,000</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/254700000000?text=I'm%20interested%20in%20the%20RM-T300%20Tuktuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-electric text-electric-foreground px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90"
                >
                  Inquire on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Motorcycle */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.15} className="md:order-2">
              <div className="rounded-2xl overflow-hidden bg-surface">
                <img src={motorcycleProduct} alt="RM-M300 Electric Motorcycle" loading="lazy" width={800} height={600} className="w-full h-auto" />
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:order-1">
              <span className="text-electric text-sm font-semibold">BODA BODA REVOLUTION</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">RM-M300 Electric Motorcycle</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Silent power for the boda boda revolution. Fast charging, zero emissions, low maintenance. Maximum hustle, minimum cost.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {motorSpecs.map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-surface border border-border/50 flex items-center gap-3">
                    <div className="text-electric">{s.icon}</div>
                    <div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="text-sm font-semibold text-foreground">{s.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-electric">From Ksh 180,000</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/254700000000?text=I'm%20interested%20in%20the%20RM-M300%20Motorcycle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-electric text-electric-foreground px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90"
                >
                  Inquire on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
