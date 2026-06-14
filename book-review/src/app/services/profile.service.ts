import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Profile {
  bio: string;
  avatar?: string;
  username?: string;
  email?: string;
  user?: { username: string; email: string };
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  getProfile() {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };
  return this.http.get(`${this.apiUrl}/profile/`, { headers });
}


  updateProfile(data: any) {
  const token = localStorage.getItem('token');

  const headers = { 
    'Authorization': `Bearer ${token}` 
  };

  return this.http.patch(`${this.apiUrl}/profile/`, data, { headers });
}


}
