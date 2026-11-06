import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  selector: 'app-project-list',
  imports: [RouterLink],
  templateUrl: './project-list.html',
})
export class ProjectList {
  @Input() projects: Project[] = [];
  @Input() projectCount = 0;
}
