import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../shared/interfaces/user";
import {Utility} from "../../shared/Utility";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(user: User) {
    return this.http.post<{data: {user: User, token: string}}>(`${Utility.apiUrl}/auth/login`, user);
  }
}
