import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfileComponent implements OnInit {
  profile: any = null;
  loading = true;
  error = '';
  activeTab: 'reviews' | 'comments' = 'reviews';

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username')!;
    this.reviewService.getUserProfile(username).subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'User not found';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getStars(rating: number): string {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }
}
