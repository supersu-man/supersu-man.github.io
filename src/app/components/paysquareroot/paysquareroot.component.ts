import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-paysquareroot',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './paysquareroot.component.html',
  styleUrls: [
    './theme/dark.css',
    './theme/light.css'
  ]
})
export class PaysquarerootComponent {

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

  // {
  //       "title": "PaySquareRoot",
  //       "subtitle": "Employee app to check leaves, events, punch times and more.",
  //       "link": "/paysquareroot",
  //       "technologies": "Android Studio, Kotlin"
  //   },

}
