import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import rmT300 from "@/assets/RM T300.png";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            <SectionLabel icon="🌍" text="Company Overview" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Company Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RHINGGO is dedicated to the research & development of electric motorcycles and a smart travel ecosystem. By integrating high-performance hardware, IoT platforms, and charging & swapping networks, RHINGGO enhances user experience, ensures asset security, and empowers partners.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our vision is to be the African leading smart electric motorcycle brand, promote green travel, support sustainable development, and provide an excellent travel experience through innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RHINGGO provides high-performance electric motorcycles, a smart IoT platform, and an efficient charging and swapping network to set a new benchmark for electric mobility in Africa.
            </p>
            <Link
              to="/about"
              className="gradient-electric text-electric-foreground px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl overflow-hidden">
              <img src={rmT300} alt="RM-T300 Electric Tuktuk" loading="lazy" width={800} height={600} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
