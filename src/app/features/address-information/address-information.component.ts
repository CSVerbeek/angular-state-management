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
  selector: "asm-address-information",
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
  templateUrl: "./address-information.component.html",
  styleUrl: "./address-information.component.scss",
})
export class AddressInformationComponent {
  private readonly paymentWizardStateService = inject(
    PaymentWizardStateService
  );
  private readonly destroyRef = inject(DestroyRef);

  readonly formGroup = new FormGroup({
    address: new FormControl<string>(
      this.paymentWizardStateService.addressInformation().address,
      Validators.required
    ),
    city: new FormControl<string>(
      this.paymentWizardStateService.addressInformation().city,
      Validators.required
    ),
  });

  constructor() {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ address, city }) => {
        if (address && city) {
          const addressInformation = { address, city };
          this.paymentWizardStateService.updateAddressInformation(
            addressInformation
          );
        }
      });
  }
}
