import { Component, computed, input, output } from '@angular/core';
import { DeepState, ShallowState } from '../../types/shallow-state';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'asm-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  readonly saysSomething = output<string>();
  readonly childSaysSomething = output<string>();
  readonly shallowState = input<ShallowState>({
    parentSays: '',
    child1Says: '',
    child2Says: '',
  });
  readonly deepState = input.required<DeepState>();
  readonly hasChild = input<boolean>(false);

  whatISaid: string = '';
  readonly isSiblingAgreeing = computed(
    () => this.shallowState().child1Says && this.shallowState().child1Says == this.shallowState().child2Says
  );
  readonly siblingSays = computed(() =>
    this.shallowState().child1Says == this.whatISaid ? this.shallowState().child2Says : this.shallowState().child1Says
  );

  onSay() {
    this.saysSomething.emit(this.whatISaid);
  }

  onAgree() {
    this.whatISaid = this.siblingSays();
    this.onSay();
  }

  onChildSays(text: string) {
    this.childSaysSomething.emit(text);
  }
}
