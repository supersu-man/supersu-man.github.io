import { Component, inject, OnInit } from '@angular/core';
import projectsjson from '../../../../public/projects.json';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

export interface Project {
  title: string;
  subtitle: string;
  link?: string;
  source?: string;
  technologies: string;
  category?: string;
  archived?: boolean;
}

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
})
export class Portfolio implements OnInit {
  private seo = inject(SeoService);
  projects: Project[] = projectsjson as Project[];
  copiedEmail = false;

  // Curated top 4 archive projects for the homepage
  topProjects: Project[] = [
    this.projects.find(p => p.title.toLowerCase() === 'splitmate'),
    this.projects.find(p => p.title.toLowerCase() === 'gitamite'),
    this.projects.find(p => p.title.toLowerCase() === 'pyt2s'),
    this.projects.find(p => p.title.toLowerCase() === 'spirit shelf'),
  ].filter((p): p is Project => !!p);

  // Filter or prioritize featured projects
  featuredPennywise = this.projects.find(p => p.title.toLowerCase() === 'pennywise') || {
    title: 'Pennywise',
    subtitle: 'A local-first personal finance app with zero cloud tracking, instant response times, and zero subscriptions.',
    link: 'https://play.google.com/store/apps/details?id=dev.sumanth.pennywise',
    technologies: 'Android Studio, Kotlin'
  };

  featuredCareerDesk = this.projects.find(p => p.title.toLowerCase() === 'career desk') || {
    title: 'Career Desk',
    subtitle: 'An open-source desktop workstation that scrapes career portals and organizes job pipelines locally.',
    source: 'https://github.com/supersu-man/career-desk',
    link: 'https://github.com/supersu-man/career-desk/releases',
    technologies: 'Angular, Electron, TypeScript'
  };

  year: number = new Date().getFullYear() - 2019;

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Sumanth Perambuduri | Full-Stack & Android Engineer',
      description: 'Full-stack & Android engineer building local-first, privacy-focused apps (Kotlin, Jetpack Compose) and modern web platforms (Angular, TypeScript). Based in Hyderabad, India.',
      ogUrl: 'https://sumanth.dev/',
      keywords: 'Sumanth, Sumanth Perambuduri, Software Engineer, Portfolio, Angular, Web Development, Kotlin, Android, Electron, Local-First, Hyderabad'
    });
  }

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('sumanthpera444@gmail.com');
      this.copiedEmail = true;
      setTimeout(() => {
        this.copiedEmail = false;
      }, 2500);
    }
  }

  getPrimaryLink(item: Project): string {
    return item.link || item.source || '#';
  }
}
