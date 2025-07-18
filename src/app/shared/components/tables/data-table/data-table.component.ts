import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  @Input() columns!: { name: string, value: string }[];
  @Input() heading!: string;
  @Input() data!: any;
  @Input() actions: any[] = [];
  @Input() status!: string;

  @Output() onView = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  dropdownOpen: number | null = null;

  toggleDropdown(index: number) {
    this.dropdownOpen = this.dropdownOpen === index ? null : index;
  }





  @Input() moreOptions!: { label: string; action: string }[][];
  @Output() onMoreAction = new EventEmitter<{ action: string, id: number }>();

  executeMoreAction(action: string, id: number) {
    this.onMoreAction.emit({ action, id });
    this.dropdownOpen = null; // Close dropdown after selecting an option
  }


  // Pagination

  @Input() showPagination: boolean = true;
  @Input() currentPage: number = 1;
  @Input() perPage: number = 10;
  @Input() totalItems: number = 0;

  get totalPages() {
    return Math.ceil(this.totalItems / this.perPage);
  }

  getPages(): number[] {
    return Array(this.totalPages).fill(0);
  }

  @Output() perPageChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
}
