import {Injectable, Injector} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastr!: ToastrService

  constructor(
    private injector: Injector,
  ) {
  }

  success(message: string) {
    if (!this.toastr) {
      this.toastr = this.injector.get(ToastrService);
    }

    this.toastr.success(message);
  }

  error(error: any) {
    if (!this.toastr) {
      this.toastr = this.injector.get(ToastrService);
    }

    this.toastr.error("", error);
  }
}
