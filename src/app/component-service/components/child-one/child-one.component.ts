import { Component } from '@angular/core';
import { ComponentChildrenStateService } from '../../service/component-children-state.service';
import { GrandchildOneComponent } from "../grandchild-one/grandchild-one.component";

@Component({
  selector: 'asm-child-one',
  imports: [GrandchildOneComponent],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss',
})
export class ChildOneComponent {
  constructor(private stateService: ComponentChildrenStateService) {}

  bid(bid: number) {
    this.stateService.increaseBid(bid, 'Child One');
  }
}
