import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://127.0.0.1:8000/api/reviews/';

  constructor(private http: HttpClient) { }

  
  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
  addReview(reviewData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl, reviewData, { headers });
  }
}