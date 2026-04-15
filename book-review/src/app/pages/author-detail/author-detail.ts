import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthorService, Author } from '../../services/author';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { BookCardComponent } from '../../components/book-card/book-card';

@Component({
    selector: 'app-author-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, BookCardComponent],
    templateUrl: './author-detail.html',
    styleUrl: './author-detail.css'
})
export class AuthorDetailComponent implements OnInit {
    author: Author | null = null;
    books: Book[] = [];
    loading = true;
    error = '';

    constructor(
        private route: ActivatedRoute,
        private authorService: AuthorService,
        private bookService: BookService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.authorService.getAuthorById(id).subscribe({
            next: (data) => {
                this.author = data;
                this.loadBooks(data.full_name);
            },
            error: () => {
                this.error = 'Автор не найден';
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }

    loadBooks(authorName: string): void {
        this.bookService.getBooks({ search: authorName }).subscribe({
            next: (data) => {
                this.books = data;
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: () => {
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }

    getInitials(name: string): string {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
}