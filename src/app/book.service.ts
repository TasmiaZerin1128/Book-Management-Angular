import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [{id:1, name:"Thinking Fast and Slow",year:2000, availability:true},
  {id:2, name:"Teach Yourself C",year:1983, availability:false},
  {id:3, name:"Introduction to Algorithms",year:1997, availability:true},
  {id:4, name:"Harry Potter and the Sorcerers Stone",year:1975, availability:true}]

  bookToUpdate = new Book();
  bookToUpdateIndex: any = 0;

  bookToView = new Book();
  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }
  deleteBook(booktoDelete: Book): Book[]{
    this.books = this.books.filter((book)=>booktoDelete.id!=book.id);
    return this.books;
  }
  addBook(newBook: Book){
    this.books.push(newBook);
  }
  setBookToUpdate(updatedBook: Book, index: number){
    this.bookToUpdate = updatedBook;
    this.bookToUpdateIndex = index;
  }

  getBookToUpdate(): Book{
    return JSON.parse(JSON.stringify(this.bookToUpdate));
  }
  updateBook(givenBook: Book): Book[]{
    this.books.splice(this.bookToUpdateIndex,1,givenBook);
    return this.books;
  }

  setViewBook(givenBook: Book){
    this.bookToView = givenBook;
  }

  getViewBook(): Book{
    return JSON.parse(JSON.stringify(this.bookToView));
  }
}
