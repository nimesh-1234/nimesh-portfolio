import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

const phrases = ["Full-Stack Developer", "Software Engineer", "AI Enthusiast", "Cloud Builder"];

function Typing() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    const speed = del ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % phrases.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, del, idx]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient glow-text">Nimesh</span>
            <br />
            <span className="text-foreground">Dilshan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground h-9">
            <Typing />
          </p>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            I craft fast, scalable web experiences and explore the frontier of AI — building tools that feel as good as they perform.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground glow hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:hello@nimesh.dev" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass h-11 w-11 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-50 scale-110" />
            <div className="absolute -inset-2 rounded-full bg-gradient-primary opacity-70 blur-md" />
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden glass p-1">
              <img
                src={profile}
                alt="Nimesh Dilshan"
                width={768}
                height={768}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}