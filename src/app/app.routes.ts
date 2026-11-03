import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio';
import { Projects } from './components/projects/projects';
import { Cycling } from './components/cycling/cycling';

export const routes: Routes = [
    { component: Portfolio, path: "", title: "Sumanth Perambuduri | Full-Stack & Android Engineer" },
    { component: Projects, path: "projects", title: "All Projects & Open Source | Sumanth Perambuduri" },
    { component: Cycling, path: "cycling", title: "Cycling Adventures & Gallery | Sumanth" },
];
