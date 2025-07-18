import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'submit-button',
  templateUrl: './submit-button.component.html'
})
export class SubmitButtonComponent {
  @Input() name!: string;
  @Input() form!: FormGroup;
  @Input() isLoading: boolean = false;
}
