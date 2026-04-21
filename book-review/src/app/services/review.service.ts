import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private base = 'http://127.0.0.1:8000/api/reviews';

  constructor(private http: HttpClient) {}

  getReviews(bookId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/books/${bookId}/reviews/`);
  }

  addReview(bookId: number, data: any): Observable<any> {
    return this.http.post(`${this.base}/books/${bookId}/reviews/`, data);
  }

  updateReview(reviewId: number, data: { text: string; rating: number }): Observable<any> {
    return this.http.patch(`${this.base}/reviews/${reviewId}/`, data);
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.http.delete(`${this.base}/reviews/${reviewId}/`);
  }

  toggleLike(reviewId: number): Observable<any> {
    return this.http.post(`${this.base}/reviews/${reviewId}/like/`, {});
  }

  getComments(reviewId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/reviews/${reviewId}/comments/`);
  }

  addComment(reviewId: number, text: string): Observable<any> {
    return this.http.post(`${this.base}/reviews/${reviewId}/comments/`, { text });
  }

  updateComment(commentId: number, text: string): Observable<any> {
    return this.http.patch(`${this.base}/comments/${commentId}/`, { text });
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(`${this.base}/comments/${commentId}/`);
  }

  getUserProfile(username: string): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/users/${username}/`);
  }
}
