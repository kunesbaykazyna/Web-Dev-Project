import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://127.0.0.1:8000/api/favorites/';

  constructor(private http: HttpClient) { }


  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  toggleFavorite(bookId: number): Observable<any> {
    return this.http.post(this.apiUrl, { book_id: bookId });
  }
}