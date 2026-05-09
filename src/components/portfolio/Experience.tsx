import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Briefcase, MapPin } from "lucide-react";

const items = [
  {
    role: "Software Engineering Intern",
    company: "Rivolax",
    period: "Nov 2025 — Present",
    location: "Remote",
    desc: "Building full-stack features across the product. Working with modern frameworks, REST APIs, and cloud-based deployments.",
  },
  {
    role: "IT Officer & System Administrator",
    company: "Divisional Secretariat",
    period: "2025",
    location: "On-site",
    desc: "Managed core IT infrastructure, internal systems, and end-user support across the entire division.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Career"
          title={<>Experience <span className="text-gradient">Timeline</span></>}
        />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <div className="absolute -left-[26px] md:-left-[34px] top-1.5 h-4 w-4 rounded-full bg-gradient-primary glow ring-4 ring-background" />
              <div className="glass rounded-2xl p-6 hover:border-primary/40 transition">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">
                    {it.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {it.location}
                  </span>
                </div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" /> {it.role}
                </h3>
                <p className="text-sm text-gradient font-medium mb-2">{it.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}