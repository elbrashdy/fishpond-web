import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() heading!: string;
  @Input() isOpen: boolean = false;
  @Input() width!: string;

  @Output() onClose = new EventEmitter();
}
