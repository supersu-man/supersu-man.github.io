import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import changelogJson from '../../../../assets/paysquareroot/changelog.json'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-changelog',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './changelog.component.html',
  styleUrls: [
    '../theme/dark.css',
    '../theme/light.css'
  ]
})
export class ChangelogComponent {

  changelog = changelogJson

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
