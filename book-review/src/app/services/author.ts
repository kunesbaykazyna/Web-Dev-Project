import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  bio: string;
  birth_date: string;
  book_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://127.0.0.1:8000/api/authors/';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`http://127.0.0.1:8000/api/authors/${id}/`);
  }
}