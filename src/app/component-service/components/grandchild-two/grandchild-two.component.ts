import { Component } from '@angular/core';
import { ComponentChildrenStateService } from '../../service/component-children-state.service';

@Component({
  selector: 'asm-grandchild-two',
  imports: [],
  templateUrl: './grandchild-two.component.html',
  styleUrl: './grandchild-two.component.scss',
})
export class GrandchildTwoComponent {
  constructor(private stateService: ComponentChildrenStateService) {}

  bid(bid: number) {
    this.stateService.increaseBid(bid, 'Grandchild Two');
  }
}
