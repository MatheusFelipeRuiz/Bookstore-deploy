import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {

  book: Book = {
    title: '',
    text: '',
  }

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getBook();
  }

  getBook(): void {
    this.book.id = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.findById(this.book.id).subscribe((response) => {
      this.book.id = response.id;
      this.book.text = response.text;
      this.book.title = response.title;
      this.book.authorName = response.authorName;
    });
    console.log(this.book);
  }

  deleteBook(): void {
    const id: string = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.deleteBook(id).subscribe((response) => {
      if (response == null) {
        const idCategory: string = String(this.route.snapshot.paramMap.get("id_category"));
        const queryParams = { categoria: idCategory }
        this.router.navigate(["livros"], { queryParams });
      }
    }, (err) => {
      this.bookService.message("Erro ao tentar delete livro, tente novamente mais tarde.");
    });
  }

  cancel(): void {
    this.bookService.cancel();
  }
}
