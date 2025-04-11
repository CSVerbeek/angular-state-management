import { Component, DestroyRef, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { PaymentWizardStateService } from "../payment-wizard/payment-wizard-state.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "asm-payment-details",
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
  ],
  templateUrl: "./payment-details.component.html",
  styleUrl: "./payment-details.component.scss",
})
export class PaymentDetailsComponent {
  private readonly paymentWizardStateService = inject(
    PaymentWizardStateService
  );
  private readonly destroyRef = inject(DestroyRef);

  readonly formGroup = new FormGroup({
    cardNumber: new FormControl<string>(
      this.paymentWizardStateService.paymentDetails().cardNumber,
      Validators.required
    ),
    expiryDate: new FormControl<string>(
      this.paymentWizardStateService.paymentDetails().expiryDate,
      Validators.required
    ),
  });

  constructor() {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ cardNumber, expiryDate }) => {
        if (cardNumber && expiryDate) {
          const paymentDetails = { cardNumber, expiryDate };
          this.paymentWizardStateService.updatePaymentDetails(paymentDetails);
        }
      });
  }
}
