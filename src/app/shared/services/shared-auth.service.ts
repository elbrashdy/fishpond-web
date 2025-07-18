import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Utility} from "../Utility";

@Injectable({
  providedIn: 'root'
})
export class SharedAuthService {

  TOKEN_NAME = 'f_token'
  USER = 'user'



  constructor(
    private http: HttpClient,
  ) { }

  isLoggedIn(): boolean {
    let token = localStorage.getItem(this.TOKEN_NAME);
    return !!token
  }

  saveAuthData(user: any, token: any) {
    localStorage.setItem(this.USER, JSON.stringify(user));
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  getUser()  {
    if(!localStorage.getItem(this.USER)) {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(this.USER))
    }
  }

  getAuthToken() : HttpHeaders {
    return new HttpHeaders({
      'Authorization' :  `Bearer ${localStorage.getItem(this.TOKEN_NAME)}`
    })
  }

  logout() {
    return this.http.post<{message: string}>(`${Utility.apiUrl}/auth/logout`, '', {
      headers : this.getAuthToken()
    })
  }
}
