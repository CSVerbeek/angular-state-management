import { Component, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../../types/item';

@Component({
  selector: 'asm-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss',
})
export class FormComponentComponent implements OnInit {
  readonly item = input<Item>();

  readonly form = new FormGroup({
    first: new FormControl<string>('', { nonNullable: true }),
    second: new FormControl<string>('', { nonNullable: true }),
    third: new FormControl<string>('', { nonNullable: true }),
  });

  ngOnInit(): void {
    const item = this.item();
    if (item) {
      this.form.setValue(item);
    }
  }
}
