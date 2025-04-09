import { Component, computed } from '@angular/core';
import { RouteStateService } from './services/route-state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'asm-route-service',
  imports: [RouterLink],
  templateUrl: './route-service.component.html',
  styleUrl: './route-service.component.scss',
})
export class RouteServiceComponent {
  readonly prop1 = computed(() => this.routeStateService.routeState().prop1);
  readonly prop2 = computed(() => this.routeStateService.routeState().prop2);
  readonly prop3 = computed(() => this.routeStateService.routeState().prop3);
  readonly summary = computed(() => this.routeStateService.routeState().all);

  constructor(private routeStateService: RouteStateService) {}
}
