import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PaysquarerootComponent } from './components/paysquareroot/paysquareroot.component';

export const routes: Routes = [
    { component: PortfolioComponent, path: "" },
    { component: PaysquarerootComponent, path: "paysquareroot" }
];
