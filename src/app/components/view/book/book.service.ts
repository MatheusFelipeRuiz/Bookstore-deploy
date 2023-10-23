import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string = environment.apiUrl;
  idCategory: string = '';
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    private router: Router,
  ) { }


  message(msg: string): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 4000
    })
  }

  findAll(id: string): Observable<Book[]> {
    const url: string = `${this.baseUrl}/livros?categoria=${id}`;
    this.idCategory = id;
    return this.http.get<Book[]>(url);
  }

  findById(id: string): Observable<Book> {
    const url: string = `${this.baseUrl}/livros/${id}`;
    return this.http.get<Book>(url);
  }

  deleteBook(id: string): Observable<void> {
    const url: string = `${this.baseUrl}/livros/${id}`;
    return this.http.delete<void>(url);
  }

  createBook(idCategory: string, book: Book): Observable<Book> {
    const url: string = `${this.baseUrl}/livros?categoria=${idCategory}`;
    return this.http.post<Book>(url, book);
  }

  cancel(): void {
    const queryParams = { categoria: this.idCategory }
    this.router.navigate(["livros"], { queryParams });
  }

  edit(book: Book): Observable<Book> {
    const url: string = `${this.baseUrl}/livros/${book.id}`;
    return this.http.put<Book>(url, book);
  }
}
