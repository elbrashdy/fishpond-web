import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from "@angular/router";
import {AppButtonComponent} from "../shared/components/buttons/app-button/app-button.component";
import {SharedModule} from "../shared/shared.module";
import {AuthModule} from "../auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: UserComponent },
]

@NgModule({
  declarations: [
    UserComponent,
    AppButtonComponent
  ],
  exports: [
    AppButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AuthModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
