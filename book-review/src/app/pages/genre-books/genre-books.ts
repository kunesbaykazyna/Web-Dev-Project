import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-genre-books',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './genre-books.html',
  styleUrl: './genre-books.css'
})
export class GenreBooksComponent implements OnInit {
  genre: string = '';
  books: Book[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(
      private route: ActivatedRoute,
      private bookService: BookService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const genreParam = params.get('genre');

      if (!genreParam) {
        this.error = 'Genre not found';
        this.loading = false;
        this.cdr.detectChanges();
        return;
      }

      this.genre = genreParam;
      this.loadBooksByGenre();
    });
  }

  loadBooksByGenre(): void {
    this.loading = true;
    this.error = '';

    console.log('Selected genre:', this.genre);

    this.bookService.getBooks({ genre: this.genre }).subscribe({
      next: (data) => {
        console.log('Books received:', data);
        this.books = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading books:', err);
        this.error = 'Failed to load books';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}