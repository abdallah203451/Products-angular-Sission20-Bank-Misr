import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  task: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.productService.getTask(id);
  }
}
