import { Component } from "@angular/core";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";

@Component({
  selector: "asm-payment-confirmation",
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: "./payment-confirmation.component.html",
  styleUrl: "./payment-confirmation.component.scss",
})
export class PaymentConfirmationComponent {}
