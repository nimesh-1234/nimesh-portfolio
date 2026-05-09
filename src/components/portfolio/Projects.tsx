import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { ExternalLink, Github } from "lucide-react";
import movie from "@/assets/project-movie.jpg";
import booking from "@/assets/project-booking.jpg";
import automation from "@/assets/project-automation.jpg";

const projects = [
  {
    image: movie,
    title: "Movie Search Web App",
    description: "Real-time movie discovery with trailers, ratings, and rich metadata powered by the OMDb API.",
    tags: ["React", "OMDb API", "Tailwind", "TypeScript"],
    demo: "#",
    code: "#",
  },
  {
    image: booking,
    title: "Auditorium Booking System",
    description: "End-to-end management platform for scheduling, seat selection, and event coordination.",
    tags: ["Laravel", "MySQL", "Vue.js", "REST API"],
    demo: "#",
    code: "#",
  },
  {
    image: automation,
    title: "Developer Automation Tools",
    description: "Custom scripts including a GitHub auto-commit tool to streamline daily developer workflows.",
    tags: ["Bash", "Node.js", "GitHub Actions", "Automation"],
    demo: "#",
    code: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Featured <span className="text-gradient">Projects</span></>}
          subtitle="A selection of products and tools I've designed and engineered."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition flex flex-col shadow-elegant"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <h3 className="text-xl font-semibold group-hover:text-gradient transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full glass text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <a href={p.demo} className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}