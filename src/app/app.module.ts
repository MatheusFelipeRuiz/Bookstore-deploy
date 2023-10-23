import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CategoryCreateComponent } from './components/view/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/view/category/category-delete/category-delete.component';
import { CategoryRead } from './components/view/category/category-read/category-read.component';
import { HomeComponent } from './components/view/home.component';
import { CategoryEditComponent } from './components/view/category/category-edit/category-edit.component';
import { BookReadComponent } from './components/view/book/book-read/book-read.component';
import { BookDeleteComponent } from './components/view/book/book-delete/book-delete.component';
import { BookCreateComponent } from './components/view/book/book-create/book-create.component';
import { BookEditComponent } from './components/view/book/book-edit/book-edit.component';
import { BookReadTextComponent } from './components/view/book/book-read-text/book-read-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoryRead,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    BookReadComponent,
    BookDeleteComponent,
    BookCreateComponent,
    BookEditComponent,
    BookReadTextComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
