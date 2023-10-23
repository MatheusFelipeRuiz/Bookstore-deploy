import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormControl, Validators } from '@angular/forms';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {


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

  fieldInvalid(): boolean {
    return this.title.invalid || this.authorName.invalid || this.text.invalid;
  }

  book: Book = {
    id: '',
    title: '',
    authorName: '',
    text: ''
  };

  getMessage(field: string): boolean | string {
    if (this.title.invalid && field === "title") {
      return "O Campo título deve ter entre 3 e 60 caracteres";
    }

    if (this.authorName.invalid && field === "authorName") {
      return "O campo nome do autor deve ter entre 3 e 60 caracteres";
    }

    if (this.text.invalid && field === "text") {
      return "O campo texto deve ter entre 10 e 2000 caracteres";
    }

    return false;
  }


  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.findById();
  }

  findById() {
    const id: string = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.findById(id).subscribe((response) => {
      this.book = response;
    });
  }

  edit(): void {
    const idCategory = this.route.snapshot.paramMap.get("id_category");
    const queryParams = { categoria: idCategory };

    this.bookService.edit(this.book).subscribe((response) => {
      this.bookService.message("Edição concluída com sucesso!");
      this.router.navigate(["livros"], { queryParams });
    }, (err) => {
      this.bookService.message("Erro ao tentar editar livro, tente em outro momento.");
      this.router.navigate(["livros"], { queryParams });
    });
  }

  cancel(): void {
    this.bookService.cancel();
  }

}
