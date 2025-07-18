import { Component } from '@angular/core';
import {SharedAuthService} from "./shared/services/shared-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fyp-web';


  constructor(
    protected sharedAuth: SharedAuthService,
    private router: Router
  ) {
  }

  logout() {
    this.sharedAuth.logout().subscribe({
      next: (res) => {
        localStorage.clear()
        this.router.navigate(['auth/login'])
      },
      error: err => {
        throw err
      }
    })
  }

}
