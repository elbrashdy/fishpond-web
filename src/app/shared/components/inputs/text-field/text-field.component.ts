import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent implements OnInit {
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
