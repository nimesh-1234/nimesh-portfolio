import { animate, inView } from "framer-motion/dom";
import movie from "../assets/project-movie1.png";
import booking from "../assets/project-booking.jpg";
import ecommerce from "../assets/project-cofeeshop.png";
import posSystem from "../assets/project-pos.jpg";

export function createProjects(container) {
  container.innerHTML = `
    <section id="projects" class="relative py-28 px-6">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12">
          <div class="inline-block rounded-full glass px-3 py-1 text-sm text-muted-foreground mb-4">Selected Work</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Featured <span class="text-gradient">Projects</span></h2>
          <p class="text-muted-foreground mt-2">A selection of products and tools I've designed and engineered.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid"></div>
      </div>
    </section>
  `;

  const projects = [
    { image: movie, title: "Movie Search Web App", description: "Real-time movie discovery with trailers, ratings, and rich metadata powered by the OMDb API.", tags: ["React", "OMDb API", "Tailwind", "TypeScript"], demo: "#", code: "#" },
    { image: booking, title: "Auditorium Booking System", description: "End-to-end management platform for scheduling, seat selection, and event coordination.", tags: ["Laravel", "MySQL", "Vue.js", "REST API"], demo: "#", code: "#" },
    { image: ecommerce, title: "Coffee Shop Web App", description: "A full-stack e-commerce platform featuring secure user authentication, account locking, and an intuitive ordering system.", tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"], demo: "#", code: "#" },
    { image: posSystem, title: "Retail POS System", description: "A Java-based Point of Sale system with MySQL integration. Led a development team to build core modules for inventory, supplier, and sales management.", tags: ["Java", "Swing", "MySQL", "JDBC", "Team Lead"], demo: "#", code: "#" },
  ];

  const grid = container.querySelector('#projects-grid');

  projects.forEach((p, i) => {
    const item = document.createElement('article');
    item.className = "project-card group glass rounded-3xl overflow-hidden hover:border-primary/50 transition flex flex-col shadow-elegant opacity-0 translate-y-[40px]";
    item.innerHTML = `
      <div class="relative aspect-video overflow-hidden">
        <img src="${p.image}" alt="${p.title}" loading="lazy" width="1280" height="720" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80"></div>
      </div>
      <div class="p-6 flex flex-col flex-1 gap-4">
        <h3 class="text-xl font-semibold group-hover:text-gradient transition">${p.title}</h3>
        <p class="text-sm text-muted-foreground leading-relaxed flex-1">${p.description}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded-full glass text-muted-foreground">${t}</span>`).join('')}
        </div>
        <div class="flex items-center gap-3 pt-2 border-t border-border">
          <a href="${p.demo}" class="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition">
            <i data-lucide="external-link" class="h-4 w-4"></i> Live Demo
          </a>
          <a href="${p.code}" class="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition">
            <i data-lucide="github" class="h-4 w-4"></i> Code
          </a>
        </div>
      </div>
    `;
    grid.appendChild(item);

    inView(item, () => {
      animate(item, { opacity: [0, 1], y: [40, 0] }, { duration: 0.6, delay: i * 0.1 });
    });
  });

  import('lucide').then(({ createIcons, ExternalLink, Github }) => {
    createIcons({ icons: { ExternalLink, Github } });
  });
}
