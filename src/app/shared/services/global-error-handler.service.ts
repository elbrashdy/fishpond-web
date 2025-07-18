import { Injectable } from '@angular/core';
import {ToastService} from "./toast.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class GlobalErrorHandlerService {

  constructor(
    private toastS: ToastService
  ) {
  }

  handleError(error: any) {
    if(error instanceof HttpErrorResponse) {
      if(error.status === 401) {
        this.toastS.error(error.error.message);
      } else if(error.status === 0) {
        this.toastS.error("Server not found!");
      } else if(error.status === 403) {
        //
        console.log('Unauthorized');
      } else if(error.status === 500) {
        this.toastS.error(error.error.message);
      } else if(error.status === 404) {
        this.toastS.error(error.error.message);
      } else if(error.status === 400) {
        //
        this.toastS.error(error.error.message);
      } else if(error.status === 422) {
        this.toastS.error(error.error.message);
      }
    } else {
      console.log(error)
    }


  }

}
