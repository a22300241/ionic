import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'tap1',
    loadComponent: () => import('./pages/tap1/tap1.page').then( m => m.Tap1Page)
  },
  {
    path: '',
    redirectTo: 'tap1',
    pathMatch: 'full',
  },
  {
    path: 'tap2',
    loadComponent: () => import('./pages/tap2/tap2.page').then( m => m.Tap2Page)
  },  {
    path: 'tap3',
    loadComponent: () => import('./pages/tap3/tap3.page').then( m => m.Tap3Page)
  },




];
