import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { product } from './product';

@Component({
  selector: 'nor-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product!: product[];
  loading: boolean = false;
  errorMessage!: '';

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProduct()     
  }

  getProduct(){
    this.errorMessage = "";
    this.productService.getProducts().subscribe(
      (response) => {
        console.log('response received')
        this.product = response;
      },
      (error) => {
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () =>{
        console.log('Request completed')
        this.loading = false;
      }
    )
  }

}

