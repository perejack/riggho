import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sun, Battery, ArrowRight, Fuel, Leaf, Volume2, Shield, Calculator, CheckCircle, TrendingDown, Wallet, Calendar, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import SectionLabel from "@/components/SectionLabel";
import AboutPreview from "@/components/AboutPreview";
import heroBg from "@/assets/hero-fleet.jpg";
import tuktukProduct from "@/assets/tuktuk-product.jpg";
import motorcycleProduct from "@/assets/motorcycle-product.jpg";
import riderLifestyle from "@/assets/rider-lifestyle.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import zeroFuelImg from "@/assets/zero-fuel.jpg";
import zeroEmissionsImg from "@/assets/zero-emissions.jpg";
import silentRideImg from "@/assets/silent-ride.jpg";
import solarPoweredImg from "@/assets/solar-powered.jpg";

export default function HomePage() {
  const [deposit, setDeposit] = useState(38000);
  const [vehicle, setVehicle] = useState<"tuktuk" | "motorcycle">("tuktuk");
  const [activeTerm, setActiveTerm] = useState<12 | 18 | 24>(18);

  const vehiclePrice = vehicle === "tuktuk" ? 380000 : 180000;
  const minDeposit = 38000;
  const remaining = Math.max(0, vehiclePrice - deposit);
  const monthlyPayment = Math.ceil(remaining / activeTerm);
  const savingsVsPetrol = 45000 - (monthlyPayment + 8000);

  const stats = [
    { value: "110KM", label: "Range per charge", icon: <Zap size={18} /> },
    { value: "6,000W", label: "Motor power", icon: <Battery size={18} /> },
    { value: "30KM", label: "Free solar daily", icon: <Sun size={18} /> },
    { value: "Ksh 38K", label: "Deposit to start", icon: <Shield size={18} /> },
  ];

  const benefits = [
    { icon: <Fuel size={20} />, title: "Zero Fuel Costs", desc: "Charge from the sun for free", image: zeroFuelImg },
    { icon: <Leaf size={20} />, title: "Zero Emissions", desc: "Clean air for everyone", image: zeroEmissionsImg },
    { icon: <Volume2 size={20} />, title: "Silent Ride", desc: "No noise, no vibrations", image: silentRideImg },
    { icon: <Sun size={20} />, title: "Solar Powered", desc: "30KM free every day", image: solarPoweredImg },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="RhingGo electric vehicles on Mombasa streets" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <SectionLabel icon="⚡" text="Electric Mobility for Africa" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Kenya's Electric Future
              <span className="block text-electric mt-2">
                Starting at Ksh 38,000
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Built for African roads. Priced for the everyday hustler. Solar-powered tuktuks and electric motorcycles that work as hard as you do.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="gradient-electric text-electric-foreground px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 glow-electric hover:opacity-90 transition-all"
              >
                View Models <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20getting%20a%20quote%20for%20your%20electric%20vehicles."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                <img src={whatsappIcon} alt="" className="w-8 h-8" /> Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats — inline compact strip */}
      <section className="py-12 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center text-electric-foreground shrink-0">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xl font-bold text-electric">{s.value}</span>
                  <span className="block text-xs text-muted-foreground">{s.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="🚛" text="Our Models" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for the <span className="text-electric">Hustle</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mb-12">
              Tough, practical, solar-powered machines that work as hard as the people who ride them.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              name="RM-T300 Electric Tuktuk"
              description="The flagship. Solar-powered, swappable battery, 110KM range. The workhorse of Mombasa's streets."
              image={tuktukProduct}
              price="From Ksh 380,000"
              specs={["110KM Range", "Solar Extender", "Swappable Battery", "6,000W Motor"]}
              delay={0}
            />
            <ProductCard
              name="RM-M300 Electric Motorcycle"
              description="Silent power for the boda boda revolution. Fast charging, zero emissions, maximum hustle."
              image={motorcycleProduct}
              price="From Ksh 180,000"
              specs={["80KM Range", "Fast Charging", "Low Maintenance", "3,000W Motor"]}
              delay={0.15}
            />
          </div>

          {/* WhatsApp Inquiry */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20RM-T300%20Tuktuk%20and%20RM-M300%20Motorcycle%20models."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-electric/10 border border-electric/20 hover:border-electric/40 hover:bg-electric/20 transition-all group"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground group-hover:text-electric transition-colors">
                    Inquire on WhatsApp
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Get detailed specs & pricing
                  </div>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Preview */}
      <AboutPreview />

      {/* Charging Infrastructure */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://techpoint.africa/wp-content/uploads/2025/09/ARC-Ride-electric-motorcycle-battery-swapping-charging-station-1024x570.jpg.webp" alt="Battery swap station" loading="lazy" width={800} height={600} className="w-full h-auto" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionLabel icon="🔋" text="Charging Infrastructure" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Swap & Go in{" "}
                <span className="text-electric">Under 2 Minutes</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our swappable battery system means you never wait for a charge. Pull up, swap your battery, and get back on the road. We're building charging stations across Mombasa and expanding to Nairobi.
              </p>
              <Link
                to="/contact"
                className="gradient-electric text-electric-foreground px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all"
              >
                Find Charging Stations <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Electric */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <SectionLabel icon="🌿" text="The Maths" />
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Why Electric?{" "}
                  <span className="text-electric">Here's the Maths.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Forget the marketing. Let's talk numbers — the kind that matter when you're trying to feed your family and grow your business.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-border p-6 mb-4 bg-surface">
                  <h3 className="text-destructive font-semibold mb-2">The Old Way (Petrol)</h3>
                  <p className="text-muted-foreground text-sm">
                    Ksh 1,500–2,000 in fuel <strong className="text-foreground">every day</strong>. That's Ksh 45,000–60,000 every month — gone.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl border border-electric/30 p-6 bg-electric/5">
                  <h3 className="text-electric font-semibold mb-2">The RhingGo Way (Electric)</h3>
                  <p className="text-muted-foreground text-sm">
                    Under <strong className="text-foreground">Ksh 8,000/month</strong> on energy. Save over <strong className="text-electric">Ksh 40,000 every month</strong> — money that stays in your pocket.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={riderLifestyle} alt="Happy RhingGo rider" loading="lazy" width={800} height={600} className="w-full h-auto" />
                <div className="absolute bottom-6 right-6 gradient-electric text-electric-foreground px-6 py-4 rounded-2xl">
                  <span className="text-2xl font-bold block">Ksh 40K+</span>
                  <span className="text-sm opacity-80">Saved Monthly</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Benefit Cards with images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-border/50 hover:border-electric/30 transition-all group">
                  <div className="relative h-36 overflow-hidden">
                    <img src={b.image} alt={b.title} loading="lazy" width={640} height={640} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg gradient-electric flex items-center justify-center text-electric-foreground">
                      {b.icon}
                    </div>
                  </div>
                  <div className="p-4 bg-surface">
                    <h4 className="text-sm font-semibold text-foreground mb-1">{b.title}</h4>
                    <p className="text-xs text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Steps */}
      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel icon="🚀" text="How It Works" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Own Your Electric Future{" "}
                <span className="text-electric">From Ksh 38,000</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We believe going electric shouldn't mean going broke. Flexible payment plans designed for the everyday hustler.
              </p>
            </div>
          </AnimatedSection>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Pay Deposit",
                desc: "Start with as little as Ksh 38,000 to secure your vehicle.",
                image: "https://static.wixstatic.com/media/6c8dbd_eb585db886964117810f385d2eb75d3d~mv2.gif",
              },
              {
                num: "02",
                title: "Vehicle Delivery",
                desc: "We prepare and deliver your electric vehicle to your location.",
                image: "https://www.bca.co.uk/.imaging/mte/website/small/dam/UK/Buying/Vehicle-Transport-Options/Vehicle-Transport-Options---ContentBlockImage-1-min.png/jcr:content/Vehicle%20Transport%20Options%20-%20ContentBlockImage-1-min.png",
              },
              {
                num: "03",
                title: "Payment Plan",
                desc: "Spread remaining balance over flexible monthly instalments.",
                image: "https://images.template.net/380200/Payment-Plan-Template-edit-online.png",
              },
              {
                num: "04",
                title: "Start Earning",
                desc: "Hit the road and start saving Ksh 40,000+ per month on fuel.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrmMTS1Y4-6xpAutx8OIC6rO-tkNtF7AR9Q&s",
              },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative bg-surface rounded-2xl overflow-hidden border border-border/50 hover:border-electric/30 transition-all duration-500 h-full"
                >
                  {/* Step Number */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="w-9 h-9 rounded-xl gradient-electric flex items-center justify-center text-electric-foreground text-sm font-black shadow-lg shadow-electric/25">
                      {step.num}
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-electric transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-electric/5 to-transparent" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[45%] left-0 right-0 px-20">
            <div className="max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </section>

      {/* Interactive Financing Calculator */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <SectionLabel icon="💰" text="Financing Calculator" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Build Your <span className="text-electric">Payment Plan</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Customize your deposit and see exactly how much you'll pay monthly. No hidden fees.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calculator Controls */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-background rounded-3xl p-6 md:p-8 border border-border/50 shadow-2xl shadow-electric/5">
                {/* Vehicle Selection */}
                <div className="flex gap-3 mb-8">
                  <button
                    onClick={() => setVehicle("tuktuk")}
                    className={`flex-1 p-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      vehicle === "tuktuk"
                        ? "gradient-electric text-electric-foreground shadow-lg shadow-electric/25 scale-[1.02]"
                        : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                    }`}
                  >
                    <div className="relative w-full h-16 rounded-xl overflow-hidden mb-2">
                      <img src={tuktukProduct} alt="RM-T300" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm">RM-T300 Tuktuk</div>
                    <div className="text-xs opacity-80 font-normal mt-0.5">Ksh 380,000</div>
                  </button>
                  <button
                    onClick={() => setVehicle("motorcycle")}
                    className={`flex-1 p-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      vehicle === "motorcycle"
                        ? "gradient-electric text-electric-foreground shadow-lg shadow-electric/25 scale-[1.02]"
                        : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                    }`}
                  >
                    <div className="relative w-full h-16 rounded-xl overflow-hidden mb-2">
                      <img src={motorcycleProduct} alt="RM-M300" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm">RM-M300 Motorcycle</div>
                    <div className="text-xs opacity-80 font-normal mt-0.5">Ksh 180,000</div>
                  </button>
                </div>

                {/* Deposit Input */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Wallet size={16} className="text-electric" />
                      Your Deposit Amount
                    </label>
                    <span className="text-2xl font-black text-electric">
                      Ksh {deposit.toLocaleString()}
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <input
                      type="number"
                      min={minDeposit}
                      max={vehiclePrice}
                      step={1000}
                      value={deposit}
                      onChange={(e) => {
                        const val = Math.min(Math.max(Number(e.target.value), minDeposit), vehiclePrice);
                        setDeposit(val);
                      }}
                      className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all"
                      placeholder="Enter deposit amount"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      Ksh
                    </div>
                  </div>

                  <input
                    type="range"
                    min={minDeposit}
                    max={vehiclePrice}
                    step={1000}
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-electric"
                    style={{
                      background: `linear-gradient(to right, oklch(0.82 0.22 155) ${((deposit - minDeposit) / (vehiclePrice - minDeposit)) * 100}%, oklch(0.25 0.01 155) ${((deposit - minDeposit) / (vehiclePrice - minDeposit)) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Min: Ksh 38,000</span>
                    <span>Max: Ksh {vehiclePrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Payment Term Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-electric" />
                    Payment Term
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[12, 18, 24].map((months) => (
                      <button
                        key={months}
                        onClick={() => setActiveTerm(months as 12 | 18 | 24)}
                        className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          activeTerm === months
                            ? "bg-electric/10 border-2 border-electric text-electric"
                            : "bg-secondary/30 border border-border text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {months} Months
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-electric" />
                    <span>No credit check required</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-electric" />
                    <span>Flexible payment terms</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Results Panel */}
            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <div className="bg-gradient-to-br from-electric/20 to-electric/5 rounded-3xl p-6 md:p-8 border border-electric/20 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-electric flex items-center justify-center text-electric-foreground">
                    <Calculator size={20} />
                  </div>
                  <h3 className="font-bold text-foreground">Your Plan</h3>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${vehicle}-${deposit}-${activeTerm}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    {/* Monthly Payment - Hero Number */}
                    <div className="text-center mb-8">
                      <div className="text-sm text-muted-foreground mb-2">Monthly Payment</div>
                      <div className="text-4xl md:text-5xl font-black text-foreground">
                        Ksh {monthlyPayment.toLocaleString()}
                      </div>
                      <div className="text-sm text-electric font-medium mt-1">
                        for {activeTerm} months
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-sm text-muted-foreground">Vehicle Price</span>
                        <span className="font-semibold text-foreground">Ksh {vehiclePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-sm text-muted-foreground">Your Deposit</span>
                        <span className="font-semibold text-electric">- Ksh {deposit.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-muted-foreground">Remaining Balance</span>
                        <span className="font-bold text-foreground">Ksh {remaining.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Savings Highlight */}
                    {savingsVsPetrol > 0 && (
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-electric/10 border border-electric/20 rounded-2xl p-4 mb-6"
                      >
                        <div className="flex items-center gap-2 text-electric mb-1">
                          <TrendingDown size={16} />
                          <span className="text-sm font-medium">Monthly Savings vs Petrol</span>
                        </div>
                        <div className="text-2xl font-black text-electric">
                          Ksh {savingsVsPetrol.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Payment + energy vs fuel costs
                        </div>
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20financing%20the%20${vehicle === 'tuktuk' ? 'RM-T300%20Tuktuk' : 'RM-M300%20Motorcycle'}%20with%20Ksh%20${deposit.toLocaleString()}%20deposit%20for%20${activeTerm}%20months.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-electric text-electric-foreground w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-electric/25"
                    >
                      Apply via WhatsApp <ArrowRight size={16} />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Go <span className="text-electric">Electric</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Start with just Ksh 38,000 deposit. Get on the road to savings, cleaner air, and a better business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/financing"
                className="gradient-electric text-electric-foreground px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 glow-electric hover:opacity-90 transition-all"
              >
                Explore Financing <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'd%20like%20to%20learn%20more%20about%20your%20electric%20vehicles%20and%20financing%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                <img src={whatsappIcon} alt="" className="w-8 h-8" /> Talk to Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <SectionLabel icon="📍" text="Contact Us" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Let's <span className="text-electric">Talk</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Whether you're a single rider or a fleet buyer, we'd love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatedSection delay={0}>
              <a
                href="https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20your%20electric%20vehicles."
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-electric/10 border border-electric/20 hover:border-electric/40 hover:scale-[1.02] transition-all group h-full block"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us now</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <a
                href="tel:+254795704273"
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-electric/30 hover:scale-[1.02] transition-all h-full block"
              >
                <Phone size={24} className="text-electric mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+254 795 704 273</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a
                href="mailto:info@rhinggo.co.ke"
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-electric/30 hover:scale-[1.02] transition-all h-full block"
              >
                <Mail size={24} className="text-electric mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">info@rhinggo.co.ke</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-2xl bg-background border border-border/50 h-full">
                <MapPin size={24} className="text-electric mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground">Near Naivas Likoni, Mombasa</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.4}>
            <div className="rounded-2xl overflow-hidden border border-border/50 h-64 mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d39.66!3d-4.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDUnMjQuMCJTIDM5wrAzOSczNi4wIkU!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RhingGo Mombasa Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
