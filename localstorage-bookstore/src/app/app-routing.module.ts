import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { DeleteBookComponent } from './components/books/delete-book/delete-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:bookId', component: EditBookComponent },
  { path: 'delete-book/:bookId', component: DeleteBookComponent },
  { path: 'pagenotfound', component: PageNotfoundComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
