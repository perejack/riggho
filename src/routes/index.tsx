import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Sun, Battery, ArrowRight, Fuel, Leaf, Volume2, Shield, CheckCircle, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import SectionLabel from "@/components/SectionLabel";
import AboutPreview from "@/components/AboutPreview";
import heroBg from "@/assets/background.jpeg";
import tuktukProduct from "@/assets/tuktukbest.jpeg";
import motorcycleProduct from "@/assets/motorcycle-chatgpt.png";
import riderLifestyle from "@/assets/bodaboda rider.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import zeroFuelImg from "@/assets/zero-fuel.jpg";
import zeroEmissionsImg from "@/assets/zero-emissions.jpg";
import silentRideImg from "@/assets/silent-ride.jpg";
import solarPoweredImg from "@/assets/solar-powered.jpg";

export default function HomePage() {

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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight" key="hero-v2">
              DRIVE RHINGGO, EARN MORE!, <span className="text-electric">SAVE MORE!</span>
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

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Go <span className="text-electric">Electric</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Start with just Ksh 65,000 deposit. Get on the road to savings, cleaner air, and a better business.
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

      {/* Financing Partners */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
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

          <div className="grid md:grid-cols-3 gap-6">
            {/* Watu Credit */}
            <AnimatedSection delay={0}>
              <a
                href="https://watu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8">
                    <img 
                      src="https://watu.com/wp-content/uploads/Watu_OpenGraph.jpg" 
                      alt="Watu Credit" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">Watu Credit</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Fast, flexible asset financing with low daily installments.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                    Same-day processing
                  </div>
                </div>
              </a>
            </AnimatedSection>

            {/* Rafiki Microfinance */}
            <AnimatedSection delay={0.1}>
              <a
                href="https://rafikibank.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8">
                    <img 
                      src="https://rafikibank.co.ke/wp-content/uploads/2019/10/Logo-FOr-Blue.png" 
                      alt="Rafiki Microfinance" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">Rafiki Microfinance</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Empowering entrepreneurs through tailored business loans.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                    Competitive interest rates
                  </div>
                </div>
              </a>
            </AnimatedSection>

            {/* M-KOPA */}
            <AnimatedSection delay={0.2}>
              <a
                href="https://m-kopa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8">
                    <img 
                      src="https://techafricanews.com/wp-content/uploads/2024/09/MKOPA-PR.jpg" 
                      alt="M-KOPA" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">M-KOPA</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Pay-as-you-go technology for easy, connected ownership.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                    Simple digital payment plans
                  </div>
                </div>
              </a>
            </AnimatedSection>
          </div>
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
