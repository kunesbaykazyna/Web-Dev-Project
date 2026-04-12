import { Routes } from '@angular/router';
import { BooksListComponent } from './pages/books-list/books-list';
import { BookDetailComponent } from './pages/book-detail/book-detail';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', component: BooksListComponent },
    { path: 'books/:id', component: BookDetailComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];