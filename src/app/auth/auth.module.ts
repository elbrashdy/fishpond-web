import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EmailFieldComponent} from "../shared/components/inputs/email-field/email-field.component";
import {PasswordFieldComponent} from "../shared/components/inputs/password-field/password-field.component";
import {SubmitButtonComponent} from "../shared/components/buttons/submit-button/submit-button.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    EmailFieldComponent,
    PasswordFieldComponent,
    SubmitButtonComponent
  ],
  exports: [
    SubmitButtonComponent,
    EmailFieldComponent,
    PasswordFieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule { }
