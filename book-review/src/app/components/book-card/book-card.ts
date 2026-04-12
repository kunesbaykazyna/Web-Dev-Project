import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCardComponent {
  @Input() book!: Book;

  getStars(rating: number | null): string {
    if (!rating) return '☆☆☆☆☆';
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }
}