import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import { ReviewService } from '../../services/review.service';
import { AuthService } from '../../services/auth.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  loading = false;
  error = '';

  reviews: any[] = [];
  reviewsLoading = false;

  newReviewText = '';
  newReviewRating = 5;
  submittingReview = false;

  expandedComments: Set<number> = new Set();
  newCommentText: { [reviewId: number]: string } = {};
  editingComment: { id: number; text: string } | null = null;
  editingReview: { id: number; text: string; rating: number } | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private reviewService: ReviewService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.bookService.getBook(id).subscribe({
      next: (data) => {
        this.book = data;
        this.loading = false;
        this.loadReviews(id);
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Книга не найдена';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadReviews(bookId: number) {
    this.reviewsLoading = true;
    this.reviewService.getReviews(bookId).subscribe({
      next: (data) => {
        this.reviews = data;
        this.reviewsLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.reviewsLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getStars(rating: number | null): string {
    if (!rating) return '☆☆☆☆☆';
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  get isLoggedIn(): boolean {
    return !!this.authService.currentUser();
  }

  submitReview() {
    if (!this.newReviewText.trim() || this.submittingReview) return;
    this.submittingReview = true;
    const bookId = this.book!.id;
    this.reviewService.addReview(bookId, {
      text: this.newReviewText,
      rating: this.newReviewRating
    }).subscribe({
      next: () => {
        this.newReviewText = '';
        this.newReviewRating = 5;
        this.submittingReview = false;
        this.loadReviews(bookId);
      },
      error: () => {
        this.submittingReview = false;
        this.cdr.detectChanges();
      }
    });
  }

  toggleLike(review: any) {
    if (!this.isLoggedIn) return;
    this.reviewService.toggleLike(review.id).subscribe({
      next: (res) => {
        review.is_liked = res.is_liked;
        review.like_count = res.like_count;
        this.cdr.detectChanges();
      }
    });
  }

  toggleComments(reviewId: number) {
    if (this.expandedComments.has(reviewId)) {
      this.expandedComments.delete(reviewId);
    } else {
      this.expandedComments.add(reviewId);
    }
  }

  isCommentsExpanded(reviewId: number): boolean {
    return this.expandedComments.has(reviewId);
  }

  submitComment(review: any) {
    const text = (this.newCommentText[review.id] || '').trim();
    if (!text) return;
    this.reviewService.addComment(review.id, text).subscribe({
      next: (comment) => {
        review.comments = [...(review.comments || []), comment];
        this.newCommentText[review.id] = '';
        this.expandedComments.add(review.id);
        this.cdr.detectChanges();
      }
    });
  }

  startEditComment(comment: any) {
    this.editingComment = { id: comment.id, text: comment.text };
  }

  cancelEditComment() {
    this.editingComment = null;
  }

  saveEditComment(review: any) {
    if (!this.editingComment) return;
    this.reviewService.updateComment(this.editingComment.id, this.editingComment.text).subscribe({
      next: (updated) => {
        const idx = review.comments.findIndex((c: any) => c.id === updated.id);
        if (idx !== -1) review.comments[idx] = updated;
        this.editingComment = null;
        this.cdr.detectChanges();
      }
    });
  }

  startEditReview(review: any) {
    this.editingReview = { id: review.id, text: review.text, rating: review.rating };
  }

  cancelEditReview() {
    this.editingReview = null;
  }

  saveEditReview(review: any) {
    if (!this.editingReview) return;
    this.reviewService.updateReview(this.editingReview.id, {
      text: this.editingReview.text,
      rating: this.editingReview.rating
    }).subscribe({
      next: (updated) => {
        review.text = updated.text;
        review.rating = updated.rating;
        this.editingReview = null;
        this.cdr.detectChanges();
      }
    });
  }

  deleteReview(reviewId: number) {
    this.reviewService.deleteReview(reviewId).subscribe({
      next: () => {
        this.reviews = this.reviews.filter(r => r.id !== reviewId);
        this.cdr.detectChanges();
      }
    });
  }

  deleteComment(review: any, commentId: number) {
    this.reviewService.deleteComment(commentId).subscribe({
      next: () => {
        review.comments = review.comments.filter((c: any) => c.id !== commentId);
        this.cdr.detectChanges();
      }
    });
  }
}
