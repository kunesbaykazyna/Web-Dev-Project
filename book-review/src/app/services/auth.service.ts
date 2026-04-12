import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://127.0.0.1:8000/api';


  currentUser = signal<string | null>(localStorage.getItem('token'));

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register/`, data);
  }

  login(data: any) {
    return this.http.post<{access: string}>(`${this.apiUrl}/login/`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.access);
        this.currentUser.set(res.access);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
