import { Component, inject, OnInit } from '@angular/core';
import tripsJson from '../../../../public/cycling/cycling.json';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-cycling',
  imports: [RouterLink],
  templateUrl: './cycling.html',
})
export class Cycling implements OnInit {
  private seo = inject(SeoService);
  trips = tripsJson;
  selectedImage: string | null = null;

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Cycling Adventures & Photo Gallery | Sumanth',
      description: 'Explore cycling trips, routes, photography, and endurance rides completed across India by Sumanth.',
      ogUrl: 'https://sumanth.dev/cycling',
      keywords: 'Cycling, Strava, Cycling Gallery, Rides, Sumanth, Bicycle Adventures'
    });
  }

  openStrava() {
    if (typeof window !== 'undefined') {
      window.open('https://www.strava.com/athletes/28674981', '_blank');
    }
  }

  openLightbox(image: string) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
