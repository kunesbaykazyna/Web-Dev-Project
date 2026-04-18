import { Routes } from '@angular/router';
import { BooksListComponent } from './pages/books-list/books-list';
import { BookDetailComponent } from './pages/book-detail/book-detail';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthorsComponent } from './pages/authors/authors';
import { AuthGuard } from './guards/auth.guard';
import { AuthorDetailComponent } from './pages/author-detail/author-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },

    { path: 'books', component: BooksListComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'genre/:genre', loadComponent: () => import('./pages/genre-books/genre-books').then(m => m.GenreBooksComponent) },

    { path: 'books/:id', component: BookDetailComponent },
    { path: 'authors/:id', component: AuthorDetailComponent },

    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: 'books' } 
];
