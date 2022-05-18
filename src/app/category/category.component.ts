import { Component, OnInit } from '@angular/core';
import { category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'nor-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = 'category';
  category!: category[];
  Category = new category();
  loading: boolean = false;
  errorMessage!: '';

  constructor(private categoryService: CategoryService){}

  ngOnInit(){
    this.getCategory()
  }

  public getCategory(){
    this.loading = true;
    this.errorMessage = "";
    this.categoryService.getCategories().subscribe(
      (response) => {
        console.log('response received')
        this.category = response;
      },
      (error) => {
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        console.log('Request completed')
        this.loading = false;
      })
  }
}
