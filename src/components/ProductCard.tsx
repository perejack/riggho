import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import whatsappIcon from "@/assets/whatsapp-icon.png";

interface Props {
  name: string;
  description: string;
  image: string;
  price: string;
  specs: string[];
  delay?: number;
}

export default function ProductCard({ name, description, image, price, specs, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group rounded-2xl bg-surface border border-border/50 overflow-hidden hover:border-electric/30 transition-all"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 gradient-electric text-electric-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {specs.map((spec) => (
            <span key={spec} className="text-xs px-3 py-1 rounded-full border border-electric/30 text-electric">
              {spec}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            to="/products"
            className="flex-1 gradient-electric text-electric-foreground text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/254795704273?text=Hi%20RhingGo%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center gap-2"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            Inquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}
