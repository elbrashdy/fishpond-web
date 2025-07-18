import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.css'
})
export class AppButtonComponent {
  @Output() onClick = new EventEmitter();
  @Input() isLoading: boolean = false;

  click(e: Event) {
    e.preventDefault();
    this.onClick.emit()
  }



  @Input() name!: string;
  @Input() type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' = 'primary';
  @Input() icon: string | null = null; // Font Awesome icon name
  @Input() disabled: boolean = false;
  @Input() variant: 'solid' | 'outline' = 'solid';

  get btnClasses(): string {
    const base = 'text-sm rounded px-2 py-0.5 flex items-center gap-2 transition-all duration-150 border';

    const styles: any = {
      primary: {
        solid: 'disabled:bg-primary-300 bg-primary-500 text-white hover:bg-primary-700  active:bg-primary-600 border-transparent',
        outline: 'bg-transparent text-primary-600 border-primary-600 hover:bg-primary-100',
      },
      secondary: {
        solid: 'bg-gray-200 text-gray-800 hover:bg-gray-300 border-transparent',
        outline: 'bg-transparent text-gray-800 border-gray-400 hover:bg-gray-100',
      },
      danger: {
        solid: 'bg-red-600 text-white hover:bg-red-700 border-transparent',
        outline: 'bg-transparent text-red-600 border-red-600 hover:bg-red-100',
      },
      success: {
        solid: 'bg-green-600 text-white hover:bg-green-700 border-transparent',
        outline: 'bg-transparent text-green-600 border-green-600 hover:bg-green-100',
      },
      warning: {
        solid: 'bg-yellow-400 text-black hover:bg-yellow-500 border-transparent',
        outline: 'bg-transparent text-yellow-600 border-yellow-400 hover:bg-yellow-100',
      },
    };

    return `${base} ${styles[this.type][this.variant]}`;
  }
}
