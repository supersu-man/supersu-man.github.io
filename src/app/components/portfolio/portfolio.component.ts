import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import projectsjson from '../../../assets/projects.json'

@Component({
  selector: 'app-portfolio',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './theme/dark.css',
    './theme/light.css'
  ]
})
export class PortfolioComponent {

  projects = projectsjson
  themeToggle = true

  toggleTheme = () => {
    const element = document.getElementById("theme")
    if(!element) return
    if(element.classList.contains("dark")) {
      element.classList.replace("dark", "light")
      this.themeToggle = false
    } else {
      element.classList.replace("light", "dark")
      this.themeToggle = true
    }
  }

}
