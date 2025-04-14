import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'asm-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  links: {
    route: string[];
    text: string;
  }[] = [
    {
      route: ['/'],
      text: 'Home',
    },
    {
      route: ['/', 'component-state'],
      text: 'Component State',
    },
    {
      route: ['/', 'input-output-component-state'],
      text: 'Input Output Component State',
    },
    {
      route: ['/', 'component-service'],
      text: 'Component Service',
    },
    {
      route: ['/', 'route-service'],
      text: 'Route Service',
    },
    {
      route: ['/', 'route-service'],
      text: 'Route Service',
    },
    {
      route: ['/', 'app-global-state'],
      text: 'App Global State',
    },
    {
      route: ['/', 'non-persistent-wizard'],
      text: 'Wizard without persistent state',
    },
    {
      route: ['/', 'persistent-wizard'],
      text: 'Wizard with persistent state',
    },
  ];
}
