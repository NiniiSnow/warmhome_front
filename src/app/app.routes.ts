import { Routes } from '@angular/router';
import { Main } from './pages/main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main, 
    title: 'Main Page',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Home',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPage),
        title: 'About',
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
        title: 'Contact',
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/product-list/product-list').then(m => m.ProductList),
        title: 'Products',
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound),
    title: 'Not Found'
  }
];
