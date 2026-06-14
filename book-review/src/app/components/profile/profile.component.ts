import { Component, inject, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="profile-page">
      <div class="profile-layout">
        <aside class="profile-sidebar">
          <div class="profile-main-card">
            <div class="profile-cover"></div>
            <div class="profile-avatar-wrap">
              <div class="profile-avatar">
                {{ (profile()?.username?.charAt(0) || 'U').toUpperCase() }}
              </div>
            </div>
            <div class="profile-user-info">
              <h2>{{ profile()?.username || 'User' }}</h2>
              <p class="profile-email">{{ profile()?.email || 'Not provided' }}</p>
              <span class="profile-badge">Book Reader</span>
            </div>
            <div class="profile-stats">
              <div class="stat-box">
                <span class="stat-value">{{ myReviews().length }}</span>
                <span class="stat-label">Reviews</span>
              </div>
            </div>
            @if (!isEditing()) {
              <div class="sidebar-actions">
                <button class="primary-btn" (click)="toggleEdit()">Edit Profile</button>
                <button class="outline-btn danger-btn" (click)="logout()">Sign Out</button>
              </div>
            }
          </div>
        </aside>

        <main class="profile-content">
          <!-- About -->
          <section class="content-card">
            <div class="section-head">
              <div>
                <h3>About</h3>
                <p>Manage your public profile information</p>
              </div>
            </div>
            @if (isEditing()) {
              <div class="edit-block">
                <label class="field-label">About Me</label>
                <textarea class="main-textarea" [(ngModel)]="bioText" placeholder="Расскажите о себе..."></textarea>
                <div class="form-actions">
                  <button class="primary-btn" (click)="saveProfile()">Save Changes</button>
                  <button class="secondary-btn" (click)="toggleEdit()">Cancel</button>
                </div>
              </div>
            } @else {
              <div class="about-view">
                <div class="info-item">
                  <span class="info-title">Username</span>
                  <span class="info-value">{{ profile()?.username || 'User' }}</span>
                </div>
                <div class="info-item">
                  <span class="info-title">Email</span>
                  <span class="info-value">{{ profile()?.email || 'Not provided' }}</span>
                </div>
                <div class="info-item full-width">
                  <span class="info-title">Bio</span>
                  <p class="bio-text">{{ profile()?.bio || 'No bio yet. Tell us about your favorite books and genres!' }}</p>
                </div>
              </div>
            }
          </section>
          
          <section class="content-card">
            <div class="section-head">
              <div>
                <h3>Write a Review</h3>
                <p>Share your opinion about a book</p>
              </div>
            </div>
            <div class="review-form-grid">
              <div class="field-group full-width">
                <label class="field-label">Book Title</label>
                <input class="main-input" type="text" [(ngModel)]="newReview.book_title" placeholder="Enter book title"/>
              </div>
              <div class="field-group full-width">
                <label class="field-label">Rating</label>
                <div class="rating-box">
                  <div class="stars">
                    <span *ngFor="let s of [1,2,3,4,5]" class="star" [class.active]="s <= newReview.rating" (click)="newReview.rating = s">★</span>
                  </div>
                  <span class="rating-text">{{ newReview.rating }}/5</span>
                </div>
              </div>
              <div class="field-group full-width">
                <label class="field-label">Your Review</label>
                <textarea class="main-textarea" [(ngModel)]="newReview.text" placeholder="Share your thoughts about this book..." rows="5"></textarea>
              </div>
            </div>
            <div class="form-actions">
              <button class="primary-btn" (click)="submitReview()" [disabled]="!newReview.text || !newReview.book_title">Post Review</button>
            </div>
            <p class="success-msg" *ngIf="reviewSuccess">Review posted successfully!</p>
            <p class="error-msg" *ngIf="reviewError"> {{ reviewError }}</p>
          </section>
          
          <section class="content-card">
            <div class="section-head">
              <div>
                <h3>My Reviews</h3>
                <p>Your latest published reviews</p>
              </div>
            </div>

            <div *ngIf="myReviews().length === 0" class="empty-reviews">
              You haven't written any reviews yet.
            </div>

            <div class="reviews-list" *ngIf="myReviews().length > 0">
              <div class="review-card" *ngFor="let r of myReviews()">
                <div class="review-card-head">
                  <a *ngIf="r.book" [routerLink]="['/books', r.book]" class="review-book-title">
                    📖 {{ r.book_title || 'Book #' + r.book }}
                  </a>
                  <div class="review-right">
                    <span class="review-rating">{{ getStars(r.rating) }}</span>
                    <span class="review-date">{{ r.created_at | date:'dd.MM.yyyy' }}</span>
                  </div>
                </div>
                <p class="review-content">{{ r.text }}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .profile-page {
      min-height: 100vh;
      padding: 32px 20px 48px;
      background: radial-gradient(circle at top left, rgba(0,168,150,0.08), transparent 30%),
      radial-gradient(circle at bottom right, rgba(2,195,154,0.08), transparent 30%), #f8fafb;
    }

    .profile-layout {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 24px;
      align-items: start;
    }

    .profile-content { display: flex; flex-direction: column; gap: 24px; min-width: 0; }

    .profile-main-card, .content-card {
      background: #ffffff;
      border-radius: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
      border: 1px solid rgba(226,232,240,0.9);
      overflow: hidden;
    }

    .profile-main-card { position: sticky; top: 24px; }
    .profile-cover { height: 110px; background: linear-gradient(135deg, #115754, rgba(70,174,169,0.89)); }

    .profile-avatar-wrap { display: flex; justify-content: center; margin-top: -42px; padding: 0 24px; }
    .profile-avatar {
      width: 92px; height: 92px; border-radius: 20%; border: 4px solid #fff;
      background: linear-gradient(135deg, #0b615a, rgb(44,184,179)); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-size: 34px; font-weight: 700; box-shadow: 0 8px 18px rgba(0,168,150,0.25);
    }

    .profile-user-info { text-align: center; padding: 18px 24px 8px; }
    .profile-user-info h2 { margin: 0; font-size: 24px; color: #1a1a2e; font-weight: 700; }
    .profile-email { margin: 8px 0 0; color: #64748b; font-size: 14px; word-break: break-word; }
    .profile-badge { display: inline-block; margin-top: 12px; padding: 6px 12px; border-radius: 999px; background: #e6f6f4; color: #00a896; font-size: 12px; font-weight: 700; }

    .profile-stats { padding: 20px 24px 8px; }
    .stat-box { background: #f8fafb; border: 1px solid #eef2f7; border-radius: 16px; padding: 16px 12px; text-align: center; }
    .stat-value { display: block; font-size: 20px; font-weight: 700; color: #1a1a2e; margin-bottom: 4px; }
    .stat-label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }

    .sidebar-actions { display: flex; flex-direction: column; gap: 12px; padding: 20px 24px 24px; }

    .content-card { padding: 28px; }
    .section-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid #eef2f7; }
    .section-head h3 { margin: 0; font-size: 30px; color: #1a1a2e; font-weight: 800; }
    .section-head p { margin: 6px 0 0; color: #64748b; font-size: 16px; }

    .about-view { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .info-item { background: #f8fafb; border: 1px solid #eef2f7; border-radius: 18px; padding: 18px; }
    .full-width { grid-column: 1 / -1; }
    .info-title, .field-label { display: block; margin-bottom: 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700; }
    .info-value { color: #1f2937; font-size: 15px; font-weight: 500; }
    .bio-text { margin: 0; line-height: 1.7; color: #4b5563; font-size: 15px; }

    .edit-block { display: grid; gap: 18px; }
    .review-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .field-group { display: flex; flex-direction: column; }

    .main-input, .main-textarea {
      width: 100%; box-sizing: border-box; border: 1.5px solid #dbe4ee; border-radius: 16px;
      padding: 14px 16px; font-size: 14px; font-family: inherit; background: #fff; color: #1f2937; outline: none; transition: 0.2s ease;
    }
    .main-input:focus, .main-textarea:focus { border-color: #00a896; box-shadow: 0 0 0 4px rgba(0,168,150,0.10); }
    .main-textarea { min-height: 130px; resize: vertical; }

    .rating-box { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; min-height: 52px; padding: 12px 16px; border: 1.5px solid #dbe4ee; border-radius: 16px; background: #fff; }
    .stars { display: flex; gap: 6px; }
    .star { font-size: 28px; cursor: pointer; color: #d6d6d6; transition: 0.15s ease; user-select: none; }
    .star:hover { transform: scale(1.05); color: #f5a623; }
    .star.active { color: #f5a623; }
    .rating-text { color: #64748b; font-size: 14px; font-weight: 600; }

    .form-actions { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; }
    .primary-btn, .secondary-btn, .outline-btn { border: none; border-radius: 14px; padding: 13px 18px; font-size: 14px; font-weight: 700; cursor: pointer; transition: 0.2s ease; }
    .primary-btn { background: #00a896; color: #fff; }
    .primary-btn:hover:not(:disabled) { background: #008f81; transform: translateY(-1px); }
    .primary-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .secondary-btn { background: #f1f5f9; color: #475569; }
    .secondary-btn:hover { background: #e2e8f0; }
    .outline-btn { background: transparent; border: 1.5px solid #dbe4ee; color: #334155; }
    .outline-btn:hover { background: #f8fafb; }
    .danger-btn { color: #ff4757; border-color: #ff4757; }
    .danger-btn:hover { background: #fff1f2; }

    .success-msg { margin: 16px 0 0; font-size: 14px; font-weight: 500; color: #00a896; }
    .error-msg { margin: 16px 0 0; font-size: 14px; font-weight: 500; color: #ff4757; }

    .empty-reviews { text-align: center; padding: 32px 0; color: #94a3b8; font-size: 15px; }

    .reviews-list { display: flex; flex-direction: column; gap: 16px; }
    .review-card { border: 1px solid #eef2f7; border-radius: 18px; padding: 18px; background: #fcfdfd; transition: 0.2s ease; }
    .review-card:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.04); transform: translateY(-1px); }

    .review-card-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }

    .review-book-title {
      font-size: 14px; font-weight: 600; color: #00a896;
      text-decoration: none; display: flex; align-items: center; gap: 6px;
    }
    .review-book-title:hover { text-decoration: underline; }

    .review-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .review-rating { color: #f5a623; font-size: 16px; }
    .review-date { color: #94a3b8; font-size: 12px; font-weight: 600; }
    .review-content { margin: 0; color: #4b5563; line-height: 1.7; font-size: 14px; }

    @media (max-width: 980px) {
      .profile-layout { grid-template-columns: 1fr; }
      .profile-main-card { position: static; }
    }
    @media (max-width: 700px) {
      .content-card { padding: 22px; }
      .about-view, .edit-block, .review-form-grid { grid-template-columns: 1fr; }
      .profile-page { padding: 20px 14px 36px; }
    }
  `]
})
export class ProfileComponent implements OnInit {
  private profileService = inject(ProfileService);
  private authService = inject(AuthService);
  private http = inject(HttpClient);

  profile = signal<any>(null);
  loading = signal(true);
  isEditing = signal(false);
  myReviews = signal<any[]>([]);

  bioText = '';
  reviewSuccess = false;
  reviewError = '';
  newReview = { book_title: '', text: '', rating: 5 };

  ngOnInit() {
    this.loadProfile();
    this.loadMyReviews();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (res: any) => {
        this.profile.set({
          ...res,
          username: res.username || localStorage.getItem('username') || 'User',
          email: res.email || 'Not provided'
        });
        this.bioText = res.bio || '';
        this.loading.set(false);
      },
      error: () => {
        this.profile.set({ username: localStorage.getItem('username') || 'User', email: 'Not provided', bio: '' });
        this.loading.set(false);
      }
    });
  }

  loadMyReviews() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    this.http.get<any[]>('http://127.0.0.1:8000/api/reviews/my/', { headers }).subscribe({
      next: (data) => this.myReviews.set(data),
      error: () => this.myReviews.set([])
    });
  }

  toggleEdit() {
    this.bioText = this.profile()?.bio || '';
    this.isEditing.set(!this.isEditing());
  }

  saveProfile() {
    this.profileService.updateProfile({ bio: this.bioText }).subscribe({
      next: (updated: any) => {
        this.profile.set({ ...this.profile(), bio: updated.bio ?? this.bioText });
        this.bioText = updated.bio ?? this.bioText;
        this.isEditing.set(false);
      },
      error: () => alert('Failed to update profile.')
    });
  }

  submitReview() {
    if (!this.newReview.book_title.trim() || !this.newReview.text.trim()) return;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' });
    const title = this.newReview.book_title.trim();

    this.http.get<any[]>(`http://127.0.0.1:8000/api/books/?search=${encodeURIComponent(title)}`, { headers }).subscribe({
      next: (books) => {
        const found = books.find(b => b.title?.toLowerCase() === title.toLowerCase())
            || books.find(b => b.title?.toLowerCase().includes(title.toLowerCase()));
        if (!found) { this.reviewError = 'Book not found.'; return; }

        this.http.post(
            `http://127.0.0.1:8000/api/reviews/books/${found.id}/reviews/`,
            { text: this.newReview.text, rating: this.newReview.rating },
            { headers }
        ).subscribe({
          next: (res: any) => {
            this.reviewSuccess = true;
            this.reviewError = '';
            // добавляем название книги к отзыву
            this.myReviews.set([{ ...res, book_title: found.title }, ...this.myReviews()]);
            this.newReview = { book_title: '', text: '', rating: 5 };
            setTimeout(() => this.reviewSuccess = false, 3000);
          },
          error: (err) => { this.reviewError = err.error?.detail || 'Failed to post review.'; }
        });
      },
      error: () => { this.reviewError = 'Could not find the book by title.'; }
    });
  }

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  logout() { this.authService.logout(); }
}