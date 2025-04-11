import { Component } from "@angular/core";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";

@Component({
  selector: "asm-payment-details",
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
  ],
  templateUrl: "./payment-details.component.html",
  styleUrl: "./payment-details.component.scss",
})
export class PaymentDetailsComponent {}
