import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksCollection: Array<Book> = [];
  searchCollection: Array<Book> = [];

  constructor(private httpClient: HttpClient) {
    this.getBooks().subscribe((data: any) => {
      this.searchCollection = data.search;
      this.booksCollection = data.books;
      console.log('calling loadSearchBooks', this.searchCollection);
    });
  }

  getBooks() {
    console.log('calling getBooks');
    return this.httpClient.get<Book[]>('assets/data.json');
  }

}
