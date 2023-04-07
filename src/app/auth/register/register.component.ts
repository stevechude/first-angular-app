import { Component } from '@angular/core';
import { RegisterForm } from '../../interface/Auth';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  passwordMatched: boolean = true;

  register() {
    this.authService.reguster(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
