import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookCardComponent } from '../../components/book-card/book-card';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, FormsModule, BookCardComponent],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  loading = false;
  error = '';

  search = '';
  selectedGenre = '';
  selectedOrdering = '-created_at';

  genres = ['Fantasy', 'Science Fiction', 'Romance', 'Thriller', 'Horror', 'Classic', 'History'];

  orderingOptions = [
    { value: '-created_at', label: 'Новые сначала' },
    { value: 'created_at', label: 'Старые сначала' },
    { value: 'title', label: 'По названию А-Я' },
    { value: '-title', label: 'По названию Я-А' },
    { value: '-avg_rating', label: 'По рейтингу' },
  ];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.loading = true;
    this.error = '';
    this.bookService.getBooks({
      search: this.search,
      genre: this.selectedGenre,
      ordering: this.selectedOrdering
    }).subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Не удалось загрузить книги';
        this.loading = false;
      }
    });
  }

  onSearch() {
    this.loadBooks();
  }

  onFilterChange() {
    this.loadBooks();
  }

  clearFilters() {
    this.search = '';
    this.selectedGenre = '';
    this.selectedOrdering = '-created_at';
    this.loadBooks();
  }
}