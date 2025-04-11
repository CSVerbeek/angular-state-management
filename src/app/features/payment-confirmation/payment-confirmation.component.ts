import { Component, inject } from "@angular/core";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { PaymentWizardStateService } from "../payment-wizard/payment-wizard-state.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "asm-payment-confirmation",
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, JsonPipe],
  templateUrl: "./payment-confirmation.component.html",
  styleUrl: "./payment-confirmation.component.scss",
})
export class PaymentConfirmationComponent {
  private readonly paymentWizardStateService = inject(
    PaymentWizardStateService
  );

  readonly paymentData = this.paymentWizardStateService.paymentData;
}
