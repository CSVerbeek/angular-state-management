import { Component, computed, Injector, signal } from '@angular/core';
import { RouteStateService } from '../services/route-state.service';

@Component({
  selector: 'asm-outside-route-service',
  imports: [],
  templateUrl: './outside-route-service.component.html',
  styleUrl: './outside-route-service.component.scss',
})
export class OutsideRouteServiceComponent {
  private routeStateService = signal<RouteStateService | undefined>(undefined);
  readonly prop1 = computed(() => this.routeStateService()?.routeState().prop1);
  readonly prop2 = computed(() => this.routeStateService()?.routeState().prop2);
  readonly prop3 = computed(() => this.routeStateService()?.routeState().prop3);
  readonly summary = computed(() => this.routeStateService()?.routeState().all);

  constructor(private injector: Injector) {}

  tryGetRouteState() {
    this.routeStateService.set(this.injector.get(RouteStateService));
  }
}
