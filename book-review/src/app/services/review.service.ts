import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private apiUrl = 'http://127.0.0.1:8000/api/books';

  constructor(private http: HttpClient) { }

  getReviews(bookId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${bookId}/reviews/`);
  }

  addReview(bookId: number, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}/reviews/`, data);
  }
}