import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  getFavorites(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/favorites/`);
  }

  // addFavorite(bookId: number): Observable<any> {
  //   return this.http.post(this.apiUrl, { book_id: bookId });
  // }
  // removeFavorite(bookId: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}${bookId}/`);
  // }
  toggleFavorite(bookId: number): Observable<any> {
    const url = `${this.apiUrl}/favorites/toggle/`;
    return this.http.post(url, { book_id: bookId });
  }
}