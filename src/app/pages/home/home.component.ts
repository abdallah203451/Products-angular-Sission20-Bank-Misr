import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  product: Product[] = [];
  title: string = '';
  category: string = '';
  constructor(private taskService: ProductServiceService) {}

  ngOnInit(): void {
    this.product = this.taskService.getTasks();
  }

  onTaskDelete(id: number): void {
    this.taskService.deleteTask(id);
    this.product = this.taskService.getTasks();
  }
  filter(sort: string): void {
    this.product = this.product.sort((a, b) =>
      sort === 'asc' ? a.price - b.price : b.price - a.price
    );
  }
}
