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
  selector: "asm-personal-information",
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
  templateUrl: "./personal-information.component.html",
  styleUrl: "./personal-information.component.scss",
})
export class PersonalInformationComponent {
  private readonly paymentWizardStateService = inject(
    PaymentWizardStateService
  );
  private readonly destroyRef = inject(DestroyRef);

  readonly formGroup = new FormGroup({
    firstName: new FormControl<string>(
      this.paymentWizardStateService.personalInformation().firstName,
      Validators.required
    ),
    lastName: new FormControl<string>(
      this.paymentWizardStateService.personalInformation().lastName,
      Validators.required
    ),
  });

  constructor() {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ firstName, lastName }) => {
        if (firstName && lastName) {
          const personalInformation = { firstName, lastName };
          this.paymentWizardStateService.updatePersonalInformation(
            personalInformation
          );
        }
      });
  }
}
