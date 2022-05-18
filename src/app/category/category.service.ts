import { Injectable } from "@angular/core";

import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { category } from "./category";

@Injectable({
    providedIn: 'root'
})

export class CategoryService{
    baseURL: string = "http://northwind.now.sh/";

    constructor(private http: HttpClient){

    }

    getCategories(): Observable<any>{
        return this.http.get(this.baseURL+'api/categories');
    }
}