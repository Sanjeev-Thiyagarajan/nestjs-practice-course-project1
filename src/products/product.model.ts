export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
}

export enum ProductCategory {
  ELECTRONICS = 'ELECTRONICS',
  FOOD = 'FOOD',
  VEHICLES = 'VEHICLES',
  UNCLASSIFIED = 'UNCLASSIFIED',
}
