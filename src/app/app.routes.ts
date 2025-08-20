import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/paysquareroot/home/home.component';
import { ChangelogComponent } from './components/paysquareroot/changelog/changelog.component';

export const routes: Routes = [
    { component: PortfolioComponent, path: "" },
    { component: HomeComponent, path: "paysquareroot" },
    { component: ChangelogComponent, path: "paysquareroot/changelog" }
];