
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink], 
  template: `
  <div class="auth-container">
    <h2>Welcome Back!</h2>
    <span class="subtitle">Please enter your details to sign in</span>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="input-group">
        <i class="fa-solid fa-user"></i>
        <input formControlName="username" placeholder="Username" type="text">
      </div>

      <div class="input-group">
        <i class="fa-solid fa-lock"></i>
        <input formControlName="password" placeholder="Password" type="password">
      </div>

      <button type="submit" [disabled]="loginForm.invalid">
        Sign In
      </button>

      @if (error) { <p class="error">{{ error }}</p> }
    </form>

    <div class="extra-links">
      <p>Don't have an account? <a routerLink="/register">Create one</a></p>
      <a href="#">Forgot password?</a>
    </div>
  </div>
`

})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  
  error = '';
  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Успешный вход!', response);
        
        const username = this.loginForm.value.username;
        if (username) {
          localStorage.setItem('username', username);
        }
        
        this.router.navigate(['/profile']); 
      },
      error: (err) => {
        this.error = 'Invalid credentials';
      }
    });
  }
}

  }

