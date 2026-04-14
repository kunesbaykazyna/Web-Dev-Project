import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. Бұл өте маңызды!
import { BookService } from './services/book';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}