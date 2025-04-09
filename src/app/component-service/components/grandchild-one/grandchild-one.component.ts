import { Component } from '@angular/core';
import { ComponentChildrenStateService } from '../../service/component-children-state.service';

@Component({
  selector: 'asm-grandchild-one',
  imports: [],
  templateUrl: './grandchild-one.component.html',
  styleUrl: './grandchild-one.component.scss',
})
export class GrandchildOneComponent {
  constructor(private stateService: ComponentChildrenStateService) {}

  bid(bid: number) {
    this.stateService.increaseBid(bid, 'Grandchild One');
  }
}
