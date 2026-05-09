import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Layout, Server, Cloud, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    color: "from-purple-500 to-pink-500",
    skills: ["Vue.js", "React", "JavaScript", "TypeScript", "HTML / CSS", "Tailwind"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: ["Laravel", "Node.js", "Express.js", "Java", "REST APIs", "PostgreSQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-cyan-500 to-emerald-500",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
  },
  {
    icon: Sparkles,
    title: "Emerging Tech",
    color: "from-fuchsia-500 to-violet-500",
    skills: ["LangChain", "LLMOps", "Azure AI", "OpenAI APIs", "Vector DBs", "RAG"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills & Stack"
          title={<>My <span className="text-gradient">Technical</span> Arsenal</>}
          subtitle="Tools and technologies I use to bring ideas to life."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 group hover:border-primary/40 transition relative overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${g.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
              <div className="relative">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} mb-4 glow`}>
                  <g.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.skills.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}