import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home/:id', component: DetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
