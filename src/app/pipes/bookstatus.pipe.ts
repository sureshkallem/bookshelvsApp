import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models';

@Pipe({
  name: 'bookStatus'
})
export class BookStatusPipe implements PipeTransform {
  transform(books: Book[], arg: number): Book[] {
    console.log('book : ', arg);
    return books.filter(book => {
      console.log('book : ', book, arg);
      if (book.status === arg) {
        return true;
      } else {
        return false;
      }
    });
  }
}
