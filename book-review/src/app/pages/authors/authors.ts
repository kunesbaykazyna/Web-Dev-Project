import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService, Author } from '../../services/author';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors.html',
  styleUrl: './authors.css'
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  loading = true;
  error = '';

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading authors:', err);
        this.error = 'Failed to load authors';
        this.loading = false;
      }
    });
  }
}