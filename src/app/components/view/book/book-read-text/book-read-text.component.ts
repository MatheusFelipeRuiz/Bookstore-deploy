import { Component } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read-text',
  templateUrl: './book-read-text.component.html',
  styleUrls: ['./book-read-text.component.css']
})
export class BookReadTextComponent {
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
  ) {
    this.findById();
  }


  findById(): void {
    const id: string = String(this.route.snapshot.paramMap.get("id"));
    this.bookService.findById(id).subscribe((response) => {
      this.book.title = response.title;
      this.book.authorName = response.authorName;
      this.book.text = response.text;
    });
  }

  return(): void {
    this.bookService.cancel();
  }
}
