import { Routes } from '@angular/router';
import { BooksList } from './pages/books-list/books-list';
import { BookDetail } from './pages/book-detail/book-detail';

export const routes: Routes = [
    {
        path: '',
        component: BooksList
    },
    {
        path: 'books',
        component: BooksList
    },
    {
        path: 'books/:id',
        component: BookDetail
    }
];