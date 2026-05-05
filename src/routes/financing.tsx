import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import naviLogo from "@/assets/navi logo.png";

const partners = [
  { name: "Watu Credit", logo: "https://watu.com/wp-content/uploads/Watu_OpenGraph.jpg", link: "https://watu.com" },
  { name: "M-KOPA", logo: "https://techafricanews.com/wp-content/uploads/2024/09/MKOPA-PR.jpg", link: "https://m-kopa.com" },
  { name: "Navi", logo: naviLogo, link: "https://navi.com" },
  { name: "Rafiki Microfinance", logo: "https://rafikibank.co.ke/wp-content/uploads/2019/10/Logo-FOr-Blue.png", link: "https://rafikibank.co.ke" },
];

export default function FinancingPage() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="💰" text="Financing" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Own Your Electric Future{" "}
              <span className="text-electric">Today</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-16">
              We believe going electric shouldn't mean going broke. Flexible payment plans designed for the everyday hustler.
            </p>
          </AnimatedSection>

          {/* Financing Partners */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel icon="🤝" text="Financing Partners" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Trusted <span className="text-electric">Financing Partners</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We've teamed up with Kenya's leading asset financiers to make owning a Rhinggo Electric Tuktuk easier than ever.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.1}>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                    <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8 flex items-center justify-center p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">{partner.name}</h3>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
