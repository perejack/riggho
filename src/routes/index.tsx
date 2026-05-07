import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Sun, Battery, ArrowRight, Fuel, Leaf, Volume2, Shield, CheckCircle, Phone, Mail, MapPin, MessageCircle, Navigation, Gauge } from "lucide-react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import SectionLabel from "@/components/SectionLabel";
import AboutPreview from "@/components/AboutPreview";
import heroBg from "@/assets/background.jpeg";
import tuktukProduct from "@/assets/tuktukbest.jpeg";
import motorcycleProduct from "@/assets/motorcycle-chatgpt.png";
import whychooseustuktuk from "@/assets/whychooseourtuktuk.jpeg";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import zeroFuelImg from "@/assets/zero-fuel.jpg";
import zeroEmissionsImg from "@/assets/zero-emissions.jpg";
import silentRideImg from "@/assets/silent-ride.jpg";
import solarPoweredImg from "@/assets/solar-powered.jpg";
import fortuneImg from "@/assets/fortune.jpg";
import swapImage from "@/assets/swapandgonew.jpeg";
import naviLogo from "@/assets/navionewlogo.jpeg";
import nairobiLocation from "@/assets/NAIROBI.png";
import kisumuLocation from "@/assets/NAKURU.png";
import mombasaLocation from "@/assets/MOMBASA.png";
import mapIcon from "@/assets/MAPICON.png";

