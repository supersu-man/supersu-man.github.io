import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import tripsJson from '../../../../public/cycling/cycling.json'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cycling',
  imports: [MatCardModule, MatGridListModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './cycling.html',
  styleUrl: './theme.scss',
})
export class Cycling {
  trips = tripsJson;
  themeToggle = true;
  selectedImage: string | null = null;

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

  openStrava() {
    window.open('https://www.strava.com/athletes/28674981', '_blank');
  }

  openLightbox(image: string) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}

