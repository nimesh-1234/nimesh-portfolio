import { animate } from "framer-motion/dom";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide";
import profile from "../assets/profile.png";

export function createHero(container) {
  const phrases = ["Software Engineer", "Backend Developer", "AI Enthusiast", "Cloud Builder"];
  
  container.innerHTML = `
    <section id="home" class="relative min-h-screen flex items-center pt-28 pb-20 px-6">
      <div class="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div id="hero-content" class="space-y-6 opacity-0 translate-y-[30px]">
          <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <i data-lucide="sparkles" class="h-3.5 w-3.5 text-primary"></i>
            Available for new opportunities
          </div>
          <h1 class="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span class="text-gradient glow-text">Nimesh</span>
            <br />
            <span class="text-foreground">Dilshan</span>
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground h-9">
            <span id="hero-typing" class="text-gradient"></span><span class="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse align-middle"></span>
          </p>
          <p class="text-base text-muted-foreground max-w-lg leading-relaxed">
            I build robust backend systems and scalable web applications, exploring modern AI technologies to create software that is secure and performs exceptionally well.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              class="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground glow hover:scale-105 transition-transform"
            >
              View Projects <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1"></i>
            </a>
            <a
              href="/resume.pdf"
              download="Nimesh_Dilshan_CV.pdf"
              class="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <i data-lucide="download" class="h-4 w-4"></i> Resume
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition"
            >
              Contact Me
            </a>
          </div>
          <div class="flex items-center gap-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" class="glass h-11 w-11 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition">
              <i data-lucide="github" class="h-5 w-5"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="glass h-11 w-11 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition">
              <i data-lucide="linkedin" class="h-5 w-5"></i>
            </a>
            <a href="mailto:nimeshdilshan869@gmail.com" target="_blank" rel="noreferrer" class="glass h-11 w-11 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition">
              <i data-lucide="mail" class="h-5 w-5"></i>
            </a>
            <a href="https://wa.me/94702027869" target="_blank" rel="noreferrer" class="glass h-11 w-11 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition">
              <i data-lucide="phone" class="h-5 w-5"></i>
            </a>
          </div>
        </div>

        <div id="hero-image" class="relative flex justify-center lg:justify-end opacity-0 scale-90">
          <div class="relative animate-float">
            <div class="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-50 scale-110"></div>
            <div class="absolute -inset-2 rounded-full bg-gradient-primary opacity-70 blur-md"></div>
            <div class="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden glass p-1">
              <img
                src="${profile}"
                alt="Nimesh Dilshan"
                width="768"
                height="768"
                class="h-full w-full object-cover rounded-full"
              />
            </div>
            <div id="hero-ring" class="absolute inset-0 rounded-full border border-dashed border-primary/40"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Initialize Lucide icons
  import('lucide').then(({ createIcons, Sparkles, ArrowRight, Download, Github, Linkedin, Mail, Phone }) => {
    createIcons({
      icons: { Sparkles, ArrowRight, Download, Github, Linkedin, Mail, Phone }
    });
  });

  // Typing effect
  const typingEl = container.querySelector('#hero-typing');
  let idx = 0;
  let text = "";
  let isDeleting = false;
  
  function type() {
    const current = phrases[idx];
    if (isDeleting) {
      text = current.substring(0, text.length - 1);
    } else {
      text = current.substring(0, text.length + 1);
    }
    
    typingEl.textContent = text;
    
    let typeSpeed = isDeleting ? 40 : 90;
    
    if (!isDeleting && text === current) {
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      idx = (idx + 1) % phrases.length;
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  setTimeout(type, 500);

  // Framer Motion Animations
  const contentEl = container.querySelector('#hero-content');
  const imageEl = container.querySelector('#hero-image');
  const ringEl = container.querySelector('#hero-ring');

  animate(contentEl, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8 });
  animate(imageEl, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 0.2 });
  animate(ringEl, { rotate: [0, 360] }, { duration: 30, repeat: Infinity, ease: "linear" });
}
