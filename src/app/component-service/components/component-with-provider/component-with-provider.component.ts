import { Component, computed } from '@angular/core';
import { ComponentChildrenStateService } from '../../service/component-children-state.service';
import { ChildOneComponent } from '../child-one/child-one.component';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'asm-component-with-provider',
  providers: [ComponentChildrenStateService],
  templateUrl: './component-with-provider.component.html',
  styleUrl: './component-with-provider.component.scss',
  imports: [ChildOneComponent, ChildTwoComponent],
})
export class ComponentWithProviderComponent {
  constructor(readonly stateService: ComponentChildrenStateService) {}

  bid(bid: number) {
    this.stateService.increaseBid(bid, 'Component with Provider');
  }
}
