import { animate, inView } from "framer-motion/dom";

export function createSkills(container) {
  container.innerHTML = `
    <section id="skills" class="relative py-20 md:py-28 px-6">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12">
          <div class="inline-block rounded-full glass px-3 py-1 text-sm text-muted-foreground mb-4">Skills & Stack</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">My <span class="text-gradient">Technical</span> Arsenal</h2>
          <p class="text-muted-foreground mt-2">Tools and technologies I use to bring ideas to life.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" id="skills-grid"></div>
      </div>
    </section>
  `;

  const groups = [
    { icon: "layout", title: "Frontend", color: "from-purple-500 to-pink-500", skills: ["Vue.js", "JavaScript","HTML / CSS", "Tailwind"] },
    { icon: "server", title: "Backend", color: "from-blue-500 to-cyan-500", skills: ["Laravel", "Node.js", "Express.js", "Java", "REST APIs", "MySQL", "MongoDB"] },
    { icon: "cloud", title: "Cloud & DevOps", color: "from-cyan-500 to-emerald-500", skills: ["AWS", "Docker", "GitHub Actions"] },
    { icon: "sparkles", title: "Emerging Tech", color: "from-fuchsia-500 to-violet-500", skills: ["OpenAI"] },
  ];

  const grid = container.querySelector('#skills-grid');
  
  groups.forEach((g, i) => {
    const item = document.createElement('div');
    item.className = "skill-card glass rounded-2xl p-6 group hover:border-primary/40 transition relative overflow-hidden opacity-0 translate-y-[30px]";
    item.innerHTML = `
      <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${g.color} opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
      <div class="relative">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} mb-4 glow">
          <i data-lucide="${g.icon}" class="h-6 w-6 text-white"></i>
        </div>
        <h3 class="text-lg font-semibold mb-3">${g.title}</h3>
        <ul class="space-y-1.5">
          ${g.skills.map(s => `
            <li class="text-sm text-muted-foreground flex items-center gap-2">
              <span class="h-1 w-1 rounded-full bg-primary"></span> ${s}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    grid.appendChild(item);
    
    inView(item, () => {
      animate(item, { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: i * 0.08 });
    });
    
    item.addEventListener('mouseenter', () => animate(item, { y: -6 }, { duration: 0.2 }));
    item.addEventListener('mouseleave', () => animate(item, { y: 0 }, { duration: 0.2 }));
  });

  import('lucide').then(({ createIcons, Layout, Server, Cloud, Sparkles }) => {
    createIcons({ icons: { Layout, Server, Cloud, Sparkles } });
  });
}
