import { PlaceHolderImages } from './placeholder-images';

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

const SHOPS: Shop[] = [
  {
    id: '1',
    name: 'Merkato General Store',
    location: { lat: 9.015, lng: 38.745 },
    address: '123 Merkato St, Addis Ababa',
    operatingHours: 'Mon-Sat: 8 AM - 8 PM',
    contact: '+251 91 123 4567',
    paymentOptions: ['Cash', 'Telebirr'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'shop-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'shop-1')?.imageHint || '',
  },
  {
    id: '2',
    name: 'Bole Fresh Goods',
    location: { lat: 8.995, lng: 38.791 },
    address: '456 Bole Rd, Addis Ababa',
    operatingHours: 'Every day: 7 AM - 10 PM',
    contact: '+251 92 345 6789',
    paymentOptions: ['Cash', 'Telebirr', 'CBE Birr', 'Credit Card'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'shop-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'shop-2')?.imageHint || '',
  },
  {
    id: '3',
    name: 'Piassa Spice Corner',
    location: { lat: 9.033, lng: 38.750 },
    address: '789 Piassa Ave, Addis Ababa',
    operatingHours: 'Mon-Fri: 9 AM - 6 PM',
    contact: '+251 93 456 7890',
    paymentOptions: ['Cash'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'shop-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'shop-3')?.imageHint || '',
  },
  {
    id: '4',
    name: 'Saris Market Hub',
    location: { lat: 8.980, lng: 38.750 },
    address: '101 Saris Rd, Addis Ababa',
    operatingHours: 'Every day: 6 AM - 9 PM',
    contact: '+251 94 567 8901',
    paymentOptions: ['Cash', 'Telebirr'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'shop-4')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'shop-4')?.imageHint || '',
  },
  {
    id: '5',
    name: 'Ayat Neighborhood Mart',
    location: { lat: 9.023, lng: 38.848 },
    address: '212 Ayat Zone, Addis Ababa',
    operatingHours: 'Mon-Sun: 9 AM - 9 PM',
    contact: '+251 95 678 9012',
    paymentOptions: ['Cash', 'CBE Birr'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'shop-5')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'shop-5')?.imageHint || '',
  },
];

const PRODUCTS: Product[] = [
  {
    id: '101',
    name: 'Coffee',
    shopId: '1',
    price: 150,
    inStock: true,
    category: 'Groceries',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-coffee')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-coffee')?.imageHint || '',
  },
  {
    id: '102',
    name: 'Coffee',
    shopId: '2',
    price: 165,
    inStock: true,
    category: 'Groceries',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-coffee')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-coffee')?.imageHint || '',
  },
  {
    id: '201',
    name: 'Bread',
    shopId: '1',
    price: 20,
    inStock: true,
    category: 'Bakery',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-bread')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-bread')?.imageHint || '',
  },
  {
    id: '202',
    name: 'Bread',
    shopId: '2',
    price: 18,
    inStock: false,
    category: 'Bakery',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-bread')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-bread')?.imageHint || '',
  },
  {
    id: '301',
    name: 'Honey',
    shopId: '1',
    price: 500,
    inStock: true,
    category: 'Groceries',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-honey')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-honey')?.imageHint || '',
  },
    {
    id: '302',
    name: 'Honey',
    shopId: '3',
    price: 480,
    inStock: true,
    category: 'Groceries',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-honey')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-honey')?.imageHint || '',
  },
  {
    id: '401',
    name: 'Teff',
    shopId: '2',
    price: 80,
    inStock: true,
    category: 'Grains',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-teff')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-teff')?.imageHint || '',
  },
  {
    id: '501',
    name: 'Berbere Spice Mix',
    shopId: '3',
    price: 250,
    inStock: true,
    category: 'Spices',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-spices')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-spices')?.imageHint || '',
  },
  {
    id: '601',
    name: 'Cooking Oil',
    shopId: '4',
    price: 350,
    inStock: true,
    category: 'Groceries',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-oil')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-oil')?.imageHint || '',
  },
  {
    id: '701',
    name: 'Red Lentils (Misir)',
    shopId: '4',
    price: 120,
    inStock: true,
    category: 'Grains',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-lentils')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-lentils')?.imageHint || '',
  },
  {
    id: '702',
    name: 'Red Lentils (Misir)',
    shopId: '5',
    price: 125,
    inStock: false,
    category: 'Grains',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-lentils')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-lentils')?.imageHint || '',
  },
  {
    id: '801',
    name: 'Onions',
    shopId: '5',
    price: 40,
    inStock: true,
    category: 'Vegetables',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-onions')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-onions')?.imageHint || '',
  },
  {
    id: '402',
    name: 'Teff',
    shopId: '5',
    price: 85,
    inStock: true,
    category: 'Grains',
    imageUrl: PlaceHolderImages.find(img => img.id === 'prod-teff')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'prod-teff')?.imageHint || '',
  },
];

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
