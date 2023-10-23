import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent {
  constructor(
    private categoryService: CategoryService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {
    this.getCategory();
  }

  category: Category = {
    name: '',
    description: ''
  }

  deleteCategory(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.categoryService.delete(id).subscribe((response) => {
      if (response == null) {
        this.categoryService.message("Categoria deletada com sucesso");
        this.router.navigate(["categorias"]);
      }

    }, (err) => {
      this.categoryService.message(`${err.error.message}`);
    });
  }

  getCategory(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.categoryService.findById(id).subscribe((category) => {
      this.category = category;
    });
  }

  cancel(): void {
    this.categoryService.cancel();
  }


}
