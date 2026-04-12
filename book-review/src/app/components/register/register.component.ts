import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <h2>Join Us!</h2>
      <span class="subtitle">Create an account to start reviewing books</span>

      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="input-group">
          <i class="fa-solid fa-user"></i>
          <input formControlName="username" placeholder="Username" type="text">
        </div>

        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>
          <input formControlName="email" placeholder="Email Address" type="email">
        </div>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input formControlName="password" placeholder="Password" type="password">
        </div>

        <div class="input-group">
          <i class="fa-solid fa-check-double"></i>
          <input formControlName="password_confirm" placeholder="Confirm Password" type="password">
        </div>

        <button type="submit" [disabled]="registerForm.invalid">
          Create Account
        </button>

        @if (errorMessage) { 
          <p class="error"><i class="fa-solid fa-circle-exclamation"></i> {{ errorMessage }}</p> 
        }
      </form>

      <div class="extra-links">
        <p>Already have an account? <a routerLink="/login">Sign In</a></p>
      </div>
    </div>
  `
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = '';

  registerForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password_confirm: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const emailToSave = this.registerForm.value.email; 
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          if (emailToSave) {
          localStorage.setItem('userEmail', emailToSave); 
        }
        alert('Регистрация прошла успешно!');
        this.router.navigate(['/login']);
      },
        error: (err) => {
          this.errorMessage = err.error?.password?.[0] || err.error?.username?.[0] || 'Ошибка регистрации';
        }
      });
    }
  }
}
