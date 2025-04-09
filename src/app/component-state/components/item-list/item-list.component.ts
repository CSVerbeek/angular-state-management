import { Component, input, output } from '@angular/core';
import { Item } from '../../types/item';

@Component({
  selector: 'asm-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  readonly items = input.required<Item[]>();
  readonly selectItem = output<Item>();

  onClickItem(item: Item) {
    this.selectItem.emit(item);
  }
}
