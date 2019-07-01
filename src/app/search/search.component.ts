import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadSearchBooks();
  }

  private loadSearchBooks() {
    if (this.bookService.searchCollection.length <= 0) {
      this.bookService.getBooks().subscribe((data: any) => {
        this.bookService.booksCollection = data.books;
        console.log('calling loadSearchBooks', this.bookService.searchCollection);
      });
    }
  }

  onAddToBookSlected($event) {
    console.log('onAddToBookSlected : ', $event);
    this.bookService.booksCollection.push($event);
    this.bookService.searchCollection = this.bookService.searchCollection.filter(x => {
      if (x.title === $event.title) {
        return false;
      } else {
        return true;
      }
    });
  }

}
