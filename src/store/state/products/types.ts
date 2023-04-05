export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  rating: {count: number; rate: number};
  title: string;
};
export type ProductsType = {allProducts: Product[]; products: Product[]; product: Product[]};

type GetProductsType = {
  type: typeof GET_PRODUCTS;
  products: ProductsType;
};
type GetAllProductsType = {
  type: typeof GET_ALL_PRODUCTS;
  products: ProductsType;
};

export type ProductsActionType = GetProductsType | GetAllProductsType;
