import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { AuthenticationService, UserService } from '../services';
import { User, Book, ReadingStatus } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users = [];
  public isCollapsed = false;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private bookService: BookService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllBooks();
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  private loadAllBooks() {
    if (this.bookService.booksCollection.length <= 0) {
      this.bookService.getBooks().subscribe((data: any) => {
        this.bookService.booksCollection = data.books;
      });
    }
  }

  onBookStatusSlected($event: object) {
    this.bookService.booksCollection = this.bookService.booksCollection.map(book => {
      if (book.title === ($event['data'] as Book).title) {
        console.log('book found : ', book, $event['status']);
        book.status = $event['status'];
      }
      return book;
    });
  }

}
