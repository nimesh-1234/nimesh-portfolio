import { animate, inView } from "framer-motion/dom";

export function createContact(container) {
  container.innerHTML = `
    <section id="contact" class="relative py-20 md:py-28 px-6">
      <div class="mx-auto max-w-5xl">
        <div class="mb-12">
          <div class="inline-block rounded-full glass px-3 py-1 text-sm text-muted-foreground mb-4">Get in Touch</div>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Let's <span class="text-gradient">build</span> something</h2>
          <p class="text-muted-foreground mt-2">Have an idea, role, or project in mind? My inbox is always open.</p>
        </div>
        <div class="grid lg:grid-cols-5 gap-6">
          <div id="contact-info" class="lg:col-span-2 glass rounded-3xl p-7 space-y-5 opacity-0 translate-y-[20px]">
            <div class="space-y-1">
              <h3 class="text-xl font-semibold">Contact Info</h3>
              <p class="text-sm text-muted-foreground">Reach out through any channel below.</p>
            </div>
            <div class="space-y-4">
              <a href="mailto:nimeshdilshan869@gmail.com" class="flex items-start gap-3 group">
                <div class="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                  <i data-lucide="mail" class="h-4 w-4 text-primary-foreground"></i>
                </div>
                <div>
                  <p class="text-xs text-muted-foreground">Email</p>
                  <p class="text-sm group-hover:text-primary transition">nimeshdilshan869@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/94702027869" target="_blank" rel="noreferrer" class="flex items-start gap-3 group">
                <div class="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                  <i data-lucide="phone" class="h-4 w-4 text-primary-foreground"></i>
                </div>
                <div>
                  <p class="text-xs text-muted-foreground">WhatsApp</p>
                  <p class="text-sm group-hover:text-primary transition">+94 70 202 7869</p>
                </div>
              </a>
              <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                  <i data-lucide="map-pin" class="h-4 w-4 text-primary-foreground"></i>
                </div>
                <div>
                  <p class="text-xs text-muted-foreground">Location</p>
                  <p class="text-sm">Sri Lanka — Remote Worldwide</p>
                </div>
              </div>
            </div>
            <div class="flex gap-3 pt-2">
              <a href="#" class="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition"><i data-lucide="github" class="h-4 w-4"></i></a>
              <a href="#" class="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition"><i data-lucide="linkedin" class="h-4 w-4"></i></a>
              <a href="#" class="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition"><i data-lucide="mail" class="h-4 w-4"></i></a>
            </div>
          </div>

          <form id="contact-form" class="lg:col-span-3 glass rounded-3xl p-7 space-y-4 opacity-0 translate-y-[20px]">
            <div>
              <label class="text-xs text-muted-foreground">Your Name</label>
              <input name="name" class="mt-1 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" placeholder="Jane Doe" required />
            </div>
            <div>
              <label class="text-xs text-muted-foreground">Email</label>
              <input type="email" name="email" class="mt-1 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" placeholder="you@email.com" required />
            </div>
            <div>
              <label class="text-xs text-muted-foreground">Message</label>
              <textarea name="message" rows="5" class="mt-1 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none" placeholder="Tell me about your project..." required minlength="5"></textarea>
            </div>
            <button type="submit" id="submit-btn" class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground glow hover:scale-[0.98] transition-transform">
              <span>Send Message</span> <i data-lucide="send" class="h-4 w-4"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  `;

  const footerEl = document.getElementById('footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="relative border-t border-border py-10 px-6">
        <div class="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-muted-foreground">
            © ${new Date().getFullYear()} <span class="text-gradient font-semibold">Nimesh Dilshan</span>. Crafted with care.
          </p>
          <div class="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" class="hover:text-primary transition">About</a>
            <a href="#projects" class="hover:text-primary transition">Projects</a>
            <a href="#contact" class="hover:text-primary transition">Contact</a>
          </div>
          <button id="back-to-top" class="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:scale-110 transition" aria-label="Back to top">
            <i data-lucide="arrow-up" class="h-4 w-4"></i>
          </button>
        </div>
      </footer>
    `;
    footerEl.querySelector('#back-to-top').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  import('lucide').then(({ createIcons, Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUp }) => {
    createIcons({ icons: { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUp } });
  });

  const infoEl = container.querySelector('#contact-info');
  const formEl = container.querySelector('#contact-form');

  inView(infoEl, () => {
    animate(infoEl, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5 });
  });

  inView(formEl, () => {
    animate(formEl, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.1 });
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = container.querySelector('#submit-btn span');
    btn.textContent = "Sending...";

    const formData = new FormData(formEl);

    fetch("https://formsubmit.co/ajax/nimeshdilshan869@gmail.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      btn.textContent = "Message sent! I'll get back to you soon.";
      formEl.reset();
      setTimeout(() => { btn.textContent = "Send Message"; }, 3000);
    })
    .catch(error => {
      btn.textContent = "Error sending message.";
      console.error(error);
      setTimeout(() => { btn.textContent = "Send Message"; }, 3000);
    });
  });
}
