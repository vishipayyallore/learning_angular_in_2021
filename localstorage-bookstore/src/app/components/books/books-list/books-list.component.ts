import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { Ibook } from '../../interfaces/ibook';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy {

  booksList: Ibook[];
  imageWidth = 50;
  imageMargin = 1;
  booksServiceSubscription: Subscription;

  // Dependency Injection (Construction Injection)
  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksServiceSubscription = this.booksService.getAllBooks()
      .subscribe((data: Ibook[]) => {
        this.booksList = data;
        console.log(this.booksList);
      });
  }

  ngOnDestroy() {
    this.booksServiceSubscription.unsubscribe()
  }

}
