import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {
  category: Category = {
    name: " ", 
    description: " "
  };
  constructor(private router: Router, private categoryService: CategoryService) { }

  cancel(): void {
    this.categoryService.cancel();
  }

  create(): void {

    this.categoryService.create(this.category).subscribe((response) => {
      console.log(response);
      console.log(this.category.description);
      console.log(this.category.name);
      this.categoryService.message("Categoria cadastrado com sucesso!");
      this.router.navigate(["categorias"]);
    }, (err) => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.categoryService.message(err.error.errors[i].message);
      }
    });
  }
}

