import { Component } from '@angular/core';
import { ComponentWithProviderComponent } from "./components/component-with-provider/component-with-provider.component";

@Component({
  selector: 'asm-component-service',
  imports: [ComponentWithProviderComponent],
  templateUrl: './component-service.component.html',
  styleUrl: './component-service.component.scss',
})
export class ComponentServiceComponent {}
