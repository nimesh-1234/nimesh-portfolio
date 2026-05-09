import { animate, inView } from "framer-motion/dom";

export function createExperience(container) {
  container.innerHTML = `
    <section id="experience" class="relative py-28 px-6">
      <div class="mx-auto max-w-4xl">
        <div class="mb-12">
          <div class="inline-block rounded-full glass px-3 py-1 text-sm text-muted-foreground mb-4">Career</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Experience <span class="text-gradient">Timeline</span></h2>
        </div>
        <div class="relative pl-8 md:pl-12" id="exp-timeline">
          <div class="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>
        </div>
      </div>
    </section>
  `;

  const items = [
    { role: "Software Engineering Intern", company: "Rivolax", period: "Nov 2025 — Present", location: "Remote", desc: "Building full-stack features across the product. Working with modern frameworks, REST APIs, and cloud-based deployments." },
    { role: "IT Officer & System Administrator", company: "Divisional Secretariat", period: "2025", location: "On-site", desc: "Managed core IT infrastructure, internal systems, and end-user support across the entire division." },
  ];

  const timeline = container.querySelector('#exp-timeline');

  items.forEach((it, i) => {
    const el = document.createElement('div');
    el.className = "exp-item relative pb-12 last:pb-0 opacity-0 translate-x-[-20px]";
    el.innerHTML = `
      <div class="absolute -left-[26px] md:-left-[34px] top-1.5 h-4 w-4 rounded-full bg-gradient-primary glow ring-4 ring-background"></div>
      <div class="glass rounded-2xl p-6 hover:border-primary/40 transition">
        <div class="flex flex-wrap items-center gap-3 mb-2">
          <span class="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">${it.period}</span>
          <span class="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <i data-lucide="map-pin" class="h-3 w-3"></i> ${it.location}
          </span>
        </div>
        <h3 class="text-lg font-semibold flex items-center gap-2">
          <i data-lucide="briefcase" class="h-4 w-4 text-primary"></i> ${it.role}
        </h3>
        <p class="text-sm text-gradient font-medium mb-2">${it.company}</p>
        <p class="text-sm text-muted-foreground leading-relaxed">${it.desc}</p>
      </div>
    `;
    timeline.appendChild(el);

    inView(el, () => {
      animate(el, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.5, delay: i * 0.1 });
    });
  });

  import('lucide').then(({ createIcons, MapPin, Briefcase }) => {
    createIcons({ icons: { MapPin, Briefcase } });
  });
}
