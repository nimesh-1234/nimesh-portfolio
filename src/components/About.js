import { animate, inView } from "framer-motion/dom";

export function createAbout(container) {
  container.innerHTML = `
    <section id="about" class="relative py-28 px-6">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12">
          <div class="inline-block rounded-full glass px-3 py-1 text-sm text-muted-foreground mb-4">About Me</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Building the <span class="text-gradient">future</span>, one commit at a time</h2>
        </div>
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div id="about-content" class="space-y-5 text-muted-foreground leading-relaxed opacity-0 translate-x-[-30px]">
            <p>
              I'm a passionate full-stack developer with a Higher National Diploma in Information Technology (HNDIT),
              focused on creating performant, scalable web applications that solve real problems.
            </p>
            <p>
              Lately I've been deep into <span class="text-foreground font-medium">emerging AI technologies</span> —
              experimenting with LLMOps, LangChain, and intelligent automation. I love bridging the gap between robust
              backend systems and beautiful, intuitive frontends.
            </p>
            <p>
              When I'm not shipping code, I'm contributing to open source, writing automation tools, or learning the next
              piece of the cloud-native puzzle.
            </p>
          </div>

          <div class="grid sm:grid-cols-1 gap-4">
            <div class="about-stat glass rounded-2xl p-6 flex items-center gap-5 hover:border-primary/40 transition group opacity-0 translate-y-[20px]">
              <div class="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center glow group-hover:scale-110 transition-transform">
                <i data-lucide="rocket" class="h-6 w-6 text-primary-foreground"></i>
              </div>
              <div>
                <div class="text-3xl font-bold text-gradient"><span class="counter" data-to="2">0</span>+</div>
                <div class="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div class="about-stat glass rounded-2xl p-6 flex items-center gap-5 hover:border-primary/40 transition group opacity-0 translate-y-[20px]">
              <div class="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center glow group-hover:scale-110 transition-transform">
                <i data-lucide="code-2" class="h-6 w-6 text-primary-foreground"></i>
              </div>
              <div>
                <div class="text-3xl font-bold text-gradient"><span class="counter" data-to="15">0</span>+</div>
                <div class="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            <div class="about-stat glass rounded-2xl p-6 flex items-center gap-5 hover:border-primary/40 transition group opacity-0 translate-y-[20px]">
              <div class="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center glow group-hover:scale-110 transition-transform">
                <i data-lucide="brain" class="h-6 w-6 text-primary-foreground"></i>
              </div>
              <div>
                <div class="text-3xl font-bold text-gradient"><span class="counter" data-to="20">0</span>+</div>
                <div class="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  import('lucide').then(({ createIcons, Rocket, Code2, Brain }) => {
    createIcons({
      icons: { Rocket, Code2, Brain }
    });
  });

  const contentEl = container.querySelector('#about-content');
  inView(contentEl, () => {
    animate(contentEl, { opacity: [0, 1], x: [-30, 0] }, { duration: 0.6 });
  });

  const stats = container.querySelectorAll('.about-stat');
  stats.forEach((stat, i) => {
    inView(stat, () => {
      animate(stat, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: i * 0.1 });
    });
  });

  const counters = container.querySelectorAll('.counter');
  counters.forEach(counter => {
    const to = parseInt(counter.getAttribute('data-to'), 10);
    inView(counter, () => {
      animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: value => {
          counter.textContent = Math.floor(value);
        }
      });
    });
  });
}
