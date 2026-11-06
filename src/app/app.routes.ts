import { Routes } from '@angular/router';
import { Portfolio } from './pages/portfolio/portfolio';
import { Projects } from './pages/projects/projects';
import { Cycling } from './pages/cycling/cycling';

export const routes: Routes = [
    { component: Portfolio, path: "", title: "Sumanth Perambuduri | Full-Stack & Android Engineer" },
    { component: Projects, path: "projects", title: "All Projects & Open Source | Sumanth Perambuduri" },
    { component: Cycling, path: "cycling", title: "Cycling Adventures & Gallery | Sumanth" },
];
