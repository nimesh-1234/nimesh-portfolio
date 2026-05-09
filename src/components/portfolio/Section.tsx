import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14 space-y-3"
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}