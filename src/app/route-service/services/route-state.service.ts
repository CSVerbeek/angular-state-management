import { computed, Injectable, OnDestroy, signal } from '@angular/core';
import { RouteState } from '../types/route-state';

@Injectable()
export class RouteStateService implements OnDestroy {
  private readonly normalizedRouteState = signal<RouteState>({
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
  });
  readonly routeState = computed(() => {
    const state = this.normalizedRouteState();
    const all = `Summary: ${state.prop1} ${state.prop2} ${state.prop3}`;
    return {
      ...state,
      all,
    };
  });

  constructor() {
    console.info('RouteStateService is created');
  }

  ngOnDestroy(): void {
    // Once instantiated it will not get destroyed
    console.info('RouteStateService instance is destroyed');
  }
}
