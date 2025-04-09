import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentStateComponent } from './component-state/component-state.component';
import { RouteServiceComponent } from './route-service/route-service.component';
import { OutsideRouteServiceComponent } from './route-service/outside-route-service/outside-route-service.component';
import { RouteStateService } from './route-service/services/route-state.service';
import { ComponentServiceComponent } from './component-service/component-service.component';

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
    title: 'Route Service',
    path: 'route-service',
    component: RouteServiceComponent,
    providers: [RouteStateService],
  },
  {
    title: 'Route Service',
    path: 'outside-route-service',
    component: OutsideRouteServiceComponent,
  },
  {
    title: 'Component Service',
    path: 'component-service',
    component: ComponentServiceComponent,
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
