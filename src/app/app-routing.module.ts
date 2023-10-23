import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home.component';
import { CategoryRead } from './components/view/category/category-read/category-read.component';
import { CategoryCreateComponent } from './components/view/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/view/category/category-delete/category-delete.component';
import { CategoryEditComponent } from './components/view/category/category-edit/category-edit.component';
import { BookReadComponent } from './components/view/book/book-read/book-read.component';
import { BookDeleteComponent } from './components/view/book/book-delete/book-delete.component';
import { BookCreateComponent } from './components/view/book/book-create/book-create.component';
import { BookEditComponent } from './components/view/book/book-edit/book-edit.component';
import { BookReadTextComponent } from './components/view/book/book-read-text/book-read-text.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoryRead
  },
  {
    path: 'categorias/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoryDeleteComponent
  },
  {
    path: 'categorias/edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'livros',
    component: BookReadComponent
  },
  {
    path: 'livros/:id_category/delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'livros/:id_category/create',
    component: BookCreateComponent
  },
  {
    path: 'livros/:id/edit/:id_category',
    component: BookEditComponent
  },
  {
    path: 'livros/:id/read/:id_category',
    component: BookReadTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
