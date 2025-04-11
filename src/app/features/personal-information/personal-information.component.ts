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
  selector: "asm-personal-information",
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
  ],
  templateUrl: "./personal-information.component.html",
  styleUrl: "./personal-information.component.scss",
})
export class PersonalInformationComponent {}
