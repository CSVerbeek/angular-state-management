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
      route: ['/', 'component-state'],
      text: 'Component State',
    },
  ];
}
