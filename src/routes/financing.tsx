import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import tuktukProduct from "@/assets/tuktukbest.jpeg";
import motorcycleProduct from "@/assets/motorcycle-chatgpt.png";

const steps = [
  { num: "01", title: "Pay Deposit", desc: "Start with as little as Ksh 65,000 to secure your vehicle.", image: "https://static.wixstatic.com/media/6c8dbd_eb585db886964117810f385d2eb75d3d~mv2.gif" },
  { num: "02", title: "Vehicle Delivery", desc: "We prepare and deliver your electric vehicle to your location.", image: "https://www.bca.co.uk/.imaging/mte/website/small/dam/UK/Buying/Vehicle-Transport-Options/Vehicle-Transport-Options---ContentBlockImage-1-min.png/jcr:content/Vehicle%20Transport%20Options%20-%20ContentBlockImage-1-min.png" },
  { num: "03", title: "Payment Plan", desc: "Spread remaining balance over flexible monthly instalments.", image: "https://images.template.net/380200/Payment-Plan-Template-edit-online.png" },
  { num: "04", title: "Start Earning", desc: "Hit the road and start saving Ksh 40,000+ per month on fuel.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrmMTS1Y4-6xpAutx8OIC6rO-tkNtF7AR9Q&s" },
];

export default function FinancingPage() {
  const [deposit, setDeposit] = useState(65000);
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
              <span className="text-electric">From Ksh 65,000</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-16">
              We believe going electric shouldn't mean going broke. Flexible payment plans designed for the everyday hustler.
            </p>
          </AnimatedSection>

          {/* Steps with Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl bg-surface border border-border/50 overflow-hidden h-full hover:border-electric/30 hover:shadow-2xl hover:shadow-electric/10 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={s.image} 
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl gradient-electric flex items-center justify-center text-electric-foreground text-sm font-black shadow-lg">
                      {s.num}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Calculator */}
          <AnimatedSection>
            <div className="max-w-2xl mx-auto rounded-2xl bg-surface border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Payment Calculator</h2>

              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setVehicle("tuktuk")}
                  className={`flex-1 p-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${vehicle === "tuktuk" ? "gradient-electric text-electric-foreground shadow-lg shadow-electric/25 scale-[1.02]" : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"}`}
                >
                  <div className="relative w-full h-20 rounded-xl overflow-hidden mb-3">
                    <img src={tuktukProduct} alt="RM-T300" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-base">RM-T300 Tuktuk</div>
                  <div className="text-xs opacity-80 font-normal mt-1">Ksh 380,000</div>
                </button>
                <button
                  onClick={() => setVehicle("motorcycle")}
                  className={`flex-1 p-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${vehicle === "motorcycle" ? "gradient-electric text-electric-foreground shadow-lg shadow-electric/25 scale-[1.02]" : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"}`}
                >
                  <div className="relative w-full h-20 rounded-xl overflow-hidden mb-3">
                    <img src={motorcycleProduct} alt="RM-M300" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-base">RM-M300 Motorcycle</div>
                  <div className="text-xs opacity-80 font-normal mt-1">Ksh 180,000</div>
                </button>
              </div>

              <div className="mb-6">
                <label className="text-sm text-muted-foreground mb-2 block">
                  Your Deposit: <span className="text-electric font-semibold">Ksh {deposit.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={65000}
                  max={vehiclePrice}
                  step={5000}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full accent-[oklch(0.82_0.22_155)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Ksh 65,000</span>
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
