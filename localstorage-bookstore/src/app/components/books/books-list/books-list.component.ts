import { Component, OnInit } from '@angular/core';

import { LocalstorageService } from '../../services/localstorage.service';
import { Ibook } from '../../interfaces/ibook';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  booksList: Ibook[];
  imageWidth = 50;
  imageMargin = 1;

  // Dependency Injection (Construction Injection)
  constructor(private localStorageService: LocalstorageService) { }

  ngOnInit(): void {

    this.booksList = JSON.parse(this.localStorageService.getItem('books'));

  }

}
