import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../services/favorite.service';
import { BookCardComponent } from '../../components/book-card/book-card';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {
  favoriteBooks: Book[] = [];
  isLoading = false;

  constructor(
    private favoriteService: FavoriteService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.isLoading = true;
    this.favoriteService.getFavorites().subscribe({
      next: (data: Book[]) => {
        this.favoriteBooks = [...data]; 
        this.isLoading = false;
        // Беттің бірден жаңаруын қамтамасыз етеміз
        this.cdr.markForCheck(); 
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("Қате:", err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}