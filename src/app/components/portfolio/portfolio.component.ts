import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import projectsjson from '../../../assets/projects.json'

@Component({
  selector: 'app-portfolio',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {

  projects = projectsjson
  themeToggle = document.body.classList.contains("dark")

  toggleTheme = () => {
    if(document.body.classList.contains("dark")) {
      document.body.classList.replace("dark", "light")
      this.themeToggle = false
    } else {
      document.body.classList.replace("light", "dark")
      this.themeToggle = true
    }
  }

}
