import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { StatusLabelComponent } from './components/labels/status-label/status-label.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { ModalComponent } from './components/modals/modal/modal.component';
import { TextFieldComponent } from './components/inputs/text-field/text-field.component';



@NgModule({
  declarations: [
    SideBarComponent,
    DataTableComponent,
    StatusLabelComponent,
    ModalComponent,
    TextFieldComponent
  ],
  exports: [
    SideBarComponent,
    DataTableComponent,
    ModalComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
