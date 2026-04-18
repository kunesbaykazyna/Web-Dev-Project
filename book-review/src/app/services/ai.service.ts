import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AIService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/chat/'; 

  sendMessage(message: string) {
    return this.http.post<{ reply: string }>(this.apiUrl, { message });
  }
}
