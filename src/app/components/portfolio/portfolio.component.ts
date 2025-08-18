import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {

  toggleTheme = () => {
    if(document.body.classList.contains("dark")) {
      document.body.classList.replace("dark", "light")
    } else {
      document.body.classList.replace("light", "dark")
    }
  }

}
