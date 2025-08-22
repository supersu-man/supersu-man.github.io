import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: [
    '../theme/dark.css',
    '../theme/light.css'
  ]
})
export class HomeComponent {

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

  downloadApp = () => {
    window.open('/assets/paysquareroot/paysquareroot-1.0-beta.apk')
  }

}
