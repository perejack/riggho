import { ArrowRight, CheckCircle, Shield, Wallet, FileCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const financiers = [
  {
    name: "Watu Credit",
    logo: "https://watu.com/wp-content/uploads/Watu_OpenGraph.jpg",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "emerald",
    downPayment: "75,000",
    dailyPayment: "816",
    requirements: ["1 Guarantor", "Original ID"],
    features: ["Same-day approval", "Low daily installments", "Asset financing specialist"],
    link: "https://watu.com"
  },
  {
    name: "Rafiki Microfinance",
    logo: "https://rafikibank.co.ke/wp-content/uploads/2019/10/Logo-FOr-Blue.png",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "blue",
    downPayment: "120,000",
    dailyPayment: "764",
    requirements: ["Bank statement", "ID & KRA PIN"],
    features: ["Competitive rates", "Flexible terms", "Business loan focus"],
    link: "https://rafikibank.co.ke"
  }
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

          {/* Financing Partners Comparison */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your <span className="text-electric">Financing Partner</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare our trusted financing partners and pick the plan that works best for your budget.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {financiers.map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl bg-surface border-2 border-border/50 overflow-hidden hover:border-electric/30 hover:shadow-2xl hover:shadow-electric/10 transition-all duration-500"
                >
                  {/* Header with Logo */}
                  <div className={`h-32 bg-gradient-to-br ${f.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={f.logo} 
                        alt={f.name}
                        className="max-h-20 max-w-[80%] object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-${f.accent}-500/20 text-${f.accent}-400 text-xs font-semibold`}>
                        <Shield size={12} />
                        Verified Partner
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Payment Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-background border border-border/50 text-center">
                        <Wallet size={20} className={`text-${f.accent}-500 mx-auto mb-2`} />
                        <div className="text-xs text-muted-foreground mb-1">Down Payment</div>
                        <div className="text-2xl font-black text-foreground">Ksh {f.downPayment}</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-electric/5 border border-electric/20 text-center">
                        <Calendar size={20} className="text-electric mx-auto mb-2" />
                        <div className="text-xs text-muted-foreground mb-1">Daily Payment</div>
                        <div className="text-2xl font-black text-foreground">Ksh {f.dailyPayment}</div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FileCheck size={16} className="text-electric" />
                        <h4 className="font-semibold text-foreground">Requirements</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {f.requirements.map((req) => (
                          <span 
                            key={req}
                            className="px-3 py-1.5 rounded-full bg-background border border-border/50 text-xs text-muted-foreground"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {f.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-electric flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={f.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn block w-full py-4 rounded-xl bg-gradient-to-r from-electric/20 to-electric/10 border border-electric/30 text-electric text-center font-semibold hover:from-electric hover:to-electric hover:text-electric-foreground transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Apply with {f.name.split(" ")[0]}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Note */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-surface border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-electric font-semibold">Note:</span> Daily payment amounts are estimates based on standard terms. 
                Actual rates may vary depending on your credit profile and chosen repayment period. 
                Contact our financing partners for personalized quotes.
              </p>
            </div>
          </AnimatedSection>

          {/* Benefits */}
          <div className="mt-24 grid md:grid-cols-3 gap-6">
            {[
              { title: "No Bank Hassles", desc: "Simple, direct financing. No long bank queues or complex paperwork." },
              { title: "Flexible Terms", desc: "12 to 24 month plans that fit your cash flow and business cycle." },
              { title: "Start Earning Immediately", desc: "Your vehicle pays for itself — save Ksh 40,000+ per month on fuel alone." },
            ].map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-surface border border-border/50 h-full">
                  <CheckCircle size={24} className="text-electric mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
