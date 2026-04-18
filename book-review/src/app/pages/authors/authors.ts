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
  filteredAuthors: Author[] = [];

  loading = true;
  error = '';

  selectedOrdering = 'asc';
  searchText = '';

  constructor(
      private authorService: AuthorService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        this.filteredAuthors = [...data];
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

  filterAuthors() {
    const query = this.searchText.toLowerCase().trim();

    this.filteredAuthors = this.authors.filter(author =>
        author.full_name.toLowerCase().includes(query)
    );

    this.sortFilteredAuthors();
  }

  sortAuthors() {
    this.filterAuthors();
  }

  sortFilteredAuthors() {
    this.filteredAuthors.sort((a, b) => {
      const nameA = a.full_name.toLowerCase();
      const nameB = b.full_name.toLowerCase();

      if (this.selectedOrdering === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
}