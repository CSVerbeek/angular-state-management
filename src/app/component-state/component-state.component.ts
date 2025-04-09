import { Component } from '@angular/core';
import { UndestroyedComponentExampleComponent } from './components/undestroyed-component-example/undestroyed-component-example.component';

@Component({
  selector: 'asm-component-state',
  imports: [UndestroyedComponentExampleComponent],
  templateUrl: './component-state.component.html',
  styleUrl: './component-state.component.scss',
})
export class ComponentStateComponent {}
