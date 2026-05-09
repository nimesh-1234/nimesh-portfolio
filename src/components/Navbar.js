import { animate } from "framer-motion/dom";

export function createNavbar(container) {
  container.innerHTML = `
    <header id="header-nav" class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-transparent">
      <div class="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" class="text-xl font-bold tracking-tighter">
          Nimesh<span class="text-primary">.dev</span>
        </a>
        
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#skills" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#projects" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#experience" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <button id="mobile-menu-btn" class="md:hidden p-2 text-foreground">
          <i data-lucide="menu" class="h-6 w-6"></i>
        </button>
      </div>
    </header>

    <div id="mobile-menu" class="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm hidden flex-col items-center justify-center gap-8">
      <a href="#about" class="mobile-link text-2xl font-medium">About</a>
      <a href="#skills" class="mobile-link text-2xl font-medium">Skills</a>
      <a href="#projects" class="mobile-link text-2xl font-medium">Projects</a>
      <a href="#experience" class="mobile-link text-2xl font-medium">Experience</a>
      <a href="#contact" class="mobile-link text-2xl font-medium">Contact</a>
    </div>
  `;

  import('lucide').then(({ createIcons, Menu, X }) => {
    createIcons({
      icons: { Menu, X }
    });
  });

  const header = container.querySelector('#header-nav');
  const mobileMenuBtn = container.querySelector('#mobile-menu-btn');
  const mobileMenu = container.querySelector('#mobile-menu');
  const mobileLinks = container.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-background/80', 'backdrop-blur-md', 'border-border');
      header.classList.remove('bg-transparent', 'border-transparent');
    } else {
      header.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-border');
      header.classList.add('bg-transparent', 'border-transparent');
    }
  });

  mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      mobileMenuBtn.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>';
      animate(mobileMenu, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.3 });
    } else {
      animate(mobileMenu, { opacity: [1, 0], y: [0, -20] }, { duration: 0.3 }).then(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
      mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
    }
    import('lucide').then(({ createIcons, Menu, X }) => createIcons({ icons: { Menu, X } }));
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      animate(mobileMenu, { opacity: [1, 0], y: [0, -20] }, { duration: 0.3 }).then(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
      mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
      import('lucide').then(({ createIcons, Menu, X }) => createIcons({ icons: { Menu, X } }));
    });
  });

  // Entrance animation
  animate(header, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.8 });
}
