import {Component, Input} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'password-field',
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() form!: FormGroup;

  get fieldControl() {
    return this.form.get(this.name);
  }

  ngOnInit(): void {
    if (this.fieldControl) {
      this.fieldControl.setValidators([Validators.required]);
      this.fieldControl.updateValueAndValidity()
    }
  }
}
