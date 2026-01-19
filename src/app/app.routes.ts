import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/paysquareroot/home.component';

export const routes: Routes = [
    { component: PortfolioComponent, path: "" },
    { component: HomeComponent, path: "paysquareroot" },
];