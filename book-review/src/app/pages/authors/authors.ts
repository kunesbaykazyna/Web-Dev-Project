import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService, Author } from '../../services/author';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './authors.html',
  styleUrl: './authors.css'
})
export class AuthorsComponent implements OnInit {

  authors: Author[] = [];
  loading = true;
  error = '';

  selectedOrdering = 'asc';

  constructor(
      private authorService: AuthorService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        this.sortAuthors();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading authors:', err);
        this.error = 'Failed to load authors';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  sortAuthors() {
    this.authors.sort((a, b) => {
      const firstA = a.full_name[0].toLowerCase();
      const firstB = b.full_name[0].toLowerCase();

      if (this.selectedOrdering === 'asc') {
        return firstA.localeCompare(firstB);
      } else {
        return firstB.localeCompare(firstA);
      }
    });
  }
}