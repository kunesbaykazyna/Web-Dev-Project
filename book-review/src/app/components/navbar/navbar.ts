import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
    search: string = '';
    username: string = '';

    constructor(
        private searchService: SearchService,
        public auth: AuthService
    ) {}

    ngOnInit(): void {
        this.username = localStorage.getItem('username') || '';
    }

    onSearchChange(value: string): void {
        this.search = value;
        this.searchService.setSearch(value);
    }

    logout(): void {
        this.auth.logout();
        localStorage.removeItem('username');
        this.username = '';
    }
}