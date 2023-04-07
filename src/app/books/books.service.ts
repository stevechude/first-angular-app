import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert C martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        price: 7000,
      },
      {
        name: "software architect's handbook",
        author: 'joseph ingeno',
        image:
          'https://m.media-amazon.com/images/I/5131yBbiGbL._SX404_BO1,204,203,200_.jpg',
        price: 8000,
      },
      {
        name: 'Enterprise API Management',
        author: 'Luis Weir',
        image:
          'https://m.media-amazon.com/images/I/51z2JdQ8D4L._SX404_BO1,204,203,200_.jpg',
        price: 2700,
      },
      {
        name: 'Fundamentals of Software Architecture',
        author: 'Mark Richards',
        image:
          'https://m.media-amazon.com/images/I/51qdlJ0V67L._SX379_BO1,204,203,200_.jpg',
        price: 3300,
      },
    ];
  }
}
