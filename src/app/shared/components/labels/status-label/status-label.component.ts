import {Component, Input} from '@angular/core';

@Component({
  selector: 'status-label',
  templateUrl: './status-label.component.html',
  styleUrl: './status-label.component.css'
})
export class StatusLabelComponent {
  @Input() status!: string;


  get badgeClasses(): string {
    const base = 'font-semibold px-3 py-1 rounded-full text-xs';

    const statusMap: { [key: string]: string } = {
      approved: 'bg-green-100 text-green-700',
      active: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-800',
      waiting: 'bg-amber-100 text-amber-700',
      'in progress': 'bg-blue-100 text-blue-700',
      cancelled: 'bg-red-100 text-red-700',
      draft: 'bg-gray-200 text-gray-700',
      'on hold': 'bg-purple-100 text-purple-700',
    };

    const key = this.status?.toLowerCase() || '';
    return `${base} ${statusMap[key] || 'bg-gray-100 text-gray-800'}`;
  }
}
