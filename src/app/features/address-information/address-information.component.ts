import { Component } from "@angular/core";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";

@Component({
  selector: "asm-address-information",
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
  ],
  templateUrl: "./address-information.component.html",
  styleUrl: "./address-information.component.scss",
})
export class AddressInformationComponent {}
