import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: HttpClient) {}

    getBooks(filters: { search?: string; genre?: string; ordering?: string } = {}): Observable<Book[]> {
        let params = new HttpParams();
        if (filters.search) params = params.set('search', filters.search);
        if (filters.genre) params = params.set('genre', filters.genre);
        if (filters.ordering) params = params.set('ordering', filters.ordering);
        return this.http.get<Book[]>(`${this.apiUrl}/books/`, { params });
    }

    getBook(id: number): Observable<Book> {
        return this.http.get<Book>(`${this.apiUrl}/books/${id}/`);
    }
}