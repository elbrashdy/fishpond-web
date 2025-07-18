import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ToastService} from "../../shared/services/toast.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  isCreateModalOpen: boolean = false
  isChangePasswordModalOpen: boolean = false
  userForm: FormGroup;
  changePasswordForm: FormGroup;
  users: any[] = []
  isSubmiting: boolean = false;

  columns = [
    {
      name: 'name',
      value: 'name',
    },
    {
      name: 'email',
      value: 'email'
    }
  ]

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService
  ) {

    this.userForm = this.fb.group({
      name: [],
      email: [],
      password: [],
      password_confirmation: [],

    });

    this.changePasswordForm = this.fb.group({
      password: []
    })
  }

  ngOnInit() {
    this.getUsers()
  }

  userID: any = 0;

  openEditModal(id: any) {
    this.isChangePasswordModalOpen = true
    console.log(id)
  }


  changePassword() {
    this.isSubmiting = true
    this.userService.changePassword(this.userID, this.changePasswordForm.value).subscribe({
      next: (response) => {
        this.changePasswordForm.reset()
        this.isSubmiting = false;
        this.isChangePasswordModalOpen = false
        this.toastService.success('User password changed successfully.')
      },
      error: (error) => {
        this.isSubmiting = false
        throw error
      }
    })
  }


  submit() {
    this.isSubmiting = true
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.create(this.userForm.value).subscribe({
        next: (response) => {
          this.userForm.reset()
          this.isCreateModalOpen = false
          this.isSubmiting = false
          this.toastService.success('User successfully created!')
          this.getUsers()
        },
        error: (err) => {
          this.isSubmiting = false
          throw err
        }
      })
    }
  }

  getUsers() {
    this.userService.getAll(this.currentPage, this.perPage).subscribe({
      next: (response) => {
        this.users = response.data.data;
        this.totalItems = response.data.total;
      }
    })
  }

  currentPage = 1;
  perPage = 10;
  totalItems = 0;


  onPageChange(page: number) {
    this.currentPage = page;
    this.getUsers();
  }

  onPerPageChange(size: number) {
    this.perPage = size;
    this.currentPage = 1;
    this.getUsers();
  }

}
