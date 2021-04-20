import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private localStorageService: LocalstorageService) { 

  }
  
  // getAllBooks()

}
