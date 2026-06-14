import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core'; // ChangeDetectorRef қосылды
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { FavoriteService } from '../../services/favorite.service'; 

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;
  isProcessing: boolean = false;
  isFavorite: boolean = false; 

  // cdr: ChangeDetectorRef конструкторға енгізілді
  constructor(
    private favoriteService: FavoriteService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    if (this.book) {
      this.isFavorite = this.book.is_favorite ?? false;
    }
  }

  getStars(rating: number | null): string {
    if (!rating) return '☆☆☆☆☆';
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  toggleLike(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.isProcessing) return;

    this.isProcessing = true;
    
    // 1. БАТЫРМАНЫ БАСҚАН БОЙДА БІРДЕН ӨЗЕРТУ (Optimistic Update)
    this.isFavorite = !this.isFavorite; 
    this.cdr.detectChanges(); // Дәл қазір интерфейсті жаңарт!

    this.favoriteService.toggleFavorite(this.book.id).subscribe({
        next: (response: any) => {
            // 2. Серверден келген нақты статуспен жаңарту
            this.isFavorite = response.is_favorite;
            this.book.is_favorite = response.is_favorite;
            this.isProcessing = false;
            this.cdr.detectChanges(); // Тағы бір рет жаңарту
        },
        error: (err) => {
            console.error('Қате:', err);
            this.isProcessing = false;
            this.isFavorite = !this.isFavorite; // Қате болса, ескі күйіне қайтару
            this.cdr.detectChanges();
        }
    });
  }
}