import { Component, inject, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="profile-container card-fade-in">
    <div class="profile-header">
      <div class="avatar-box">
        {{ (profile()?.username?.charAt(0) || 'U').toUpperCase() }}
      </div>
      <div class="header-text">
        <h2>{{ profile()?.username || 'User' }}</h2>
        <span class="badge"><i class="fa-solid fa-book-open"></i> Book Reader</span>
      </div>
    </div>

    <div class="info-section">
      <div class="info-row">
        <span class="label"><i class="fa-solid fa-envelope"></i> Email Address</span>
        <span class="value">{{ profile()?.email || 'Not provided' }}</span>
      </div>
      
      <div class="info-row">
        <span class="label"><i class="fa-solid fa-quote-left"></i> About Me</span>
        
        @if (isEditing()) {
          <textarea #bioInput class="bio-textarea" [value]="profile()?.bio || ''" placeholder="Расскажите о себе..."></textarea>
          <div class="edit-actions">
            <button (click)="saveProfile(bioInput.value)" class="save-btn">
              <i class="fa-solid fa-check"></i> Save
            </button>
            <button (click)="toggleEdit()" class="cancel-btn">
              <i class="fa-solid fa-xmark"></i> Cancel
            </button>
          </div>
        } @else {
          <p class="value bio">
            {{ profile()?.bio || 'No bio yet. Tell us about your favorite books and genres!' }}
          </p>
        }
      </div>
    </div>

    @if (!isEditing()) {
      <div class="actions">
        <button (click)="toggleEdit()" class="edit-btn">
          <i class="fa-solid fa-pen-to-square"></i> Edit Profile
        </button>
        <button (click)="logout()" class="logout-link">
          Sign Out
        </button>
      </div>
    }
  </div>
`,
styles: [`
  .profile-container {
    background: rgba(255, 255, 255, 0.98);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
    backdrop-filter: blur(10px);
  }

  .card-fade-in { animation: fadeIn 0.6s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .profile-header { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; }
  .avatar-box { width: 80px; height: 80px; background: linear-gradient(135deg, #00a896, #02c39a); color: white; border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 700; box-shadow: 0 8px 15px rgba(0, 168, 150, 0.2); }
  .header-text h2 { margin: 0; font-size: 24px; color: #2d3436; }
  .badge { background: #e6f6f4; color: #00a896; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; display: inline-block; margin-top: 5px; }

  .info-section { margin-bottom: 30px; }
  .info-row { margin-bottom: 25px; }
  .label { color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; display: block; margin-bottom: 8px; }
  .label i { margin-right: 5px; color: #00a896; }
  .value { font-weight: 500; color: #2d3436; font-size: 15px; }
  .bio { line-height: 1.6; color: #636e72; background: #f8fafb; padding: 12px; border-radius: 10px; margin: 5px 0 0; }

  .bio-textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border-radius: 10px;
    border: 1.5px solid #e2e8f0;
    font-family: inherit;
    font-size: 14px;
    color: #2d3436;
    background: #fff;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s;
  }
  .bio-textarea:focus { border-color: #00a896; }

  .edit-actions { display: flex; gap: 10px; margin-top: 15px; }
  .save-btn { background: #00a896; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-weight: 600; flex: 1; transition: 0.3s; }
  .save-btn:hover { background: #008f81; transform: translateY(-2px); }
  .cancel-btn { background: #f1f5f9; color: #64748b; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-weight: 600; flex: 1; transition: 0.3s; }
  .cancel-btn:hover { background: #e2e8f0; }

  .actions { display: flex; flex-direction: column; gap: 12px; }
  .edit-btn { background: #00a896; color: white; padding: 14px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 10px; }
  .edit-btn:hover { background: #008f81; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 168, 150, 0.3); }
  .logout-link { background: transparent; color: #ff4757; border: 1px solid #ff4757; padding: 10px; border-radius: 12px; font-size: 14px; cursor: pointer; transition: all 0.2s; }
  .logout-link:hover { background: #fff1f2; }
`]
})
export class ProfileComponent implements OnInit {
  private profileService = inject(ProfileService);
  private authService = inject(AuthService);

  profile = signal<any>(null); 
  loading = signal(true);
  isEditing = signal(false); 

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (res: any) => {
        this.profile.set({ 
          ...res, 
          username: res.username || localStorage.getItem('username') || 'User',
          email: res.email || 'Not provided'
        });
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Load error:', err);
        this.profile.set({ 
          username: localStorage.getItem('username') || 'User',
          email: 'Not provided',
          bio: ''
        });
        this.loading.set(false);
      }
    });
  }

  toggleEdit() {
    this.isEditing.set(!this.isEditing());
  }

  saveProfile(newBio: string) {
    this.profileService.updateProfile({ bio: newBio }).subscribe({
      next: (updated: any) => {
        this.profile.set({
          ...this.profile(),
          bio: updated.bio || newBio
        });
        this.isEditing.set(false);
        alert('Profile updated successfully!');
      },
      error: (err) => {
        console.error('Update error details:', err);
        alert('Failed to update profile. Check console for details.');
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
