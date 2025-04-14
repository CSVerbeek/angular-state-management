import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentStateComponent } from './component-state/component-state.component';
import { RouteServiceComponent } from './route-service/route-service.component';
import { OutsideRouteServiceComponent } from './route-service/outside-route-service/outside-route-service.component';
import { RouteStateService } from './route-service/services/route-state.service';
import { PersistentPaymentWizardComponent } from './features/payment-wizard/persistent-payment-wizard/payment-wizard.component';
import { PersonalInformationComponent } from './features/personal-information/personal-information.component';
import { AddressInformationComponent } from './features/address-information/address-information.component';
import { PaymentDetailsComponent } from './features/payment-details/payment-details.component';
import { PaymentConfirmationComponent } from './features/payment-confirmation/payment-confirmation.component';
import { ComponentServiceComponent } from './component-service/component-service.component';
import { PaymentWizardStateService } from './features/payment-wizard/payment-wizard-state.service';
import { NonPersistentPaymentWizardComponent } from './features/payment-wizard/non-persistent-payment-wizard/payment-wizard.component';
import { InputOutputComponentStateComponent } from './input-output-component-state/input-output-component-state.component';

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
    title: 'Input Output Component State',
    path: 'input-output-component-state',
    component: InputOutputComponentStateComponent,
  },
  {
    title: 'Component Service',
    path: 'component-service',
    component: ComponentServiceComponent,
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
    path: 'persistent-wizard',
    component: PersistentPaymentWizardComponent,
    providers: [PaymentWizardStateService],
    children: [
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'address-information', component: AddressInformationComponent },
      { path: 'payment-details', component: PaymentDetailsComponent },
      { path: 'payment-confirmation', component: PaymentConfirmationComponent },
      { path: '', redirectTo: 'personal-information', pathMatch: 'full' },
    ],
  },
  {
    path: 'non-persistent-wizard',
    component: NonPersistentPaymentWizardComponent,
    children: [
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'address-information', component: AddressInformationComponent },
      { path: 'payment-details', component: PaymentDetailsComponent },
      { path: 'payment-confirmation', component: PaymentConfirmationComponent },
      { path: '', redirectTo: 'personal-information', pathMatch: 'full' },
    ],
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
