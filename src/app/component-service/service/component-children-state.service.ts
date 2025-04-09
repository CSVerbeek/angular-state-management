import { computed, Injectable, OnDestroy, signal } from '@angular/core';
import { ComponentChildrenState } from '../types/component-children-state';

@Injectable()
export class ComponentChildrenStateService implements OnDestroy {
  private readonly state = signal<ComponentChildrenState | undefined>(undefined);

  readonly publicState = computed(() => this.state());

  constructor() {
    console.info('Each instance of the component where the service is provided gets its own instance of the service.');
  }

  increaseBid(bid: number, bidder: string) {
    const state = this.state();
    this.state.set({ bid: (state?.bid ?? 0) + bid, bidder });
  }

  ngOnDestroy(): void {
    console.info('A service provided in a component gets destroyed when the component is destroyed.');
  }
}
