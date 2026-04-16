import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  { num: "01", title: "Pay Deposit", desc: "Start with as little as Ksh 38,000 to secure your vehicle." },
  { num: "02", title: "Vehicle Delivery", desc: "We prepare and deliver your electric vehicle to your location." },
  { num: "03", title: "Payment Plan", desc: "Spread remaining balance over flexible monthly instalments." },
  { num: "04", title: "Start Earning", desc: "Hit the road and start saving Ksh 40,000+ per month on fuel." },
];

export default function FinancingPage() {
  const [deposit, setDeposit] = useState(38000);
  const [vehicle, setVehicle] = useState<"tuktuk" | "motorcycle">("tuktuk");
  const vehiclePrice = vehicle === "tuktuk" ? 380000 : 180000;
  const remaining = Math.max(0, vehiclePrice - deposit);
  const monthly12 = Math.ceil(remaining / 12);
  const monthly18 = Math.ceil(remaining / 18);
  const monthly24 = Math.ceil(remaining / 24);

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="💰" text="Financing" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Own Your Electric Future{" "}
              <span className="text-electric">From Ksh 38,000</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-16">
              We believe going electric shouldn't mean going broke. Flexible payment plans designed for the everyday hustler.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-surface border border-border/50 h-full">
                  <span className="text-3xl font-black text-electric/30">{s.num}</span>
                  <h3 className="text-lg font-bold text-foreground mt-3 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Calculator */}
          <AnimatedSection>
            <div className="max-w-2xl mx-auto rounded-2xl bg-surface border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Payment Calculator</h2>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setVehicle("tuktuk")}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${vehicle === "tuktuk" ? "gradient-electric text-electric-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  RM-T300 Tuktuk
                </button>
                <button
                  onClick={() => setVehicle("motorcycle")}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${vehicle === "motorcycle" ? "gradient-electric text-electric-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  RM-M300 Motorcycle
                </button>
              </div>

              <div className="mb-6">
                <label className="text-sm text-muted-foreground mb-2 block">
                  Your Deposit: <span className="text-electric font-semibold">Ksh {deposit.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={38000}
                  max={vehiclePrice}
                  step={5000}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full accent-[oklch(0.82_0.22_155)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Ksh 38,000</span>
                  <span>Ksh {vehiclePrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-background rounded-xl p-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Vehicle Price</span>
                  <span className="text-foreground font-semibold">Ksh {vehiclePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Your Deposit</span>
                  <span className="text-electric font-semibold">- Ksh {deposit.toLocaleString()}</span>
                </div>
                <div className="border-t border-border my-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Remaining</span>
                  <span className="text-foreground font-bold">Ksh {remaining.toLocaleString()}</span>
                </div>
              </div>

              {remaining > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-background text-center border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">12 months</div>
                    <div className="text-lg font-bold text-foreground">Ksh {monthly12.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">/month</div>
                  </div>
                  <div className="p-4 rounded-xl bg-electric/5 text-center border border-electric/30">
                    <div className="text-xs text-electric mb-1">18 months</div>
                    <div className="text-lg font-bold text-foreground">Ksh {monthly18.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">/month</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background text-center border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">24 months</div>
                    <div className="text-lg font-bold text-foreground">Ksh {monthly24.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">/month</div>
                  </div>
                </div>
              )}

              <a
                href="https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20financing"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-electric text-electric-foreground w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Apply via WhatsApp <ArrowRight size={16} />
              </a>
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
