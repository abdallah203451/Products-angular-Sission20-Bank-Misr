import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    brand: '',
    category: '',
    images: '',
  };
  addProductForm!: FormGroup;

  constructor(
    private taskService: ProductServiceService,
    private router: Router
  ) {}

  addTask(): void {
    this.taskService.addTask(this.product);
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      title: new FormControl(this.product.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.product.description, [
        Validators.required,
        Validators.minLength(20),
      ]),
      price: new FormControl(this.product.price, [
        Validators.required,
        Validators.min(1),
      ]),
      brand: new FormControl(this.product.brand, [Validators.required]),
      category: new FormControl(this.product.category, [Validators.required]),
      images: new FormControl(this.product.images, [Validators.required]),
    });
  }
  get title() {
    return this.addProductForm.get('title');
  }
  get description() {
    return this.addProductForm.get('description');
  }
  get price() {
    return this.addProductForm.get('price');
  }
  get brand() {
    return this.addProductForm.get('brand');
  }
  get category() {
    return this.addProductForm.get('category');
  }
  get images() {
    return this.addProductForm.get('images');
  }
}
