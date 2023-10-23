import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryRead implements OnInit {
  constructor(private categoryService: CategoryService, private router: Router) { }

  categorys: Category[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.categoryService.findAll().subscribe(response => {
      console.log(response);
      this.categorys = response;
    })
  }
  
  goToCategoryCreate(): void {
    this.router.navigate(["categorias/create"]);
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
}
