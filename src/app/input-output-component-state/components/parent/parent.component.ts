import { Component, computed, signal } from '@angular/core';
import { DeepState, ShallowState } from '../../types/shallow-state';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'asm-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  readonly shallowState = signal<ShallowState>({
    parentSays: '',
    child1Says: '',
    child2Says: '',
  });

  readonly deepState = signal<DeepState>({
    parentSays: '',
    childrenSay: [],
    grandchildrenSay: [],
  });

  readonly theySayShallow = computed(() => {
    const shallowState = this.shallowState();
    return `P: ${shallowState.parentSays}, C1: ${shallowState.child1Says},  C2: ${shallowState.child2Says}`;
  });

  readonly theySayDeep = computed(() => {
    const deepState = this.deepState();
    return `P: ${deepState.parentSays}, C's: ${deepState.childrenSay.join(', ')},  GC's: ${deepState.grandchildrenSay.join(', ')}`;
  });

  onParentSays(inputEvent: Event) {
    this.shallowState.update(val => ({
      ...val,
      parentSays: (inputEvent.target as HTMLInputElement).value,
    }));
  }
  onChild1Says(text: string) {
    this.shallowState.update(val => ({
      ...val,
      child1Says: text,
    }));
    this.deepState.update(val => ({
      ...val,
      childrenSay: [...val.childrenSay, text],
    }));
  }
  onChild2Says(text: string) {
    this.shallowState.update(val => ({
      ...val,
      child2Says: text,
    }));
    this.deepState.update(val => ({
      ...val,
      childrenSay: [...val.childrenSay, text],
    }));
  }
  onGrandChildSays(text: string) {
    this.deepState.update(val => ({
      ...val,
      grandchildrenSay: [...val.grandchildrenSay, text],
    }));
  }
}
