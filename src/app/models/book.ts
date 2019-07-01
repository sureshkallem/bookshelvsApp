import { ReadingStatus } from './ReadingStatus';

export interface Book {
  title: string;
  author: string;
  image: string;
  status: ReadingStatus;
}
