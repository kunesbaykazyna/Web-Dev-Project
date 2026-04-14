import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { BookService } from '../../services/book.service';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  reviews: any[] = [];
  newComment: string = '';
  newRating: number = 5;
  isLoggedIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
   
    this.isLoggedIn = !!localStorage.getItem('token');


    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.bookService.getBook(id).subscribe({
        next: (data) => {
          this.book = data;
          this.loadReviews(id);
        },
        error: (err) => console.error('Error fetching book:', err)
      });
    }
  }

  loadReviews(bookId: number): void {
    this.reviewService.getReviews().subscribe({
      next: (data: any[]) => {
      
        this.reviews = data.filter((review) => review.book === bookId);
      },
      error: (err) => console.error('Error loading reviews:', err)
    });
  }

  addReview(): void {
    if (!this.newComment.trim()) return;

    const reviewData = {
      book: this.book.id,
      comment: this.newComment,
      rating: this.newRating
    };

    this.reviewService.addReview(reviewData).subscribe({
      next: () => {
        this.newComment = ''; 
        this.newRating = 5;   
        this.loadReviews(this.book.id);
      },
      error: (err) => {
        console.error('Error adding review:', err);
        alert('Failed to add review. Please make sure you are logged in.');
      }
    });
  }
}