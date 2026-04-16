import { motion } from "framer-motion";

interface Props {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function StatCard({ value, label, icon, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-elevated border border-border/50 hover:border-electric/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center mb-4 group-hover:glow-electric transition-all text-electric-foreground">
        {icon}
      </div>
      <span className="text-3xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground mt-1">{label}</span>
    </motion.div>
  );
}
