import { PlaceHolderImages } from './placeholder-images';
import { generateShops, generateProducts } from './generator';

export interface Product {
  id: string;
  name: string;
  shopId: string;
  price: number;
  inStock: boolean;
  category: string;
  imageUrl: string;
  imageHint: string;
}

export interface Shop {
  id: string;
  name:string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  operatingHours: string;
  contact: string;
  paymentOptions: string[];
  imageUrl: string;
  imageHint: string;
}

const SHOPS: Shop[] = generateShops();
const PRODUCTS: Product[] = generateProducts(SHOPS);

export const getProducts = (): (Product & { shop: Shop })[] => {
  return PRODUCTS.map(product => ({
    ...product,
    shop: SHOPS.find(shop => shop.id === product.shopId)!,
  }));
};

export const getShops = (): Shop[] => {
  return SHOPS;
};

export const getShopById = (id: string): Shop | undefined => {
  return SHOPS.find(shop => shop.id === id);
};

export const getProductsByShopId = (shopId: string): Product[] => {
  return PRODUCTS.filter(product => product.shopId === shopId);
};
