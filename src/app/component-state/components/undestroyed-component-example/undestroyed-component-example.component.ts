import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { FormComponentComponent } from '../form-component/form-component.component';
import { Item } from '../../types/item';
import { RerenderOnChangeDirective } from '../../directives/rerender-on-change.directive';

@Component({
  selector: 'asm-undestroyed-component-example',
  imports: [ItemListComponent, FormComponentComponent, RerenderOnChangeDirective],
  templateUrl: './undestroyed-component-example.component.html',
  styleUrl: './undestroyed-component-example.component.scss',
})
export class UndestroyedComponentExampleComponent {
  items: Item[] = [
    {
      first: 'one',
      second: 'a',
      third: 'A',
    },
    {
      first: 'two',
      second: 'b',
      third: 'B',
    },
    {
      first: 'three',
      second: 'c',
      third: 'C',
    },
  ];
  selectedItem: Item | null = null;

  onSelectItem(item: Item) {
    this.selectedItem = item;
  }
}
