import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, MapPin, Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import aboutOffice from "@/assets/about-office.jpg";
import riderLifestyle from "@/assets/rider-lifestyle.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — RhingGo Emobility Kenya" },
      { name: "description", content: "Kenya's home of electric motorcycles and tuktuks. Backed by Hangzhou RhingGo Technology, based in Mombasa." },
      { property: "og:title", content: "About RhingGo Emobility Kenya" },
      { property: "og:description", content: "Driving a quiet revolution in Kenya — one electric tuktuk at a time." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionLabel icon="🌍" text="About RhingGo" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Driving Kenya's{" "}
                <span className="text-electric">Quiet Revolution</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RhingGo Emobility is the Kenyan face of Hangzhou RhingGo Technology Co. Ltd, a global leader in e-mobility solutions purpose-built for the African market.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our base in Mombasa, we are driving a quiet revolution — one electric tuktuk at a time. Kenya is moving. Fuel prices rise, roads get busier, and the air gets harder to breathe. We saw an opportunity to change that — not with expensive, imported luxury EVs, but with tough, practical, solar-powered machines that work as hard as the people who ride them.
              </p>
              <Link
                to="/contact"
                className="gradient-electric text-electric-foreground px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutOffice} alt="RhingGo showroom in Mombasa" loading="lazy" width={800} height={600} className="w-full h-auto" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Target size={24} />, title: "Our Mission", desc: "Make electric mobility accessible to every Kenyan who works on wheels. From tuktuk operators in Mombasa to boda boda riders in Nairobi." },
              { icon: <Globe size={24} />, title: "Global Backing", desc: "Backed by Hangzhou RhingGo Technology Co. Ltd — a global leader in e-mobility solutions with cutting-edge manufacturing." },
              { icon: <MapPin size={24} />, title: "Kenya First", desc: "Based in Mombasa with plans to expand to Nairobi. Built for African roads, priced for the everyday hustler." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-surface-elevated border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center mb-4 text-electric-foreground">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden">
                <img src={riderLifestyle} alt="RhingGo riders in Mombasa" loading="lazy" width={800} height={600} className="w-full h-auto" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <SectionLabel icon="💪" text="Our Movement" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                It's Our Movement.{" "}
                <span className="text-electric">It's Yours Too.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are not just selling vehicles — we are handing people a livelihood upgrade. We believe going electric shouldn't mean going broke. That's why we've made it possible to get on the road with as little as Ksh 38,000 as a deposit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our flagship RM-T300 Tuktuk isn't just a vehicle. It charges fast, runs on a swappable battery, and comes with a solar range extender that adds 30KM every day — for free, from the sun.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric">110KM</div>
                  <div className="text-xs text-muted-foreground">Range</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric">6,000W</div>
                  <div className="text-xs text-muted-foreground">Power</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric">Ksh 38K</div>
                  <div className="text-xs text-muted-foreground">Deposit</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
