import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./Section";
import { Mail, MapPin, Send, Github, Linkedin, ArrowUp } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Let's <span className="text-gradient">build</span> something</>}
          subtitle="Have an idea, role, or project in mind? My inbox is always open."
        />
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-3xl p-7 space-y-5"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Contact Info</h3>
              <p className="text-sm text-muted-foreground">Reach out through any channel below.</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:hello@nimesh.dev" className="flex items-start gap-3 group">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                  <Mail className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm group-hover:text-primary transition">hello@nimesh.dev</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm">Sri Lanka — Remote Worldwide</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground">Your Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground glow disabled:opacity-60"
            >
              {sending ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Nimesh Dilshan</span>. Crafted with care.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
        <button
          onClick={scrollTop}
          className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}