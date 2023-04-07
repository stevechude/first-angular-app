import { Component } from '@angular/core';
import { Book } from '../interface/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }
  books: Book[] = [];

  isShowing: boolean = true;

  // myName: string = '';

  cart: Book[] = [];
}
