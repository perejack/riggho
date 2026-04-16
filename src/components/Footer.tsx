import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import logoName from "@/assets/logo-name.png";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="RhingGo" className="h-8 w-8" />
              <img src={logoName} alt="RhingGo" className="h-5" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kenya's home of electric motorcycles and tuktuks — built for African roads, priced for the everyday hustler.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/products" className="text-sm text-muted-foreground hover:text-electric transition-colors">Our Models</Link>
              <Link to="/financing" className="text-sm text-muted-foreground hover:text-electric transition-colors">Financing</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-electric transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-electric transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+254700000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors">
                <Phone size={14} /> +254 700 000 000
              </a>
              <a href="mailto:info@rhinggo.co.ke" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors">
                <Mail size={14} /> info@rhinggo.co.ke
              </a>
              <span className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Near Naivas Likoni, Mombasa, Kenya
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Starting from just Ksh 38,000 deposit. Own your electric future today.
            </p>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-electric text-electric-foreground px-5 py-2.5 rounded-lg text-sm font-semibold inline-block transition-all hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RhingGo Emobility Kenya. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Backed by Hangzhou RhingGo Technology Co. Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
