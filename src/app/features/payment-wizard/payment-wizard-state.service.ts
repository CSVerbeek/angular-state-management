import { computed, Injectable, signal } from "@angular/core";
import { PersonalInformation } from "../personal-information/personal-information.model";
import { PaymentDetails } from "../payment-details/payment-details.model";
import { AddressInformation } from "../address-information/address-information.model";

interface PaymentState {
  personalInformation: PersonalInformation;
  addressInformation: AddressInformation;
  paymentDetails: PaymentDetails;
}

@Injectable()
export class PaymentWizardStateService {
  public readonly paymentData = computed(() => this.paymentState());
  public readonly personalInformation = computed(
    () => this.paymentState().personalInformation
  );
  public readonly addressInformation = computed(
    () => this.paymentState().addressInformation
  );
  public readonly paymentDetails = computed(
    () => this.paymentState().paymentDetails
  );

  private readonly paymentState = signal<PaymentState>({
    personalInformation: { firstName: "", lastName: "" },
    addressInformation: { address: "", city: "" },
    paymentDetails: { cardNumber: "", expiryDate: "" },
  });

  public updatePersonalInformation(
    personalInformation: PersonalInformation
  ): void {
    this.paymentState.update((state) => ({
      ...state,
      personalInformation,
    }));
  }

  public updateAddressInformation(
    addressInformation: AddressInformation
  ): void {
    this.paymentState.update((state) => ({
      ...state,
      addressInformation,
    }));
  }

  public updatePaymentDetails(paymentDetails: PaymentDetails): void {
    this.paymentState.update((state) => ({
      ...state,
      paymentDetails,
    }));
  }
}
