import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — RhingGo Emobility Kenya" },
      { name: "description", content: "Visit us near Naivas Likoni, Mombasa. WhatsApp, call, or fill our inquiry form. We'd love to hear from you." },
      { property: "og:title", content: "Contact RhingGo Emobility" },
      { property: "og:description", content: "Reach us in Mombasa. WhatsApp preferred — we respond fast." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "individual", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi RhingGo! I'm ${formData.name}. ${formData.message}. Contact: ${formData.phone || formData.email}`;
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel icon="📍" text="Contact Us" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let's <span className="text-electric">Talk</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-16">
              Whether you're a single rider or a fleet buyer, we'd love to hear from you. Most Kenyans prefer WhatsApp — so do we!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-electric/10 border border-electric/20 hover:border-electric/40 transition-all group"
                  >
                    <MessageCircle size={24} className="text-electric mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Chat with us now</p>
                  </a>
                  <a href="tel:+254700000000" className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-electric/30 transition-all">
                    <Phone size={24} className="text-electric mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+254 700 000 000</p>
                  </a>
                  <a href="mailto:info@rhinggo.co.ke" className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-electric/30 transition-all">
                    <Mail size={24} className="text-electric mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">info@rhinggo.co.ke</p>
                  </a>
                  <div className="p-6 rounded-2xl bg-surface border border-border/50">
                    <MapPin size={24} className="text-electric mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">Near Naivas Likoni, Mombasa</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="rounded-2xl overflow-hidden border border-border/50 h-64">
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

            {/* Form */}
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="rounded-2xl bg-surface border border-border p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Send an Inquiry</h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">I'm a...</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-electric/50"
                    >
                      <option value="individual">Individual Buyer</option>
                      <option value="fleet">Fleet / Bulk Buyer</option>
                      <option value="partner">Business Partner</option>
                      <option value="investor">Investor</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 resize-none"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-electric text-electric-foreground py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  >
                    Send via WhatsApp <Send size={16} />
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