export default function HomePage() {

  const MapContainerAny = MapContainer as unknown as any;
  const TileLayerAny = TileLayer as unknown as any;
  const MarkerAny = Marker as unknown as any;

  const locationPins = useMemo(
    () => [
      {
        name: "Nairobi",
        address: "Mavoko Business Plaza",
        href: "https://maps.app.goo.gl/QwvnfaPojPnVBtv16",
        latLng: [-1.2921, 36.8219] as const,
      },
      {
        name: "Kisumu",
        address: "Obote Road, Next To KCB Kisumu West, Opposite CMC Motors Kisumu",
        href: "https://maps.app.goo.gl/QqJVqtBvPPKWpZDGA",
        latLng: [-0.0917, 34.768] as const,
      },
      {
        name: "Mombasa",
        address: "Ferry Opp. Likoni Towers",
        href: "https://www.google.com/maps/place/RHINGGO+ELECTRIC+TUKTUK/@-4.0743892,39.6665507",
        latLng: [-4.0435, 39.6682] as const,
      },
      {
        name: "Malindi",
        address: "Malindi Town - Serving the Coastal region",
        href: "https://maps.google.com/?q=Malindi,Kenya",
        latLng: [-3.2175, 40.1169] as const,
      },
    ],
    []
  );

  const markerIcon = useMemo(
    () =>
      L.icon({
        iconUrl: mapIcon,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      }),
    []
  );

  const stats = [
    { value: "110KM", label: "Range per charge", icon: <Zap size={18} /> },
    { value: "45 km/h", label: "Top Speed", icon: <Gauge size={18} /> },
    { value: "30KM", label: "Free solar daily", icon: <Sun size={18} /> },
    { value: "Flexible", label: "Payment plans", icon: <Shield size={18} /> },
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="gradient-electric text-electric-foreground px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 glow-electric hover:opacity-90 transition-all"
              >
                View Models <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254741799919?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20getting%20a%20quote%20for%20your%20electric%20vehicles."
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
              specs={["110KM Range", "Solar Extender", "Swappable Battery", "45 km/h"]}
              delay={0}
            />
            <ProductCard
              name="RM-M300 Electric Motorcycle"
              description="Silent power for the boda boda revolution. Fast charging, zero emissions, maximum hustle."
              image={motorcycleProduct}
              price="From Ksh 169,000"
              specs={["150KM Range", "Swappable Battery", "Low Maintenance", "90 km/h"]}
              delay={0.15}
            />
          </div>

          {/* WhatsApp Inquiry */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/254741799919?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20RM-T300%20Tuktuk%20and%20RM-M300%20Motorcycle%20models."
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
                <img src={swapImage} alt="Battery swap station" loading="lazy" width={800} height={600} className="w-full h-auto rounded-2xl" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionLabel icon="🔋" text="Charging Infrastructure" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Swap & Go
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

      {/* Why Choose Our Electric Tuktuk */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel icon="⚡" text="Why Choose Us" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                WHY CHOOSE OUR <span className="text-electric">ELECTRIC TUKTUK</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Numbered Benefits */}
            <div className="space-y-6">
              {[
                { num: "01", title: "LOWER OPERATING COSTS", desc: "Save up to 40% on daily energy expenses compared to petrol or diesel." },
                { num: "02", title: "QUIETER OPERATION", desc: "Noise-free driving for a calmer, more pleasant urban environment." },
                { num: "03", title: "LOWER MAINTENANCE NEEDS", desc: "Fewer moving parts reduce breakdowns and service costs." },
                { num: "04", title: "IMPROVED DRIVER EARNINGS", desc: "Lower costs and higher uptime — more money in drivers' pockets." },
              ].map((item, i) => (
                <AnimatedSection key={item.num} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group flex gap-4 p-6 rounded-2xl bg-background border border-border/50 hover:border-electric/50 hover:shadow-lg hover:shadow-electric/10 transition-all duration-300 cursor-default"
                  >
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl gradient-electric flex items-center justify-center text-electric-foreground font-black text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.num}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-electric transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {/* Hover Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                      <ArrowRight className="text-electric" size={24} />
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Right: Image */}
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden"
              >
                <img src={whychooseustuktuk} alt="Why Choose Our Electric Tuktuk" loading="lazy" width={800} height={600} className="w-full h-auto object-cover" />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="p-4 rounded-2xl bg-electric/10 backdrop-blur-sm border border-electric/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl gradient-electric flex items-center justify-center text-electric-foreground">
                        <Zap size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">The Future is Electric</p>
                        <p className="text-xs text-muted-foreground">Join thousands of smart drivers</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
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
              Go electric with confidence and enjoy lower costs, cleaner mobility, and better earnings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/financing"
                className="gradient-electric text-electric-foreground px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 glow-electric hover:opacity-90 transition-all"
              >
                Explore Financing <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254741799919?text=Hi%20RhingGo%2C%20I'd%20like%20to%20learn%20more%20about%20your%20electric%20vehicles%20and%20financing%20options."
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Watu Credit */}
            <AnimatedSection delay={0}>
              <a
                href="https://watu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8 flex items-center justify-center p-4">
                    <img 
                      src="https://watu.com/wp-content/uploads/Watu_OpenGraph.jpg" 
                      alt="Watu Credit" 
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">Watu Credit</h3>
                </div>
              </a>
            </AnimatedSection>

            {/* M-KOPA */}
            <AnimatedSection delay={0.1}>
              <a
                href="https://m-kopa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8 flex items-center justify-center p-4">
                    <img 
                      src="https://techafricanews.com/wp-content/uploads/2024/09/MKOPA-PR.jpg" 
                      alt="M-KOPA" 
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">M-KOPA</h3>
                </div>
              </a>
            </AnimatedSection>

            {/* Fortune Credit */}
            <AnimatedSection delay={0.2}>
              <a
                href="https://fortunecredit.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8 flex items-center justify-center p-4">
                    <img 
                      src={fortuneImg} 
                      alt="Fortune Credit Limited" 
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">Fortune Credit Limited</h3>
                </div>
              </a>
            </AnimatedSection>

            {/* Rafiki Microfinance */}
            <AnimatedSection delay={0.3}>
              <a
                href="https://rafikibank.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8 flex items-center justify-center p-4">
                    <img 
                      src="https://rafikibank.co.ke/wp-content/uploads/2019/10/Logo-FOr-Blue.png" 
                      alt="Rafiki Microfinance" 
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">Rafiki Microfinance</h3>
                </div>
              </a>
            </AnimatedSection>

            {/* Navi */}
            <AnimatedSection delay={0.4}>
              <a
                href="https://njavio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-surface border border-border/50 hover:border-electric/50 transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 -mx-8 -mt-8 flex items-center justify-center p-4">
                    <img 
                      src={naviLogo} 
                      alt="Navi" 
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-electric transition-colors">Navi</h3>
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
              </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatedSection delay={0}>
              <a
                href="https://wa.me/254741799919?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20your%20electric%20vehicles."
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
                href="tel:+254741799919"
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-electric/30 hover:scale-[1.02] transition-all h-full block"
              >
                <Phone size={24} className="text-electric mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+254 741 799 919</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a
                href="mailto:Sales@rhinggo.com"
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-electric/30 hover:scale-[1.02] transition-all h-full block"
              >
                <Mail size={24} className="text-electric mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">Sales@rhinggo.com</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-2xl bg-background border border-border/50 h-full">
                <MapPin size={24} className="text-electric mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground">4 Locations Across Kenya</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.35}>
            <div className="mt-8 rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <div className="h-[360px] md:h-[420px]">
                <MapContainerAny center={[-1.2, 37.2]} zoom={6} scrollWheelZoom className="h-full w-full">
                  <TileLayerAny
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {locationPins.map((loc) => (
                    <MarkerAny key={loc.name} position={loc.latLng as [number, number]} icon={markerIcon}>
                      <Popup>
                        <div style={{ minWidth: 200 }}>
                          <div style={{ fontWeight: 800 }}>{loc.name}</div>
                          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>{loc.address}</div>
                          <a
                            href={loc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "inline-block", marginTop: 8, fontWeight: 700, color: "#00d084" }}
                          >
                            View on Google Maps
                          </a>
                        </div>
                      </Popup>
                    </MarkerAny>
                  ))}
                </MapContainerAny>
              </div>
            </div>
          </AnimatedSection>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Nairobi */}
            <AnimatedSection delay={0.4}>
              <a 
                href="https://maps.app.goo.gl/QwvnfaPojPnVBtv16"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-border/50 hover:border-electric/30 transition-all group"
              >
                <div className="h-48 overflow-hidden bg-muted relative">
                  <img 
                    src={nairobiLocation}
                    alt="Nairobi Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={mapIcon} alt="Location marker" className="w-10 h-10 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-5 bg-surface">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={mapIcon} alt="Location" className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Nairobi</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Mavoko Business Plaza</p>
                  <p className="text-sm text-muted-foreground mb-3">0758 888 288</p>
                  <span className="inline-flex items-center gap-2 text-electric text-sm font-semibold group-hover:underline">
                    View on Google Maps <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* Kisumu */}
            <AnimatedSection delay={0.5}>
              <a 
                href="https://maps.app.goo.gl/QqJVqtBvPPKWpZDGA"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-border/50 hover:border-electric/30 transition-all group"
              >
                <div className="h-48 overflow-hidden bg-muted relative">
                  <img 
                    src={kisumuLocation}
                    alt="Kisumu Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={mapIcon} alt="Location marker" className="w-10 h-10 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-5 bg-surface">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={mapIcon} alt="Location" className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Kisumu</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Obote Road, Next To KCB Kisumu West, Opposite CMC Motors Kisumu</p>
                  <p className="text-sm text-muted-foreground mb-3">0799 374 591</p>
                  <span className="inline-flex items-center gap-2 text-electric text-sm font-semibold group-hover:underline">
                    View on Google Maps <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* Mombasa */}
            <AnimatedSection delay={0.6}>
              <a 
                href="https://www.google.com/maps/place/RHINGGO+ELECTRIC+TUKTUK/@-4.0743892,39.6665507,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x184013dd2b3b3dff:0x32940621bca7bd67!8m2!3d-4.0743892!4d39.6665507!16s%2Fg%2F11yl7vq_7_?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-border/50 hover:border-electric/30 transition-all group"
              >
                <div className="h-48 overflow-hidden bg-muted relative">
                  <img 
                    src={mombasaLocation}
                    alt="Mombasa Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={mapIcon} alt="Location marker" className="w-10 h-10 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-5 bg-surface">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={mapIcon} alt="Location" className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Mombasa</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Ferry Opp. Likoni Towers</p>
                  <p className="text-sm text-muted-foreground mb-3">0703 915 999</p>
                  <span className="inline-flex items-center gap-2 text-electric text-sm font-semibold group-hover:underline">
                    View on Google Maps <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* Malindi */}
            <AnimatedSection delay={0.7}>
              <a
                href="https://maps.app.goo.gl/Q4H7CFGB8Malindi"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-border/50 bg-surface hover:border-electric/30 transition-all group"
              >
                <div className="h-48 overflow-hidden bg-muted relative">
                  <div className="w-full h-full bg-gradient-to-br from-electric/20 to-electric/5 flex items-center justify-center">
                    <img src={mapIcon} alt="Location marker" className="w-16 h-16 drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-5 bg-surface">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={mapIcon} alt="Location" className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Malindi</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Q4H7+CFG, B8, Malindi</p>
                  <p className="text-sm text-muted-foreground mb-3">0798 393 508</p>
                  <span className="inline-flex items-center gap-2 text-electric text-sm font-semibold">
                    View on Google Maps <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
