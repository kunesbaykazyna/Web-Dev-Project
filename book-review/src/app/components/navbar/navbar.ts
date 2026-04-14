import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
})
export class NavbarComponent {
    search: string = '';

    constructor(
        private searchService: SearchService,
        public auth: AuthService  // ← добавили
    ) {}

    onSearchChange(value: string): void {
        this.search = value;
        this.searchService.setSearch(value);
    }

    logout(): void {
        this.auth.logout();
    }
}