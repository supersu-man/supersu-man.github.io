import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paysquareroot',
  imports: [MatSlideToggleModule, MatButtonModule],
  templateUrl: './paysquareroot.html',
  styleUrls: ['./theme.scss']
})
export class PaySquareRoot {

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

  downloadApp = () => {
    window.open('/paysquareroot/paysquareroot-1.0-beta.apk')
  }

}
