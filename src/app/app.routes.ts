import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Reports } from './screens/reports/reports';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'reports', component: Reports },
];
