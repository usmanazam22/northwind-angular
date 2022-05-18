import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    baseUrl: string = "http://northwind.now.sh/";

    constructor(private http: HttpClient){}

    getProducts(): Observable<any>{
        return this.http.get(this.baseUrl+'api/products');
    }
}