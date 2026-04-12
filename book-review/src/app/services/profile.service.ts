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
  private apiUrl = 'http://127.0.0.1:8000/api/profile/'; 

  getProfile() {
    return this.http.get<Profile>(this.apiUrl);
  }

  updateProfile(data: { bio?: string, avatar?: File }) {
    const formData = new FormData();
    
    if (data.bio !== undefined) {
      formData.append('bio', data.bio);
    }
    
    if (data.avatar) {
      formData.append('avatar', data.avatar, data.avatar.name);
    }
    return this.http.patch<Profile>(this.apiUrl, formData);
  }
}
