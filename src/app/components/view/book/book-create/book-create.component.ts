import { Component } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  title = new FormControl("", [
    Validators.minLength(3),
    Validators.maxLength(60)
  ]);

  authorName = new FormControl("", [
    Validators.minLength(3),
    Validators.maxLength(60)
  ]);

  text = new FormControl("", [
    Validators.minLength(10),
    Validators.maxLength(2000)
  ]);

  invalidField(): boolean {
    return this.authorName.invalid || this.title.invalid || this.text.invalid;
  }

  book: Book = {
    id: '',
    title: '',
    authorName: '',
    text: ''
  }

  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }


  getMessageTitle(): boolean | string {
    if (this.title.invalid) {
      return "O Campo título deve ter entre 3 e 60 caracteres";
    }
    return false;
  }

  getMessageAuthor(): boolean | string {
    if (this.authorName.invalid) {
      return "O campo nome do autor deve ter entre 3 e 60 caracteres";
    }
    return false;
  }

  getMessageText(): boolean | string {
    if (this.text.invalid) {
      return "O campo texto deve ter entre 10 e 200 caracteres";
    }
    return false;
  }

  formatText(): void {
    this.book.authorName?.trim();
    this.book.text?.trim();
    this.book.title.trim();
  }

  create(): void {
    this.formatText();
    const id: string = String(this.route.snapshot.paramMap.get("id_category"));
    this.bookService.createBook(id, this.book).subscribe((response) => {
      console.log(response);
      this.bookService.message("Livro criado com sucesso!");
      const queryParams = { categoria: id };
      this.router.navigate(["livros"], { queryParams });
    }, (err) => {
      this.bookService.message("Erro ao tentar criar novo livro, tente novamente mais tarde!");
      console.log(err);
    });
  }

  cancel(): void {
    this.bookService.cancel();
  }

}
