import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../interface/Book';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(private cartService: CartService) {}

  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();

  isInCart: boolean = false;

  addToCart() {
    this.isInCart = true;

    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
