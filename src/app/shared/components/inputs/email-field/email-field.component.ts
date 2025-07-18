import {Component, Input} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'email-field',
  templateUrl: './email-field.component.html',
  styleUrl: './email-field.component.css'
})
export class EmailFieldComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() form!: FormGroup;

  get fieldControl() {
    return this.form.get(this.name);
  }

  ngOnInit(): void {
    if (this.fieldControl) {
      this.fieldControl.setValidators([Validators.required, Validators.email]);
      this.fieldControl.updateValueAndValidity()
    }
  }
}
