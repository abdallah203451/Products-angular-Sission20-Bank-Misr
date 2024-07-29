import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() quantity: number = 0;
  @Output() deleteTask = new EventEmitter<number>();
  constructor(private service: ProductServiceService) {}
  onDelete(): void {
    this.deleteTask.emit(this.product.id);
  }
  addToCart(prod: Product): void {
    let cart = { ...prod, quantity: 1 };
    this.service.addcart(cart);
  }
}
