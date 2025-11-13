import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab1',
    pathMatch: 'full',
  },
  {
    path: 'tab1',
    loadComponent: () => import('./page/tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./page/tab2/tab2.page').then( m => m.Tab2Page)
  },
];
