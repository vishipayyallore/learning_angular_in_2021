import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscriber } from 'rxjs/internal/Subscriber';

import { LocalstorageService } from './localstorage.service';
import { Ibook } from '../interfaces/ibook';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksList: Ibook[];

  constructor(private localStorageService: LocalstorageService) {

  }

  getAllBooks(): Observable<Ibook[]> {
    this.booksList = JSON.parse(this.localStorageService.getItem('books'));

    return new Observable<Ibook[]>(
      (subscriber: Subscriber<Ibook[]>) => {
        setTimeout(() => {
          subscriber.next(this.booksList);
          // subscriber.complete();
        }, 500);
      });

  }

}
