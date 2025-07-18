import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {SharedAuthService} from "../../shared/services/shared-auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private shareAuthS: SharedAuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.loginForm = fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() {
    if(this.shareAuthS.isLoggedIn()) this.router.navigate(['/']).then()
  }

  login() {
    this.isLoading = true
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = false
        this.shareAuthS.saveAuthData(response.data.user, response.data.token)
        this.router.navigate(['/']).then()
      },
      error: (err: Error) => {
        this.isLoading = false;
        throw err
      }
    })
  }
}
