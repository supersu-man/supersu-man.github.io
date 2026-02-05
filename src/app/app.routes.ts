import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio';
import { PaySquareRoot } from './components/paysquareroot/paysquareroot';
import { Cycling } from './components/cycling/cycling';

export const routes: Routes = [
    { component: Portfolio, path: "" },
    { component: PaySquareRoot, path: "paysquareroot" },
    { component: Cycling, path: "cycling" },
];