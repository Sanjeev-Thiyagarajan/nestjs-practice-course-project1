export interface Product {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
}

enum ProductCategory {
  ELECTRONICS = 'ELECTRONICS',
  FOOD = 'FOOD',
  VEHICLES = 'VEHICLES',
}
