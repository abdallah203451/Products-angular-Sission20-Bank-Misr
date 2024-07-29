export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  images: string;
}

export interface CartItem extends Product {
  quantity: number;
}
