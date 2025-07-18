import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SharedAuthService} from "../../shared/services/shared-auth.service";
import {Utility} from "../../shared/Utility";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private http: HttpClient,
    private sharedAuthService: SharedAuthService
  ) { }

  create(data: any) {
    return this.http.post(Utility.apiUrl + '/users', data, {
      headers: this.sharedAuthService.getAuthToken()
    })
  }

  changePassword(id: any, data: any) {
    return this.http.put(Utility.apiUrl + '/users/' + id + '/change-password', data, {
      headers: this.sharedAuthService.getAuthToken()
    })
  }

  getAll(currentPage: any, perPage: any) {
    return this.http.get<{data: any}>(`${Utility.apiUrl}/users?page=${currentPage}&perPage=${perPage}`, {
      headers: this.sharedAuthService.getAuthToken()
    })
  }
}
