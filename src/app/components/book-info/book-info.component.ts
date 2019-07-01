import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('book') data: Book;
  // tslint:disable-next-line:no-input-rename
  @Input('showBookStatus') showBookStatus: boolean;

  @Output() bookStatusSlected = new EventEmitter<object>();
  @Output() addToBookSlected = new EventEmitter<Book>();

  constructor() {
  }

  ngOnInit() {
    console.log('input data - ng init :', this.data);
  }

  OnBookReadingStatusClik(status, data) {
    console.log('OnBookReadingStatusClik => ', status, data);
    this.bookStatusSlected.emit({ "status": status, 'data': data });
  }

  onAddToList(selectedBook) {
    this.addToBookSlected.emit(selectedBook);
  }

}
