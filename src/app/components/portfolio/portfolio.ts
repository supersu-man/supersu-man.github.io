import { Component } from '@angular/core';
import projectsjson from '../../../../public/projects.json'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio',
  imports: [MatSlideToggleModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule],
  schemas: [],
  templateUrl: './portfolio.html',
  styleUrls: ['./theme.scss']
})
export class Portfolio {

  projects = projectsjson
  themeToggle = true

  toggleTheme = () => {
    const element = document.getElementById("theme")
    if (!element) return
    if (element.classList.contains("dark")) {
      element.classList.replace("dark", "light")
      this.themeToggle = false
    } else {
      element.classList.replace("light", "dark")
      this.themeToggle = true
    }
  }

}
