import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {
  category: Category = {
    id: '',
    name: '',
    description: ''
  }
  id: string = String(this.route.snapshot.paramMap.get("id"));
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findById();
  }

  findById(): void {

    this.categoryService.findById(this.id).subscribe((category) => {
      this.category.id = category.id;
      this.category.name = category.name;
      this.category.description = category.description;
    });
  }

  cancel(): void {
    this.categoryService.cancel();
  }

  edit(): void {
    this.categoryService.edit(this.category).subscribe((response) => {
      this.categoryService.message("Categoria editada com sucesso!");
      this.router.navigate(["categorias"]);
    }, (err) => {
      console.log(err);
      this.categoryService.message("Campos não preenchidos");
    });
  }

}
