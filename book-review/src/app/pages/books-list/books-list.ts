import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookCardComponent } from '../../components/book-card/book-card';
import { Book } from '../../models/book.model';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, FormsModule, BookCardComponent],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  allBooks: Book[] = [];

  loading = false;
  error = '';

  search = '';
  navbarSearch = '';

  selectedGenre = '';
  selectedOrdering = '-created_at';

  private searchSubscription!: Subscription;

  genres = ['Fantasy', 'Science Fiction', 'Romance', 'Thriller', 'Horror', 'Classic', 'History'];

  orderingOptions = [
    { value: '-created_at', label: 'Новые сначала' },
    { value: 'created_at', label: 'Старые сначала' },
    { value: 'title', label: 'По названию А-Я' },
    { value: '-title', label: 'По названию Я-А' },
    { value: '-avg_rating', label: 'По рейтингу' },
  ];

  constructor(
      private bookService: BookService,
      private searchService: SearchService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadBooks();

    this.searchSubscription = this.searchService.search$.pipe(
        skip(1),
        debounceTime(300),
        distinctUntilChanged()
    ).subscribe(value => {
      this.navbarSearch = value;
      this.loadBooks();
    });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  loadBooks() {
    this.loading = true;
    this.error = '';
    this.cdr.detectChanges();

    this.bookService.getBooks({
      search: this.navbarSearch,
      genre: this.selectedGenre,
      ordering: this.selectedOrdering
    }).subscribe({
      next: (data) => {
        this.allBooks = data;
        this.applyTitleFilter();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Не удалось загрузить книги';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  applyTitleFilter() {
    const query = this.search.trim().toLowerCase();
    if (!query) {
      this.books = [...this.allBooks];
      return;
    }
    this.books = this.allBooks.filter(book =>
        (book.title || '').toLowerCase().includes(query)
    );
  }

  onSearch() { this.applyTitleFilter(); }
  onFilterChange() { this.loadBooks(); }

  clearFilters() {
    this.search = '';
    this.navbarSearch = '';
    this.selectedGenre = '';
    this.selectedOrdering = '-created_at';
    this.searchService.setSearch('');
    this.loadBooks();
  }
}