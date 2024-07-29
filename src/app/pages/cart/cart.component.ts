import { Component } from '@angular/core';
import { CartItem } from '../../models/product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart: CartItem[] = [];
  constructor(private taskService: ProductServiceService) {}

  ngOnInit(): void {
    this.cart = this.taskService.getCarts();
  }

  onTaskDelete(id: number): void {
    this.taskService.deleteCart(id);
    this.cart = this.taskService.getCarts();
  }
}
