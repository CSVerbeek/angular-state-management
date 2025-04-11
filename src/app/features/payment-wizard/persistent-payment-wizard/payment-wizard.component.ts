import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButton } from "@angular/material/button";
import { MatTabLink, MatTabNav, MatTabNavPanel } from "@angular/material/tabs";
import { MatToolbar } from "@angular/material/toolbar";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "asm-payment-wizard",
  imports: [
    MatTabNavPanel,
    MatToolbar,
    MatTabLink,
    RouterOutlet,
    MatTabNav,
    MatButton,
    RouterLink,
  ],
  providers: [],
  templateUrl: "./payment-wizard.component.html",
  styleUrl: "./payment-wizard.component.scss",
})
export class PersistentPaymentWizardComponent {
  readonly currentStepIndex = signal(0);
  readonly isFirstStep = computed(() => this.currentStepIndex() === 0);
  readonly isLastStep = computed(
    () => this.currentStepIndex() === this.steps.length - 1
  );

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly steps: string[] = [
    "personal-information",
    "address-information",
    "payment-details",
    "payment-confirmation",
  ];

  constructor() {
    this.changeCurrentIndexOnNavigationEnd();
    this.navigateOnCurrentIndexChange();
  }

  goToNext(): void {
    if (this.currentStepIndex() < this.steps.length - 1) {
      this.currentStepIndex.update((index) => index + 1);
    }
  }

  goToPrevious(): void {
    if (this.currentStepIndex() > 0) {
      this.currentStepIndex.update((index) => index - 1);
    }
  }

  confirmPayment(): void {
    console.log("TODO confirm payment, with post call with data from state");
  }

  private updateCurrentIndex(url: string): void {
    const segments = url.split("/");
    const stepSegment = segments[segments.length - 1];
    const index = this.steps.indexOf(stepSegment);
    if (index !== -1) {
      this.currentStepIndex.set(index);
    }
  }

  private changeCurrentIndexOnNavigationEnd(): void {
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateCurrentIndex(event.urlAfterRedirects);
      });
  }

  private navigateOnCurrentIndexChange(): void {
    effect(() => {
      this.router.navigate([this.steps[this.currentStepIndex()]], {
        relativeTo: this.route,
      });
    });
  }
}
