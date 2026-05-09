import './styles.css';
import { createHero } from './components/Hero.js';
import { createNavbar } from './components/Navbar.js';
import { createAbout } from './components/About.js';
import { createSkills } from './components/Skills.js';
import { createProjects } from './components/Projects.js';
import { createExperience } from './components/Experience.js';
import { createContact } from './components/Contact.js';

document.addEventListener('DOMContentLoaded', () => {
  createNavbar(document.getElementById('navbar'));
  createHero(document.getElementById('hero'));
  createAbout(document.getElementById('about'));
  createSkills(document.getElementById('skills'));
  createProjects(document.getElementById('projects'));
  createExperience(document.getElementById('experience'));
  createContact(document.getElementById('contact'));
});
