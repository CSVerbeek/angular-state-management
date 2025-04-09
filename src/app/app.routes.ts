import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentStateComponent } from './component-state/component-state.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Component State',
    path: 'component-state',
    component: ComponentStateComponent,
  },
  {
    title: 'Not Found',
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
