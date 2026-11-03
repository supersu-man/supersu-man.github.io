import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import projectsjson from '../../../../public/projects.json';
import { SeoService } from '../../services/seo.service';
import { Project } from '../portfolio/portfolio';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, FormsModule],
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  private seo = inject(SeoService);
  projects: Project[] = projectsjson as Project[];

  searchQuery = '';
  activeCategory = 'All';
  categories: string[] = ['All', 'Android', 'Full-Stack Web', 'Desktop / Electron', 'Open-Source / PyPI'];

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Projects & Open Source | Sumanth Perambuduri',
      description: 'Explore 19+ open-source tools, Android apps, full-stack web platforms, and desktop utilities built by Sumanth Perambuduri.',
      ogUrl: 'https://sumanth.dev/projects',
      keywords: 'Projects, Open Source, Sumanth, Sumanth Perambuduri, Android Apps, Kotlin, Angular, Electron, Python, PyPI, GitHub'
    });
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  get filteredProjects(): Project[] {
    return this.projects.filter(project => {
      const matchesCategory = this.activeCategory === 'All' || project.category === this.activeCategory;
      const q = this.searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.technologies.toLowerCase().includes(q) ||
        (project.category && project.category.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }

  getCategoryCount(category: string): number {
    if (category === 'All') return this.projects.length;
    return this.projects.filter(p => p.category === category).length;
  }

  getTechList(technologies: string): string[] {
    return technologies.split(',').map(t => t.trim());
  }

  isGithubLink(url?: string): boolean {
    return !!url && url.includes('github.com');
  }

  isPlayStoreLink(url?: string): boolean {
    return !!url && url.includes('play.google.com');
  }

  isPypiLink(url?: string): boolean {
    return !!url && url.includes('pypi.org');
  }
}

