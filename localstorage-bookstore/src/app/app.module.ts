import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/books/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    DashboardComponent,
    BooksListComponent,
    PageNotfoundComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
