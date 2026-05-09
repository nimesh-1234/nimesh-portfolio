import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">ND</span>
          <span className="text-foreground">.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative transition-colors hover:text-foreground ${
                  active === l.href.slice(1) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="navactive"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-primary rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground glow hover:scale-105 transition-transform"
        >
          Let's Talk
        </a>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-border">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}