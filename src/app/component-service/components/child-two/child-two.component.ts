import { Component } from '@angular/core';
import { ComponentChildrenStateService } from '../../service/component-children-state.service';
import { GrandchildTwoComponent } from "../grandchild-two/grandchild-two.component";

@Component({
  selector: 'asm-child-two',
  imports: [GrandchildTwoComponent],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss',
})
export class ChildTwoComponent {
  constructor(private stateService: ComponentChildrenStateService) {}

  bid(bid: number) {
    this.stateService.increaseBid(bid, 'Child Two');
  }
}
