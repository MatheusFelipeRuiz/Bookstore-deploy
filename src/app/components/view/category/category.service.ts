import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { environment } from "environment/environment";
import { Observable } from "rxjs";
import { Category } from "./category.model";


@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    constructor(
        private http: HttpClient,
        private snack: MatSnackBar,
        private router: Router
    ) { }
    baseURL: string = environment.apiUrl;

    findAll(): Observable<Category[]> {
        const url: string = `${this.baseURL}/categorias`;
        return this.http.get<Category[]>(url);
    }

    create(category: Category): Observable<Category> {
        const url: string = `${this.baseURL}/categorias`;
        return this.http.post<Category>(url, category);
    }

    message(msg: string): void {
        this.snack.open(`${msg}`, 'OK', {
            horizontalPosition: "center",
            verticalPosition: "bottom",
            duration: 4000
        })
    }

    cancel(): void {
        this.router.navigate(["categorias"]);
    }

    findById(id: string): Observable<Category> {
        const url: string = `${this.baseURL}/categorias/${id}`;
        return this.http.get<Category>(url)
    }

    delete(id: string): Observable<void> {
        const url: string = `${this.baseURL}/categorias/${id}`;
        return this.http.delete<void>(url);
    }

    edit(category: Category): Observable<void> {
        const url: string = `${this.baseURL}/categorias/${category.id}`;
        return this.http.put<void>(url, category);
    }

}