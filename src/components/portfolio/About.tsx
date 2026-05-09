import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionHeader } from "./Section";
import { Code2, Rocket, Brain } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v) + suffix);
  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: "easeOut" });
  }, [inView, to, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { icon: Rocket, value: 2, suffix: "+", label: "Years Experience" },
  { icon: Code2, value: 15, suffix: "+", label: "Projects Completed" },
  { icon: Brain, value: 20, suffix: "+", label: "Technologies Mastered" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title={<>Building the <span className="text-gradient">future</span>, one commit at a time</>}
        />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a passionate full-stack developer with a Higher National Diploma in Information Technology (HNDIT),
              focused on creating performant, scalable web applications that solve real problems.
            </p>
            <p>
              Lately I've been deep into <span className="text-foreground font-medium">emerging AI technologies</span> —
              experimenting with LLMOps, LangChain, and intelligent automation. I love bridging the gap between robust
              backend systems and beautiful, intuitive frontends.
            </p>
            <p>
              When I'm not shipping code, I'm contributing to open source, writing automation tools, or learning the next
              piece of the cloud-native puzzle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-primary/40 transition group"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center glow group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}