import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import aboutOffice from "@/assets/aboutusnewimage.jpeg";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            <SectionLabel icon="🌍" text="About RhingGo" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Driving Kenya's{" "}
              <span className="text-electric">Quiet Revolution</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RhingGo Emobility is the Kenyan face of Hangzhou RhingGo Technology Co. Ltd — a global leader in e-mobility solutions purpose-built for the African market. From our base in Mombasa, we are driving a quiet revolution — one electric tuktuk at a time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe going electric shouldn't mean going broke. That's why we've made it possible to get on the road with as little as Ksh 65,000 as a deposit. We are not just selling vehicles — we are handing people a livelihood upgrade.
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
              <img src={aboutOffice} alt="RhingGo showroom in Mombasa" loading="lazy" width={800} height={600} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
